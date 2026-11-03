import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.route('**/*', (route) => (new URL(route.request().url()).hostname === '127.0.0.1' ? route.continue() : route.abort()));
});

test.use({ viewport: { width: 375, height: 667 } });

test('la página 404 muestra título, enlaces, contacto y no desborda en teléfono', async ({ page }) => {
  await page.goto('/404.html');

  const heading = page.getByRole('heading', { level: 1 });
  await expect(heading).toHaveText('Esta página no existe');

  const main = page.locator('main');
  for (const href of ['/', '/diagnosticos/', '/servicios/']) {
    await expect(main.locator(`a[href="${href}"]`).first()).toBeVisible();
  }

  const contact = page.locator('#contacto-404');
  await expect(contact).toBeVisible();
  await expect(contact).toHaveAttribute('href', /^https:\/\/wa\.me\/56945262335/);

  await expect(page.locator('meta[name=robots]')).toHaveAttribute('content', /noindex/);

  const overflow = await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth);
  expect(overflow).toBeLessThanOrEqual(0);
});
