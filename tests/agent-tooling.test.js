import test from 'node:test';
import assert from 'node:assert/strict';
import { spawnSync } from 'node:child_process';
import { existsSync, mkdtempSync, realpathSync, rmSync } from 'node:fs';
import { tmpdir } from 'node:os';
import { join } from 'node:path';
import { findProductionDeploy, decideHook } from '../scripts/agent/guard-production-deploy.mjs';
import { runPreviewDeploy } from '../scripts/agent/preview-deploy.mjs';
import { createWorktree } from '../scripts/agent/new-worktree.mjs';

for (const command of [
  'vercel --prod',
  'vercel deploy --prod',
  'vercel deploy --yes --prod',
  'vercel --prod=true',
  'vercel deploy --target production',
  'vercel deploy --target=production',
  'npx vercel --prod',
  'npx -y vercel@latest deploy --prod',
  'pnpm dlx vercel --prod',
  '/usr/local/bin/vercel --prod',
  'VERCEL_ORG_ID=x vercel --prod',
  'npm test && vercel --prod',
  'cd web; vercel --prod',
  'vercel promote https://x.vercel.app',
  'vercel rollback',
  'vercel alias set x.vercel.app appsdelsur.cl',
  'vercel redeploy https://x.vercel.app',
  'bash -c "vercel --prod"',
  'eval "vercel --prod"',
  'echo "$(vercel --prod)"',
  'echo `vercel --prod`',
  'echo https://x | xargs vercel promote',
  'bash <<EOF\nvercel --prod\nEOF',
  'vercel --scope equipo promote https://x.vercel.app',
  'vc --prod',
  'npx vc deploy --prod',
  'node node_modules/vercel/dist/index.js --prod',
  'timeout 60 vercel --prod',
  'nice -n 5 vercel --prod',
  'env -i FOO=1 vercel --prod',
  'sudo -u root vercel --prod',
  'npx --package vercel vercel --prod',
  'timeout 60 bash -c "vercel --prod"',
  'echo "vercel --prod" | bash',
  'bash <<< "vercel --prod"',
  'printf "vercel promote x" | sh -s',
  "git -c alias.x='!vercel --prod' x",
  'git --config-env=alias.x=CMD x vercel --prod',
  'ksh -c "vercel --prod"',
  'busybox sh -c "vercel --prod"',
  'cat <<EOF | bash\nvercel --prod\nEOF',
  'echo "<<X"\nvercel --prod\nX',
  'echo hola # <<X\nvercel --prod\nX',
  'node -e "require(\'child_process\').execSync(\'vercel --prod\')"',
  'python3 -c "import os; os.system(\'vercel --prod\')"',
]) {
  test(`guard blocks: ${command.replace(/\n/g, ' ')}`, () => {
    assert.ok(findProductionDeploy(command));
  });
}

for (const command of [
  'vercel deploy --yes',
  'vercel',
  'vercel ls',
  'vercel inspect https://x.vercel.app',
  'vercel env ls',
  'npm run preview:deploy',
  'echo "vercel --prod"',
  "git commit -m 'nunca usar vercel --prod'",
  'grep -rn "vercel promote" docs',
  'cat <<EOF > nota.md\nvercel --prod\nEOF',
  'git commit -F - <<\'EOF\'\nvercel deploy --prod\nEOF',
  'npm test',
  'npm i -D vercel',
  'bash scripts/build.sh',
  'cat deploy.sh | grep vercel',
  'echo vercel --prod',
  'git log --grep="vercel --prod"',
  'node -e "console.log(1)"',
  "git commit -F - <<'EOF' && git push\nvercel --prod\nEOF",
]) {
  test(`guard allows: ${command.replace(/\n/g, ' ')}`, () => {
    assert.equal(findProductionDeploy(command), null);
  });
}

test('guard fails closed on unbalanced quotes that mention vercel', () => {
  assert.ok(findProductionDeploy('vercel deploy "--prod'));
});

test('hook blocks a production Bash command with exit code 2', () => {
  const decision = decideHook(JSON.stringify({ tool_name: 'Bash', tool_input: { command: 'vercel --prod' } }));
  assert.equal(decision.exitCode, 2);
  assert.match(decision.message, /producción/);
});

