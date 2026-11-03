#!/usr/bin/env node
/** Publishes a Vercel preview of the current commit and leaves its link on the PR. Never production. */
import { spawnSync } from 'node:child_process';
import { pathToFileURL } from 'node:url';

const REPO = 'dario-kreante/apps-del-sur-web';
const GITHUB_USER = 'dario-kreante';
// Public identifiers, not secrets. They let the CLI work from a worktree without .vercel/.
const VERCEL_ENV = { VERCEL_ORG_ID: 'team_HRucOO1F81gIz4c0mk3coixu', VERCEL_PROJECT_ID: 'prj_lWUsAMQFZPAf38fCbx3gyrWxL3UE' };
const COMMENT_MARKER = '<!-- vista-previa-agente -->';

function defaultRun(command, args, { env, input } = {}) {
  const result = spawnSync(command, args, { encoding: 'utf8', input, env: { ...process.env, ...env } });
  return { status: result.status ?? 1, stdout: result.stdout || '', stderr: result.stderr || result.error?.message || '' };
}

export function runPreviewDeploy({ argv = [], run = defaultRun, logger = console } = {}) {
  const fail = (message) => { logger.error(message); return { exitCode: 1 }; };
  if (argv.length) return fail(`Este comando no acepta argumentos: ${argv.join(' ')}. Solo publica vistas previas.`);

  if (run('git', ['status', '--porcelain']).stdout.trim()) return fail('Hay cambios sin commit. La vista previa debe corresponder a un commit.');
  const sha = run('git', ['rev-parse', 'HEAD']).stdout.trim();
  const branch = run('git', ['rev-parse', '--abbrev-ref', 'HEAD']).stdout.trim();

  const githubEnv = { GH_TOKEN: run('gh', ['auth', 'token', '--user', GITHUB_USER]).stdout.trim() };
  const prView = run('gh', ['pr', 'view', branch, '--repo', REPO, '--json', 'number,headRefOid'], { env: githubEnv });
  const pr = prView.status === 0 ? JSON.parse(prView.stdout) : null;
  if (pr && pr.headRefOid !== sha) return fail(`El PR #${pr.number} no tiene este commit. Sube la rama antes de desplegar.`);

  const deploy = run('vercel', ['deploy', '--yes'], { env: VERCEL_ENV });
  const url = deploy.stdout.match(/https:\/\/\S+\.vercel\.app/g)?.at(-1);
  if (deploy.status !== 0 || !url) return fail(`Falló el despliegue: ${deploy.stderr.trim()}`);

  const inspect = run('vercel', ['inspect', url], { env: VERCEL_ENV });
  if (!/target\s+preview\b/.test(`${inspect.stdout}\n${inspect.stderr}`)) return fail(`El despliegue ${url} no aparece como preview. No se publicó el enlace.`);

  if (pr) publishComment({ run, env: githubEnv, prNumber: pr.number, url, sha });
  logger.log(url);
  return { exitCode: 0, url, prNumber: pr ? pr.number : null };
}

function publishComment({ run, env, prNumber, url, sha }) {
  const body = `${COMMENT_MARKER}\n**Vista previa:** ${url}\n\nCommit \`${sha.slice(0, 7)}\`. Requiere sesión en Vercel.`;
  const input = JSON.stringify({ body });
  const listed = run('gh', ['api', `repos/${REPO}/issues/${prNumber}/comments`, '--paginate'], { env });
  const previous = JSON.parse(listed.stdout || '[]').find((comment) => comment.body?.includes(COMMENT_MARKER));
  const args = previous
    ? ['api', `repos/${REPO}/issues/comments/${previous.id}`, '--method', 'PATCH', '--input', '-']
    : ['api', `repos/${REPO}/issues/${prNumber}/comments`, '--method', 'POST', '--input', '-'];
  run('gh', args, { env, input });
}

if (process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href) {
  process.exit(runPreviewDeploy({ argv: process.argv.slice(2) }).exitCode);
}
