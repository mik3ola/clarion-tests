import { Page } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config();

export class LoginPage {
    readonly page: Page;
    readonly usernameInput = '#username';
    readonly passwordInput = '#password';
    readonly submitBtn = 'button[type="submit"]';
    readonly baseURL = process.env.BASE_URL!;
    readonly username = process.env.USERNAME!;
    readonly password = process.env.PASSWORD!;

    constructor(page: Page) {
    this.page = page;
    }

    async goto() {
    await this.page.goto(`${this.baseURL}/login`);
    }

    async login() {
    await this.page.fill(this.usernameInput, this.username);
    await this.page.fill(this.passwordInput, this.password);
    await this.page.click(this.submitBtn);
    }
}