test('hook allows other tools and safe commands', () => {
  assert.equal(decideHook(JSON.stringify({ tool_name: 'Read', tool_input: { file_path: 'vercel --prod' } })).exitCode, 0);
  assert.equal(decideHook(JSON.stringify({ tool_name: 'Bash', tool_input: { command: 'vercel ls' } })).exitCode, 0);
});

test('hook blocks when its input cannot be read', () => {
  const decision = decideHook('no es json');
  assert.equal(decision.exitCode, 2);
  assert.match(decision.message, /no pudo leer/);
});

function fakeRunner(overrides = {}) {
  const calls = [];
  const defaults = {
    'git status --porcelain': { stdout: '' },
    'git rev-parse HEAD': { stdout: 'abc1234def\n' },
    'git rev-parse --abbrev-ref HEAD': { stdout: 'feat/x\n' },
    'gh auth token --user dario-kreante': { stdout: 'token-falso\n' },
    'vercel deploy --yes': { stdout: 'https://x-abc-dario-kreantes-projects.vercel.app\n' },
    'vercel inspect https://x-abc-dario-kreantes-projects.vercel.app': { stdout: '', stderr: '  target\tpreview\n  status\tReady\n' },
    'gh pr view feat/x --repo dario-kreante/apps-del-sur-web --json number,headRefOid': { stdout: '{"number":21,"headRefOid":"abc1234def"}' },
    'gh api repos/dario-kreante/apps-del-sur-web/issues/21/comments --paginate': { stdout: '[]' },
  };
  const responses = { ...defaults, ...overrides };
  const run = (command, args, options = {}) => {
    const key = [command, ...args].join(' ');
    calls.push({ key, env: options.env, input: options.input });
    const known = Object.keys(responses).find((candidate) => key === candidate);
    const response = known ? responses[known] : { stdout: '{}' };
    return { status: 0, stdout: '', stderr: '', ...response };
  };
  return { run, calls };
}
const quiet = { log() {}, error() {} };

test('preview deploy never sends a production flag to vercel', () => {
  const { run, calls } = fakeRunner();
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 0);
  const deploy = calls.find((call) => call.key.startsWith('vercel deploy'));
  assert.equal(deploy.key, 'vercel deploy --yes');
});

for (const argument of ['--prod', '--target=production', '--target', 'production', '--force']) {
  test(`preview deploy rejects the argument ${argument}`, () => {
    const { run, calls } = fakeRunner();
    const result = runPreviewDeploy({ argv: [argument], run, logger: quiet });
    assert.equal(result.exitCode, 1);
    assert.equal(calls.length, 0);
  });
}

test('preview deploy works without a .vercel folder by passing the project ids', () => {
  const { run, calls } = fakeRunner();
  runPreviewDeploy({ argv: [], run, logger: quiet });
  const deploy = calls.find((call) => call.key.startsWith('vercel deploy'));
  assert.equal(deploy.env.VERCEL_PROJECT_ID, 'prj_lWUsAMQFZPAf38fCbx3gyrWxL3UE');
  assert.equal(deploy.env.VERCEL_ORG_ID, 'team_HRucOO1F81gIz4c0mk3coixu');
});

test('preview deploy refuses uncommitted changes', () => {
  const { run, calls } = fakeRunner({ 'git status --porcelain': { stdout: ' M api/x.js\n' } });
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 1);
  assert.ok(!calls.some((call) => call.key.startsWith('vercel deploy')));
});

test('preview deploy refuses a commit the PR does not have', () => {
  const { run, calls } = fakeRunner({
    'gh pr view feat/x --repo dario-kreante/apps-del-sur-web --json number,headRefOid': { stdout: '{"number":21,"headRefOid":"otro"}' },
  });
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 1);
  assert.ok(!calls.some((call) => call.key.startsWith('vercel deploy')));
});

test('preview deploy posts the link on the PR', () => {
  const { run, calls } = fakeRunner();
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  const post = calls.find((call) => call.key.startsWith('gh api') && call.key.includes('--method POST'));
  assert.ok(post, 'debe crear un comentario');
  assert.match(post.input, /x-abc-dario-kreantes-projects\.vercel\.app/);
  assert.match(post.input, /abc1234/);
  assert.equal(post.env.GH_TOKEN, 'token-falso');
  assert.equal(result.url, 'https://x-abc-dario-kreantes-projects.vercel.app');
});

