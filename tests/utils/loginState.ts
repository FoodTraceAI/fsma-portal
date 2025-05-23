// Creating the state of the test environment

import { test as base, expect } from './../baseFixture';
import { Page } from '@playwright/test';
import dotenv from "dotenv";
dotenv.config();

const USER_EMAIL : string = process.env.TEST_USER_EMAIL!;
const USER_PASSWORD : string = process.env.TEST_USER_PASSWORD!;

const test = base.extend<{
  page: Page;
}>({
  authPage: async ({ page }, use) => {
    await page.goto("/");
    await page.locator("input#email").fill(USER_EMAIL);
    await page.locator("input#password").fill(USER_PASSWORD);
    await page.locator("button").click();
    await page.waitForNavigation('/dashboard');

    // eslint-disable-next-line react-hooks/rules-of-hooks
    await use(page);
  },
});

export { test, expect };