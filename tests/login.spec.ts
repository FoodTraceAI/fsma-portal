import { test, expect } from "./baseFixture";
import dotenv from "dotenv";
dotenv.config();

const USER_EMAIL: string = process.env.TEST_USER_EMAIL!;
const USER_PASSWORD: string = process.env.TEST_USER_PASSWORD!;

test.describe("Login Page", { tag: "@login" }, () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("/");
  });

  test("title test", async ({ page }) => {
    await expect(page).toHaveTitle("FSMA Portal");
  });

  test("form component test", async ({ page }) => {
    await expect(await page.locator("h1")).toHaveText("Login");
    await expect(await page.locator("input#email")).toBeVisible();
    await expect(await page.locator("input#password")).toBeVisible();
    await expect(await page.locator("button")).toBeVisible();
  });

  test("field entry test", async ({ page }) => {
    const email = await page.locator("input#email");
    const password = await page.locator("input#password");

    await email.fill(USER_EMAIL);
    await expect(email).toHaveValue(USER_EMAIL);
    await password.fill(USER_PASSWORD);
    await expect(password).toHaveValue(USER_PASSWORD);
  });

  test("error message test", async ({ page }) => {
    const email = await page.locator("input#email");
    const password = await page.locator("input#password");
    const button = await page.locator("button");

    await email.fill(USER_EMAIL);
    await password.fill("1");
    await button.click();

    await expect(await page.locator(".errmsg")).toHaveText("Unauthorized.");
  });

  test("loggin in", async ({ page }) => {
    const email = await page.locator("input#email");
    const password = await page.locator("input#password");
    const button = await page.locator("button");

    await email.fill(USER_EMAIL);
    await password.fill(USER_PASSWORD);
    await button.click();

    await expect(page).toHaveURL("/dashboard");
  });
});
