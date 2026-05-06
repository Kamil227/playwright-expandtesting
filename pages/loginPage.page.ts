import { Locator, Page } from '@playwright/test';

export class LoginPage {
readonly loginButton: Locator;
readonly validationMassege: Locator;
readonly validationPassword: Locator;
readonly userName: Locator;
readonly password: Locator;

  constructor(page: Page) {
    this.loginButton = page.getByRole('button', { name: 'Login' });
    this.validationMassege = page.getByRole('alert').filter({ hasText: 'Your username is invalid!'})
    this.validationPassword = page.getByRole('alert').filter({ hasText: 'Your password is invalid!'})
    this.userName = page.getByRole('textbox', {name:'Username'})
    this.password = page.getByRole('textbox', {name:'Password'})
  }
}
