import { test, expect } from "../fixtures/test.fixtures";
import { RegisterPage } from "../pages/registerPage.page";
import loginPageData from "../test-data/loginPageData.json";
import { LoginPage } from "../pages/loginPage.page";

let registerPage: RegisterPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  const tryItOut = page.getByRole("link", { name: "Try it out" });
  await tryItOut.nth(2).click();

  registerPage = new RegisterPage(page);
  loginPage = new LoginPage(page);
});

test("Udana rejestracja", async ({}) => {
  await loginPage.userName.fill(loginPageData.loginInput);
  await loginPage.password.fill(loginPageData.passwordInput);
  await registerPage.confirmPassword.fill(loginPageData.passwordInput);
  await registerPage.registerButton.click();
  await expect(registerPage.successMessage).toBeVisible();
});
