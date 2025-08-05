import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/login.page';
import { HomePage } from '../../pages/homePage.page';
import dotenv from 'dotenv';

dotenv.config();

test('UI: User can log in and log out using POM and .env', async ({ page }) => {
    const loginPage = new LoginPage(page);
    const homePage = new HomePage(page);

    await loginPage.goto();
    await loginPage.login();

    await expect(page).toHaveURL(`${process.env.BASE_URL}/secure`);
    await expect(page.locator(homePage.logoutBtn)).toBeVisible();

    await homePage.logout();
    await expect(page).toHaveURL(`${process.env.BASE_URL}/login`);
});