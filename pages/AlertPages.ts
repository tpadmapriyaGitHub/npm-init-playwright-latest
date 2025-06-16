// pages/AlertsPage.ts
import { Page, expect } from '@playwright/test';

export class AlertsPage {
  readonly page: Page;

  constructor(page: Page) {
    this.page = page;
  }

  async navigateToHomePage() {
    await this.page.goto('https://demoqa.com/');
  }

  async goToAlertsSection() {
    await this.page.locator('div:nth-child(3) > div > .avatar > svg').click(); // Click "Alerts, Frame & Windows"
    await this.page.getByRole('listitem').filter({ hasText: 'Alerts' }).click(); // Click "Alerts"
  }

  async verifyAlertsHeader() {
    await expect(this.page.getByRole('heading', { name: 'Alerts' })).toBeVisible();
  }

  async verifySimpleAlertButton() {
    const btn = this.page.locator('#alertButton');
    await expect(btn).toBeVisible();
    await expect(btn).toHaveText('Click me');
  }

  async triggerAndAcceptSimpleAlert() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('You clicked a button');
      await dialog.accept();
    });
    await this.page.click('#alertButton');
  }

  async triggerAndDismissSimpleAlert_Negative() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('You clicked a button');
      await dialog.dismiss(); // Not typical for alerts, just to simulate "negative" flow
    });
    await this.page.click('#alertButton');
  }

  async verifyConfirmAlertButton() {
    await expect(this.page.locator('#confirmButton')).toBeVisible();
  }

  async triggerAndAcceptConfirmAlert() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Do you confirm action?');
      await dialog.accept();
    });
    await this.page.click('#confirmButton');
    await expect(this.page.locator('#confirmResult')).toHaveText('You selected Ok');
  }

  async triggerAndDismissConfirmAlert() {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Do you confirm action?');
      await dialog.dismiss();
    });
    await this.page.click('#confirmButton');
    await expect(this.page.locator('#confirmResult')).toHaveText('You selected Cancel');
  }

  async triggerAndCheckPromptAlert(inputText: string) {
    this.page.once('dialog', async dialog => {
      expect(dialog.message()).toContain('Please enter your name');
      await dialog.accept(inputText);
    });
    await this.page.click('#promtButton');
    await expect(this.page.locator('#promptResult')).toHaveText(`You entered ${inputText}`);
  }

  async triggerAndCancelPromptAlert() {
    this.page.once('dialog', async dialog => {
      await dialog.dismiss();
    });
    await this.page.click('#promtButton');
    await expect(this.page.locator('#promptResult')).toHaveText('You entered null');
  }
}
