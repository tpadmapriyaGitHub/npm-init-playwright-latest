import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://demoqa.com/');
  await page.locator('div:nth-child(3) > div > .avatar > svg').click();
  await page.getByRole('listitem').filter({ hasText: 'Alerts' }).click();
  await page.getByRole('heading', { name: 'Alerts' }).click();
  await expect(page.getByText('Click Button to see alert')).toBeVisible();
  await expect(page.locator('#alertButton')).toContainText('Click me');
  await expect(page.locator('#alertButton')).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#alertButton').click();
  await expect(page.getByText('On button click, confirm box')).toBeVisible();
  await expect(page.locator('#confirmButton')).toBeVisible();
  page.once('dialog', dialog => {
    console.log(`Dialog message: ${dialog.message()}`);
    dialog.dismiss().catch(() => {});
  });
  await page.locator('#confirmButton').click();
});