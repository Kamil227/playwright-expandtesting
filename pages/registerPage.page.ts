import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
 

  constructor(page: Page) {
    this.confirmPassword = page.getByRole("textbox", { name: "Confirm Password", exact:true });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.successMessage = page.getByRole('alert').filter({hasText: 'Successfully registered, you can log in now.'})
  }
}
