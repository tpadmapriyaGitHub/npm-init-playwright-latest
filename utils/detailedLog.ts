import { Page, TestInfo } from '@playwright/test';

export class DetailedLog {
  readonly page: Page;
  readonly testInfo: TestInfo;

  constructor(page: Page, testInfo: TestInfo) {
    this.page = page;
    this.testInfo = testInfo;
  }

  async callingMethodname(methodName?: string) {   
    // If methodName not passed, try to get it from the stack
    const callingMethod =
      methodName ||
      new Error().stack?.split('\n')[2].trim().match(/at (\w+)/)?.[1] ||
      'UnknownMethod';

    // Attach log
    await this.testInfo.attach('Step Log', {
      body: `✅ methodName: ${callingMethod}`,
      contentType: 'text/plain',
    });
  }



  async callDetailedLog(methodName?: string, screenshotBuffer?: Buffer) {
    // If methodName not passed, try to get it from the stack
    const callingMethod =
      methodName ||
      new Error().stack?.split('\n')[2].trim().match(/at (\w+)/)?.[1] ||
      'UnknownMethod';

    // If screenshotBuffer not passed, capture it now
    const buffer = screenshotBuffer || (await this.page.screenshot());

    // Attach log
    await this.testInfo.attach('Step Log', {
      body: `✅ methodName: ${callingMethod}`,
      contentType: 'text/plain',
    });

    // Attach screenshot
    await this.testInfo.attach(`${callingMethod} Screenshot`, {
      body: buffer,
      contentType: 'image/png',
    });
  }
}
