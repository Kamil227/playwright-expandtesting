import { test, expect } from "../fixtures/test.fixtures";
import { WebInputsPage } from '../pages/webInputs.page';
import testData from '../test-data/webInputs.json';

let webInputsPage: WebInputsPage;


test.beforeEach(async ({ page }) => {
  const tryItOut = page.getByRole("link", { name: "Try it out" });
  await tryItOut.nth(0).click();

  webInputsPage = new WebInputsPage(page)
});

test("Input number", async ({ page }) => {
  await webInputsPage.inputNumber.fill(testData.inputNumber);
  await expect(webInputsPage.inputNumber).toHaveValue(testData.inputNumber);
});

test("Input text", async ({}) => {
  await webInputsPage.inputText.fill(testData.inputText)
  await expect(webInputsPage.inputText).toHaveValue(testData.inputText)
});

test("Input password", async ({}) => {
  await webInputsPage.inputPassword.fill(testData.inputPassword)
  await webInputsPage.buttonDisplayInputs.click()
  await expect(webInputsPage.inputPassword).toHaveValue(testData.inputPassword)
});

test("Input date", async ({}) => {
  await webInputsPage.inputDate.fill(testData.inputDate)
  await expect(webInputsPage.inputDate).toHaveValue(testData.inputDate)
});