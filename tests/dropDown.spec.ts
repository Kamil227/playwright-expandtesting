import { test, expect } from "../fixtures/test.fixtures";
import { DropDown } from "../pages/dropDown.page";
import loginPageData from "../test-data/loginData.json";

let dropDown: DropDown;

test.beforeEach(async ({ page }) => {
  await page.goto('https://practice.expandtesting.com/dropdown');

  dropDown = new DropDown(page);
});

test("Pierwszy drop down", async () => {
  await dropDown.dropDownList.nth(0).selectOption('1')
  await expect(dropDown.dropDownList.nth(0).locator('option:checked')).toHaveText('Option 1')
  await dropDown.dropDownList.nth(0).selectOption('2')
  await expect(dropDown.dropDownList.nth(0).locator('option:checked')).toHaveText('Option 2')
  
});

test("Wybierz date", async () => {
  await dropDown.selectDate.selectOption('50')
  await expect(dropDown.selectDate).toHaveValue('50')
  
});

test("Wybierz kraj", async () => {
  await dropDown.selectCountry.selectOption("PL")
  await expect(dropDown.selectCountry).toHaveValue('PL')
  
});