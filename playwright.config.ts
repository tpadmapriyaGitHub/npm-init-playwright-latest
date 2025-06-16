import { defineConfig, devices } from '@playwright/test';
import path from 'path';

export default defineConfig({
  testDir: './tests',
  timeout: 30 * 1000,
  expect: {
    timeout: 5000,
  },
  retries: 1,
  reporter: [
    ['list'],
    ['html', { outputFolder: 'output/html-report', open: 'always' }],
    ['json', { outputFile: 'playwright-report.json' }],
    ['allure-playwright', { outputFolder: 'output/allure-results' }]
    
  ],
  use: {
    baseURL: 'https://demoqa.com',
    trace: 'on',
    screenshot: 'on',
    video: 'on',
    headless: true,
    viewport: { width: 1280, height: 720 },
    
  },
  outputDir: 'output/test-results',
  projects: [
    {
      name: 'Chromium',
      use: { ...devices['Desktop Chrome'] },
    },
    {
      name: 'Firefox',
      use: { ...devices['Desktop Firefox'] },
    }
  ],
});
