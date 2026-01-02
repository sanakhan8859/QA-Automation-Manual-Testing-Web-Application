import { test, expect } from '@playwright/test';

test('Checkbox selection works correctly', async ({ page }) => {
  await page.goto('https://the-internet.herokuapp.com/checkboxes');

  const checkbox = page.locator('input[type="checkbox"]').first();

  await checkbox.check();
  await expect(checkbox).toBeChecked();
});
