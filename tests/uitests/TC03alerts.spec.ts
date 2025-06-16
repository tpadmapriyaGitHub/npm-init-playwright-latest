// tests/alerts.spec.ts
import { test, expect } from '@playwright/test';
import { AlertsPage } from '../../pages/AlertPages';

test.describe('DemoQA Alert Tests', () => {

  test('Positive: Handle all alerts correctly', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.navigateToHomePage();
    await alertsPage.goToAlertsSection();
    await alertsPage.verifyAlertsHeader();
    await alertsPage.verifySimpleAlertButton();
    await alertsPage.triggerAndAcceptSimpleAlert();

    await alertsPage.verifyConfirmAlertButton();
    await alertsPage.triggerAndAcceptConfirmAlert();

    await alertsPage.triggerAndCheckPromptAlert('Padmapriya');
  });

  test('Negative: Dismiss and cancel alert dialogs', async ({ page }) => {
    const alertsPage = new AlertsPage(page);

    await alertsPage.navigateToHomePage();
    await alertsPage.goToAlertsSection();
    await alertsPage.verifyAlertsHeader();

    await alertsPage.triggerAndDismissSimpleAlert_Negative();
    await alertsPage.triggerAndDismissConfirmAlert();
    await alertsPage.triggerAndCancelPromptAlert();
  });

});
