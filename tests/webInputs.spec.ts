import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/inputs');
});

test('Input number', async ({ page }) => {
  await page.getByLabel('Input: Number').fill('123');
  await expect(page.getByLabel('Input: Number')).toHaveValue('123');
});

