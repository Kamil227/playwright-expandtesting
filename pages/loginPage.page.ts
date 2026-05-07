import { Locator, Page } from "@playwright/test";

export class LoginPage {
  readonly loginButton: Locator;
  readonly validationMassege: Locator;
  readonly validationPassword: Locator;
  readonly userName: Locator;
  readonly password: Locator;
  readonly loginApproveMessage: Locator;
  readonly logoutButton: Locator;
  readonly heading: Locator;

  constructor(page: Page) {
    this.loginButton = page.getByRole("button", { name: "Login" });
    this.validationMassege = page
      .getByRole("alert")
      .filter({ hasText: "Your username is invalid!" });
    this.validationPassword = page
      .getByRole("alert")
      .filter({ hasText: "Your password is invalid!" });
    this.userName = page.getByRole("textbox", { name: "Username" });
    this.password = page.getByRole("textbox", { name: "Password", exact: true });
    this.loginApproveMessage = page
      .getByRole("alert")
      .filter({ hasText: "You logged into a secure area!" });
    this.heading = page.getByRole("heading", { name: "Hi, practice!" });
    this.logoutButton = page.getByRole("link", { name: "Logout" });
  }
}
