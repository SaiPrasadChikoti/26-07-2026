import { test, expect } from '@playwright/test';

import testData from '../../data/variables.json';
test('File-1 removed', async ({ page, context }) => {

  // Step 1: Open 'https://qa.rygen.com/'
  await page.goto('https://qa.rygen.com/');
  await page.waitForLoadState('domcontentloaded');

  // Step 2: Enter testData.RYGEN_USERNAME in 'Enter your username or email address' field
  const step2_locator = page.getByRole('textbox', { name: 'Enter your username or email' });
  await step2_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step2_locator.fill(testData.RYGEN_USERNAME);

  // Step 3: Click on 'Continue' button
  const step3_locator = page.getByRole('button', { name: 'Continue' });
  await step3_locator.waitFor({ state: 'visible', timeout: 60000 });
  await step3_locator.click();
  await page.waitForLoadState('domcontentloaded');
});
