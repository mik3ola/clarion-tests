import { Page } from '@playwright/test';

export class HomePage {
    readonly page: Page;
    readonly logoutBtn = 'a[href="/logout"]';

    constructor(page: Page) {
    this.page = page;
    }

    async logout() {
    await this.page.click(this.logoutBtn);
    }

    async isLoggedIn() {
    return this.page.locator(this.logoutBtn).isVisible();
    }
}
