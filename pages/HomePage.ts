import { Page, FrameLocator, expect } from '@playwright/test';

export class HomePage {
  readonly page: Page;
  readonly fixedBanner: string = '#fixedban';

  constructor(page: Page) {
    this.page = page;
  }

  async clickElements() {
    await this.page.getByText('Elements').click();
  }

  async verifyFormsVisible() {
    await expect(this.page.getByText('Forms')).toBeVisible();
  }

  async verifyAlertsVisible() {
    await expect(this.page.getByText('Alerts, Frame & Windows')).toBeVisible();
  }

  async verifyWidgetsVisible() {
    const locator = this.page.locator('span', { hasText: 'Widgets' }).locator('div').first();
    await expect(locator).toBeVisible();
  }

  async clickFixedBanner() {
    await this.page.locator(this.fixedBanner).click();
  }

  async clickFacebookAd() {
    const frameLocator = this.page.frameLocator('iframe[name="google_ads_iframe_/21849154601,22343295815/Ad.Plus-Anchor_0"]');
    const link = frameLocator.getByRole('link', { name: /Facebook Marketing/i });

    const popupPromise = this.page.waitForEvent('popup');
    await link.click();
    return await popupPromise; // returns the popup Page object
  }

  async clickBookStoreApplication() {
    await this.page.getByText('Book Store Application').click();
  }
}