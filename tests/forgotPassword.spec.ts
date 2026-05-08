import { test, expect } from "../fixtures/test.fixtures";
import { RegisterPage } from "../pages/registerPage.page";
import loginPageData from "../test-data/loginData.json";
import { LoginPage } from "../pages/loginPage.page";

let registerPage: RegisterPage;
let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  const tryItOut = page.getByRole("link", { name: "Try it out" });
  await tryItOut.nth(3).click();

  registerPage = new RegisterPage(page);
  loginPage = new LoginPage(page);
});

test("Reset hasła", async ({}) => {
  await registerPage.mailAdress.fill(loginPageData.emailAdress)
  await registerPage.resetButton.click()
  await expect(registerPage.resetMessage).toBeVisible()
});