import { Before, After, Given, When, Then } from '@cucumber/cucumber';
import { Browser, chromium, expect, Page } from '@playwright/test';
import { LoginPage } from '../../../pages/login.page';
import { HomePage } from '../../../pages/homePage.page';
import dotenv from 'dotenv';

dotenv.config();

let browser: Browser;
let context;
let page: Page;
let loginPage: LoginPage;
let homePage: HomePage;

Before(async () => {
    browser = await chromium.launch();
    context = await browser.newContext();
    page = await context.newPage();
    });

After(async () => {
    await browser?.close();
    });

Given('I open the login page', async () => {
    loginPage = new LoginPage(page);
    homePage = new HomePage(page);
    await loginPage.goto();
});

When('I login with credentials from environment', async () => {
    await loginPage.login();
});

Then('I should land on the secure area', async () => {
    await expect(page).toHaveURL(`${process.env.BASE_URL}/secure`);
    await expect(page.locator(homePage.logoutBtn)).toBeVisible();
});

When('I log out', async () => {
    await homePage.logout();
});

Then('I should be redirected to the login page', async () => {
    await expect(page).toHaveURL(`${process.env.BASE_URL}/logout`);
});
