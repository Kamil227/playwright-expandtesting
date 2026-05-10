import { Locator, Page } from "@playwright/test";

export class DropDown {
  readonly dropDownList: Locator;
  readonly selectDate: Locator;
  readonly selectCountry: Locator;

  constructor(page: Page) {
    this.dropDownList = page.getByRole('combobox');
    this.selectDate = page.locator('#elementsPerPageSelect')
    this.selectCountry = page.locator('#country');

    
  }
}