test('preview deploy updates its previous comment instead of adding another', () => {
  const { run, calls } = fakeRunner({
    'gh api repos/dario-kreante/apps-del-sur-web/issues/21/comments --paginate': { stdout: '[{"id":77,"body":"<!-- vista-previa-agente --> antiguo"}]' },
  });
  runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.ok(calls.some((call) => call.key.startsWith('gh api repos/dario-kreante/apps-del-sur-web/issues/comments/77 --method PATCH')));
  assert.ok(!calls.some((call) => call.key.includes('--method POST')));
});

test('preview deploy publishes no link when the deploy fails', () => {
  const { run, calls } = fakeRunner({ 'vercel deploy --yes': { status: 1, stdout: '', stderr: 'boom' } });
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 1);
  assert.ok(!calls.some((call) => call.key.includes('--method')));
});

test('preview deploy publishes no link when the deployment is not preview', () => {
  const { run, calls } = fakeRunner({
    'vercel inspect https://x-abc-dario-kreantes-projects.vercel.app': { stderr: '  target\tproduction\n' },
  });
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 1);
  assert.ok(!calls.some((call) => call.key.includes('--method')));
});

test('preview deploy still deploys when the branch has no PR', () => {
  const { run } = fakeRunner({
    'gh pr view feat/x --repo dario-kreante/apps-del-sur-web --json number,headRefOid': { status: 1, stderr: 'no pull requests found' },
  });
  const result = runPreviewDeploy({ argv: [], run, logger: quiet });
  assert.equal(result.exitCode, 0);
  assert.equal(result.prNumber, null);
});

function git(cwd, ...args) {
  const result = spawnSync('git', args, { cwd, encoding: 'utf8' });
  assert.equal(result.status, 0, result.stderr);
  return result.stdout.trim();
}

function makeRepo() {
  const root = mkdtempSync(join(tmpdir(), 'worktree-test-'));
  const origin = join(root, 'origin.git');
  const main = join(root, 'repo');
  git(root, 'init', '--bare', '-b', 'master', origin);
  git(root, 'clone', origin, main);
  git(main, 'config', 'user.email', 'qa@example.test');
  git(main, 'config', 'user.name', 'QA');
  git(main, 'commit', '--allow-empty', '-m', 'inicio');
  git(main, 'push', 'origin', 'HEAD:master');
  return { root, main };
}

test('new worktree starts at origin/master and does not track it', (t) => {
  const { root, main } = makeRepo();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  const result = createWorktree({ branch: 'feat/nueva', cwd: main, logger: quiet });
  assert.equal(result.exitCode, 0);
  assert.equal(realpathSync(result.path), realpathSync(join(root, 'repo-feat-nueva')));
  assert.ok(existsSync(result.path));
  assert.equal(git(result.path, 'rev-parse', '--abbrev-ref', 'HEAD'), 'feat/nueva');
  assert.equal(git(result.path, 'rev-parse', 'HEAD'), git(main, 'rev-parse', 'origin/master'));
  assert.equal(spawnSync('git', ['rev-parse', '--abbrev-ref', '@{upstream}'], { cwd: result.path }).status === 0, false);
});

test('new worktree refuses an existing branch', (t) => {
  const { root, main } = makeRepo();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(main, 'branch', 'feat/existe');
  const result = createWorktree({ branch: 'feat/existe', cwd: main, logger: quiet });
  assert.equal(result.exitCode, 1);
  assert.equal(existsSync(join(root, 'repo-feat-existe')), false);
});

test('new worktree refuses an existing folder', (t) => {
  const { root, main } = makeRepo();
  t.after(() => rmSync(root, { recursive: true, force: true }));
  git(root, 'init', 'repo-feat-ocupada');
  const result = createWorktree({ branch: 'feat/ocupada', cwd: main, logger: quiet });
  assert.equal(result.exitCode, 1);
});

for (const branch of ['master', 'main', '-x', 'con espacio', '../fuera']) {
  test(`new worktree refuses the branch name ${branch}`, (t) => {
    const { root, main } = makeRepo();
    t.after(() => rmSync(root, { recursive: true, force: true }));
    assert.equal(createWorktree({ branch, cwd: main, logger: quiet }).exitCode, 1);
  });
}
