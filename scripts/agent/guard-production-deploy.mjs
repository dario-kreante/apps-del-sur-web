#!/usr/bin/env node
/**
 * PreToolUse hook: stops the agent's Bash tool from publishing to production.
 * Partial defense only. It does not see humans, indirect scripts, MCP connectors
 * or the Vercel API. See docs/cuentas-y-conectores.md.
 */
import { pathToFileURL } from 'node:url';

// These only read or print their arguments, so a mention of vercel there is text.
const TEXT_COMMANDS = new Set(['echo', 'printf', 'grep', 'rg', 'cat', 'ls', 'git']);
const SHELLS = new Set(['sh', 'bash', 'zsh', 'dash']);
const PRODUCTION_SUBCOMMANDS = new Set(['promote', 'rollback', 'alias', 'redeploy', 'rolling-release']);
const UNREADABLE = 'comando con comillas sin cerrar que menciona vercel';
const STDIN_SHELL = 'un shell lee por entrada estándar un comando que menciona vercel';
const VERCEL_BINARY = /^(vercel|vc)(@.*)?$/;
const VERCEL_SCRIPT = /(^|\/)vercel\/.*\.m?js$/;

// Returns the reason a command would reach production, or null when it would not.
export function findProductionDeploy(command) {
  const text = String(command || '');
  const { visible, executedBodies } = extractHeredocs(text);
  for (const body of executedBodies) {
    const reason = findProductionDeploy(body);
    if (reason) return reason;
  }
  for (const nested of commandSubstitutions(visible)) {
    const reason = findProductionDeploy(nested);
    if (reason) return reason;
  }
  const segments = splitSegments(visible);
  if (!segments) return /vercel/i.test(visible) ? UNREADABLE : null;
  if (/vercel|\bvc\b/i.test(visible) && segments.some(readsScriptFromStdin)) return STDIN_SHELL;
  for (const tokens of segments) {
    const reason = inspectSegment(tokens);
    if (reason) return reason;
  }
  return null;
}

function readsScriptFromStdin(tokens) {
  const index = tokens.findIndex((token) => SHELLS.has(baseName(token)));
  if (index < 0 || TEXT_COMMANDS.has(baseName(firstCommand(tokens)))) return false;
  const args = tokens.slice(index + 1);
  if (args.some((arg) => /^-[a-z]*c$/.test(arg))) return false;
  return args.includes('-s') || args.every((arg) => arg.startsWith('-') || arg.startsWith('<') || args.includes('<<<'));
}

function firstCommand(tokens) {
  return tokens.find((token) => !/^[A-Za-z_][A-Za-z0-9_]*=/.test(token)) || '';
}

function inspectSegment(tokens) {
  if (TEXT_COMMANDS.has(baseName(firstCommand(tokens)))) return null;
  const start = tokens.findIndex((token) => {
    const name = baseName(token);
    return SHELLS.has(name) || name === 'eval' || VERCEL_BINARY.test(name) || VERCEL_SCRIPT.test(token);
  });
  if (start < 0) return null;
  const args = tokens.slice(start);
  const name = baseName(args[0]);
  if (name === 'eval') return findProductionDeploy(args.slice(1).join(' '));
  if (SHELLS.has(name)) {
    const flag = args.findIndex((arg) => /^-[a-z]*c$/.test(arg));
    return flag >= 0 && args[flag + 1] ? findProductionDeploy(args[flag + 1]) : null;
  }
  const rest = args.slice(1);
  const subcommand = rest.find((arg) => PRODUCTION_SUBCOMMANDS.has(arg));
  if (subcommand) return `vercel ${subcommand} puede cambiar producción`;
  if (rest.some((arg) => arg === '--prod' || arg.startsWith('--prod='))) return 'vercel con --prod publica en producción';
  const targetIndex = rest.findIndex((arg) => arg === '--target' || arg === '-t');
  if (targetIndex >= 0 && rest[targetIndex + 1] === 'production') return 'vercel con destino production publica en producción';
  if (rest.includes('--target=production')) return 'vercel con destino production publica en producción';
  return null;
}

