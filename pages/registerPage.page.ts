import { Locator, Page } from "@playwright/test";

export class RegisterPage {
  readonly confirmPassword: Locator;
  readonly registerButton: Locator;
  readonly successMessage: Locator;
  readonly mailAdress: Locator;
  readonly resetButton: Locator;
  readonly resetMessage: Locator;
 

  constructor(page: Page) {
    this.confirmPassword = page.getByRole("textbox", { name: "Confirm Password", exact:true });
    this.registerButton = page.getByRole("button", { name: "Register" });
    this.successMessage = page.getByRole('alert').filter({hasText: 'Successfully registered, you can log in now.'})
    this.mailAdress = page.getByRole("textbox", { name: "E-mail", exact:true });
    this.resetButton = page.getByRole("button", { name: "Retrieve password" });
    this.resetMessage = page.getByRole('alert').filter({hasText: 'An e-mail has been sent to you which explains how to reset your password.'})

    
  }
}
