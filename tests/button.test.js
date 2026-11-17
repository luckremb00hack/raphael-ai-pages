// Playwright test for greeting buttons
const { test, expect } = require('@playwright/test');

// Helper to trigger button via keyboard
async function triggerButton(page, button, key) {
  await button.focus();
  await page.keyboard.press(key);
}

// Helper to get the currently focused element tag name
async function getFocusedTagName(page) {
  return await page.evaluate(() => {
    return document.activeElement ? document.activeElement.tagName.toLowerCase() : null;
  });
}

// Helper to check if active element has focus-visible style
async function isActiveFocusVisible(page) {
  return await page.evaluate(() => {
    const el = document.activeElement;
    if (!el) return false;
    const styles = window.getComputedStyle(el);
    return styles.outlineStyle !== 'none' && styles.outlineStyle !== '';
  });
}

test.describe('Greeting buttons', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('file://' + process.cwd() + '/index.html');
  });

  test('should have three greeting buttons', async ({ page }) => {
    const italian = page.locator('#btn-it');
    const english = page.locator('#btn-en');
    const spanish = page.locator('#btn-es');
    await expect(italian).toBeVisible();
    await expect(english).toBeVisible();
    await expect(spanish).toBeVisible();
  });

  test('click Italian button shows Ciao!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Ciao!');
      dialog.dismiss();
    });
    await page.locator('#btn-it').click();
  });

  test('click English button shows Hello!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Hello!');
      dialog.dismiss();
    });
    await page.locator('#btn-en').click();
  });

  test('click Spanish button shows ¡Hola!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('¡Hola!');
      dialog.dismiss();
    });
    await page.locator('#btn-es').click();
  });

  test('press Enter on Italian button shows Ciao!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Ciao!');
      dialog.dismiss();
    });
    const italian = page.locator('#btn-it');
    await triggerButton(page, italian, 'Enter');
  });

  test('press Space on English button shows Hello!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('Hello!');
      dialog.dismiss();
    });
    const english = page.locator('#btn-en');
    await triggerButton(page, english, 'Space');
  });

  // NEW TESTS FOR TAB NAVIGATION AND FOCUS-VISIBLE
  test('buttons are reachable via Tab and show focus-visible style', async ({ page }) => {
    await page.keyboard.press('Tab');
    const tag1 = await getFocusedTagName(page);
    expect(tag1).toBe('button');
    const visible1 = await isActiveFocusVisible(page);
    expect(visible1).toBeTruthy();

    await page.keyboard.press('Tab');
    const tag2 = await getFocusedTagName(page);
    expect(tag2).toBe('button');
    const visible2 = await isActiveFocusVisible(page);
    expect(visible2).toBeTruthy();

    await page.keyboard.press('Tab');
    const tag3 = await getFocusedTagName(page);
    expect(tag3).toBe('button');
    const visible3 = await isActiveFocusVisible(page);
    expect(visible3).toBeTruthy();
  });

  test('press Enter including keyCode 13 simulation on Spanish button shows ¡Hola!', async ({ page }) => {
    page.once('dialog', dialog => {
      expect(dialog.message()).toBe('¡Hola!');
      dialog.dismiss();
    });
    const spanish = page.locator('#btn-es');
    await spanish.focus();
    await page.evaluate(() => {
      const btn = document.getElementById('btn-es');
      const event = new KeyboardEvent('keydown', { key: 'Enter', keyCode: 13, bubbles: true });
      btn.dispatchEvent(event);
    });
  });
});