function baseName(token) {
  return String(token).split('/').pop();
}

// Heredoc bodies are data unless they feed a shell.
function extractHeredocs(text) {
  const lines = text.split('\n');
  const visible = [];
  const executedBodies = [];
  for (let index = 0; index < lines.length; index += 1) {
    const line = lines[index];
    visible.push(line);
    const match = line.match(/<<-?\s*['"]?([A-Za-z_][A-Za-z0-9_]*)['"]?/);
    if (!match) continue;
    const end = lines.findIndex((candidate, position) => position > index && candidate.trim() === match[1]);
    if (end < 0) continue;
    const before = line.slice(0, match.index).trim().split(/\s+/).map(baseName);
    if (before.some((word) => SHELLS.has(word))) executedBodies.push(lines.slice(index + 1, end).join('\n'));
    index = end;
  }
  return { visible: visible.join('\n'), executedBodies };
}

// $(...) and backticks run even inside double quotes; single quotes keep them literal.
function commandSubstitutions(text) {
  const found = [];
  let inSingle = false;
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (char === '\\' && !inSingle) { index += 1; continue; }
    if (char === "'") { inSingle = !inSingle; continue; }
    if (inSingle) continue;
    if (char === '$' && text[index + 1] === '(') {
      let depth = 1;
      let cursor = index + 2;
      while (cursor < text.length && depth > 0) {
        if (text[cursor] === '(') depth += 1;
        if (text[cursor] === ')') depth -= 1;
        cursor += 1;
      }
      found.push(text.slice(index + 2, cursor - 1));
      index = cursor - 1;
    } else if (char === '`') {
      const end = text.indexOf('`', index + 1);
      if (end < 0) continue;
      found.push(text.slice(index + 1, end));
      index = end;
    }
  }
  return found;
}

// Splits into token lists per simple command. Returns null on unbalanced quotes.
function splitSegments(text) {
  const segments = [];
  let tokens = [];
  let current = '';
  let hasToken = false;
  let quote = null;
  const endToken = () => { if (hasToken) tokens.push(current); current = ''; hasToken = false; };
  const endSegment = () => { endToken(); if (tokens.length) segments.push(tokens); tokens = []; };
  for (let index = 0; index < text.length; index += 1) {
    const char = text[index];
    if (quote) {
      if (char === quote) quote = null;
      else if (char === '\\' && quote === '"' && index + 1 < text.length) current += text[++index];
      else current += char;
    } else if (char === "'" || char === '"') {
      quote = char;
      hasToken = true;
    } else if (char === '\\' && index + 1 < text.length) {
      current += text[++index];
      hasToken = true;
    } else if (';&|\n()'.includes(char)) {
      endSegment();
    } else if (/\s/.test(char)) {
      endToken();
    } else {
      current += char;
      hasToken = true;
    }
  }
  if (quote) return null;
  endSegment();
  return segments;
}

export function decideHook(rawInput) {
  let input;
  try {
    input = JSON.parse(rawInput);
  } catch {
    return { exitCode: 2, message: 'La guardia de producción no pudo leer el comando, así que lo detuvo.' };
  }
  if (input?.tool_name !== 'Bash') return { exitCode: 0, message: '' };
  const reason = findProductionDeploy(input.tool_input?.command);
  if (!reason) return { exitCode: 0, message: '' };
  return {
    exitCode: 2,
    message: `Bloqueado: ${reason}. Los agentes llegan hasta la vista previa; usa npm run preview:deploy. La salida a producción la decide Darío.`,
  };
}

async function main() {
  const chunks = [];
  for await (const chunk of process.stdin) chunks.push(chunk);
  const { exitCode, message } = decideHook(Buffer.concat(chunks).toString('utf8'));
  if (message) console.error(message);
  process.exit(exitCode);
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) await main();
