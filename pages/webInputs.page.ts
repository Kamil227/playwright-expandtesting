// pages/newPage.page.ts
import { expect, Locator, Page } from '@playwright/test';

export class WebInputsPage {
  readonly inputNumber: Locator;
  readonly inputText: Locator;
  readonly inputPassword: Locator;
  readonly buttonDisplayInputs: Locator;
  readonly outputPassword: Locator;
  readonly inputDate: Locator;
  
  
  constructor(page: Page) {
    this.inputNumber = page.getByLabel('Input: Number')
    this.inputText = page.getByLabel('Input: Text')
    this.inputPassword = page.getByLabel('Input: Password')
    this.outputPassword = page.getByLabel('Output: Password')
    this.buttonDisplayInputs = page.locator('#btn-display-inputs')
    this.inputDate = page.getByLabel('Input: Date')

    
  }
}
