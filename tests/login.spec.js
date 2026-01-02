import { test, expect } from '@playwright/test';

test.describe('Login Functionality Tests', () => {

  test('Valid login should redirect to secure area', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'tomsmith');
    await page.fill('#password', 'SuperSecretPassword!');
    await page.click('button[type="submit"]');

    await expect(page.locator('#flash')).toContainText('You logged into a secure area');
  });

  test('Invalid login should show error message', async ({ page }) => {
    await page.goto('https://the-internet.herokuapp.com/login');

    await page.fill('#username', 'wronguser');
    await page.fill('#password', 'wrongpass');
    await page.click('button[type="submit"]');

    await expect(page.locator('#flash')).toContainText('Your username is invalid');
  });

});
