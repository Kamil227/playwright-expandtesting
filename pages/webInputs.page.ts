// pages/newPage.page.ts
import { expect, Locator, Page } from '@playwright/test';

export class WebInputsPage {
  readonly inputNumber: Locator;
  
  
  constructor(page: Page) {
    this.inputNumber = page.getByLabel('Input: Number')
    
  }
}
