// tests/home.spec.ts
import { test } from '@playwright/test';
import { HomePage } from '../../pages/HomePage';

test('TC02-DemoQA home interaction with POM', async ({ page }) => {
  const homePage = new HomePage(page);

  await page.goto('https://demoqa.com');
  await homePage.clickElements();
  await homePage.verifyFormsVisible();
  await homePage.verifyAlertsVisible();
  await homePage.verifyWidgetsVisible();
  await homePage.clickFixedBanner();
  //const adPage = await homePage.clickFacebookAd();
  await homePage.clickBookStoreApplication();

  // Optional: Validate popup if needed
  // await expect(adPage).toHaveURL(/facebook/i);
});
