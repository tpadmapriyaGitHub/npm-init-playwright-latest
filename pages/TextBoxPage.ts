import { Page, Locator, TestInfo } from '@playwright/test';
import { DetailedLog } from '../utils/detailedLog';
import { allure } from 'allure-playwright';

export class TextBoxPage {
  readonly page: Page;
  readonly testInfo: TestInfo;
  readonly fullName: Locator;
  readonly email: Locator;
  readonly currentAddress: Locator;
  readonly permanentAddress: Locator;
  readonly submitBtn: Locator;
  readonly output: Locator;
  readonly logger: DetailedLog;

  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;

    this.fullName = page.locator('#userName');
    this.email = page.locator('#userEmail');
    this.currentAddress = page.locator('#currentAddress');
    this.permanentAddress = page.locator('#permanentAddress');
    this.submitBtn = page.locator('#submit');
    this.output = page.locator('#output');

    this.logger = new DetailedLog(page, testInfo);
  }

  private async logStep(methodName?: string) {
    await this.logger.callDetailedLog(methodName);
    await this.page.screenshot({ path: `output/screenshots/${methodName}.png` });
  }

  async EnterFullName(name: string) {
  
    await this.fullName.fill(name);
    //await this.logStep('EnterFullName');
  
}

  async EnterEmailAddress(email: string) {
    await this.email.fill(email);
    await this.logStep(new Error().stack?.split('\n')[1].trim().match(/at (\w+)/)?.[1]);
  }

  async EnterCurrentAddress(currentAddr: string) {
    await this.currentAddress.fill(currentAddr);
    await this.logStep(new Error().stack?.split('\n')[1].trim().match(/at (\w+)/)?.[1]);
  }

  async EnterPermanentAddress(permAddr: string) {
    await this.permanentAddress.fill(permAddr);
    await this.logStep(new Error().stack?.split('\n')[1].trim().match(/at (\w+)/)?.[1]);
  }

  async fillAllFields(name: string, email: string, currentAddr: string, permAddr: string) {
    await this.EnterFullName(name);
    await this.EnterEmailAddress(email);
    await this.EnterCurrentAddress(currentAddr);
    await this.EnterPermanentAddress(permAddr);
    await this.logStep(new Error().stack?.split('\n')[1].trim().match(/at (\w+)/)?.[1]);
  }

  async EnterForm(name: string, email: string, currentAddr: string, permAddr: string) {
    await this.fullName.fill(name);
    await this.email.fill(email);
    await this.currentAddress.fill(currentAddr);
    await this.permanentAddress.fill(permAddr);
    await this.logStep('fillForm');
  }

  async submitForm() {
    await this.submitBtn.click();
    await this.logStep('submitForm');
  }

  async isOutputVisible(): Promise<boolean> {
    return await this.output.isVisible();
  }
}
