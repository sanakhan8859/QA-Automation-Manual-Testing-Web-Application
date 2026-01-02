import { test, expect } from '@playwright/test';

test('Homepage loads with correct heading', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/');

  await expect(page.locator('h1')).toHaveText('Welcome to the-internet');
});
