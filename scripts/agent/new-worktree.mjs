#!/usr/bin/env node
/** Creates a sibling worktree from origin/master on a new branch that does not track master. */
import { spawnSync } from 'node:child_process';
import { existsSync } from 'node:fs';
import { basename, dirname, join } from 'node:path';
import { pathToFileURL } from 'node:url';

const PROTECTED = new Set(['master', 'main']);
const VALID_BRANCH = /^[A-Za-z0-9][A-Za-z0-9._/-]*$/;

export function createWorktree({ branch, cwd = process.cwd(), logger = console } = {}) {
  const fail = (message) => { logger.error(message); return { exitCode: 1 }; };
  const git = (...args) => spawnSync('git', args, { cwd, encoding: 'utf8' });

  if (!branch || !VALID_BRANCH.test(branch) || branch.includes('..') || PROTECTED.has(branch)) return fail(`Nombre de rama no válido: ${branch || '(vacío)'}`);
  if (git('show-ref', '--verify', '--quiet', `refs/heads/${branch}`).status === 0) return fail(`La rama ${branch} ya existe.`);

  const fetched = git('fetch', 'origin', 'master', '--quiet');
  if (fetched.status !== 0) return fail(`No se pudo actualizar origin/master: ${fetched.stderr.trim()}`);

  // Sibling of the main checkout even when called from another worktree.
  const commonDir = git('rev-parse', '--path-format=absolute', '--git-common-dir').stdout.trim();
  const mainCheckout = dirname(commonDir);
  const path = join(dirname(mainCheckout), `${basename(mainCheckout)}-${branch.replace(/\//g, '-')}`);
  if (existsSync(path)) return fail(`La carpeta ${path} ya existe.`);

  const added = git('worktree', 'add', '--no-track', '-b', branch, path, 'origin/master');
  if (added.status !== 0) return fail(`No se pudo crear el worktree: ${added.stderr.trim()}`);

  logger.log(`${path}\nAl subir la rama: git push -u origin ${branch}`);
  return { exitCode: 0, path };
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exit(createWorktree({ branch: process.argv[2] }).exitCode);
}
