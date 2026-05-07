import { test, expect } from "../fixtures/test.fixtures";
import { LoginPage } from "../pages/loginPage.page";
import loginPageData from "../test-data/loginPageData.json";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  const tryItOut = page.getByRole("link", { name: "Try it out" });
  await tryItOut.nth(1).click();

  loginPage = new LoginPage(page);
});

test("Walidacja - brak loginu i hasła", async ({}) => {
  await loginPage.loginButton.click();
  await expect(loginPage.validationMassege).toBeVisible();
});

test("Walidacja - hasla", async ({}) => {
  await loginPage.userName.fill(loginPageData.loginInput);
  await loginPage.password.fill(loginPageData.incorrectPassword);
  await loginPage.loginButton.click();
  await expect(loginPage.validationPassword).toBeVisible();
});

test("Poprawne logowanie", async ({}) => {
  await loginPage.userName.fill(loginPageData.loginInput);
  await loginPage.password.fill(loginPageData.passwordInput);
  await loginPage.loginButton.click();
  await expect(loginPage.loginApproveMessage).toBeVisible();
  await expect(loginPage.heading).toBeVisible();
  await loginPage.logoutButton.click();
  await expect(loginPage.userName).toBeVisible();
});
