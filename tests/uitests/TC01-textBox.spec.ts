import { test, expect } from '@playwright/test';
import { TextBoxPage } from '../../pages/TextBoxPage';
import testData from '../../data/testData.json';
import { DetailedLog } from '../../utils/detailedLog';

test('TC01-Fill Form', async ({ page }, testInfo) => {
  const textBoxPage = new TextBoxPage(page,testInfo);
  

  await page.goto('/text-box');

  await textBoxPage.EnterFullName(testData.name);
  await textBoxPage.EnterEmailAddress(testData.email);
  await textBoxPage.EnterCurrentAddress(testData.currentAddress);
  await textBoxPage.EnterPermanentAddress(testData.permanentAddress);
  

  await textBoxPage.EnterForm(
    testData.name,
    testData.email,
    testData.currentAddress,
    testData.permanentAddress
  );

  await textBoxPage.submitForm();

  expect(await textBoxPage.isOutputVisible()).toBe(true);
});