// Playwright test for greeting buttons
const { test, expect } = require('@playwright/test');

test.describe('Greeting buttons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
  });

  test('should have three greeting buttons', async ({ page }) => {
    const italian = page.getByRole('button', { name: 'Italiano' });
    const english = page.getByRole('button', { name: 'English' });
    const spanish = page.getByRole('button', { name: 'Español' });
    await expect(italian).toBeVisible();
    await expect(english).toBeVisible();
    await expect(spanish).toBeVisible();
  });

  test('click Italian button shows Ciao!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Ciao!');
      dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Italiano' }).click();
  });

  test('click English button shows Hello!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Hello!');
      dialog.dismiss();
    });
    await page.getByRole('button', { name: 'English' }).click();
  });

  test('click Spanish button shows ¡Hola!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('¡Hola!');
      dialog.dismiss();
    });
    await page.getByRole('button', { name: 'Español' }).click();
  });
});