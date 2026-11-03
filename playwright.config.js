import { defineConfig, devices } from '@playwright/test';

const baseURL = 'http://127.0.0.1:4322';

// Runs against the built site served by the QA fixture: real API handlers, simulated Airtable.
export default defineConfig({
  testDir: './e2e',
  fullyParallel: false,
  workers: 1,
  forbidOnly: Boolean(process.env.CI),
  retries: 0,
  reporter: process.env.CI ? [['list'], ['html', { open: 'never' }]] : 'list',
  use: { baseURL, trace: 'retain-on-failure', screenshot: 'only-on-failure', ...devices['Desktop Chrome'] },
  webServer: {
    command: 'node scripts/qa-assessment-server.mjs',
    url: `${baseURL}/__qa/status`,
    reuseExistingServer: !process.env.CI,
    env: { QA_STATIC: '1', QA_TURNSTILE: 'off' },
  },
});
