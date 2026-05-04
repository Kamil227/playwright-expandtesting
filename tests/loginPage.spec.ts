import { test, expect } from "../fixtures/test.fixtures";
import { LoginPage } from "../pages/loginPage.page";

let loginPage: LoginPage;

test.beforeEach(async ({ page }) => {
  const tryItOut = page.getByRole("link", { name: "Try it out" });
  await tryItOut.nth(1).click();

  loginPage = new LoginPage(page);
});

test("Login page opens", async ({}) => {
  await expect(loginPage).toBeTruthy();
});
