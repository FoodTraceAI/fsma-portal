import { test, expect } from "./utils/loginState";

test.describe("Dashboard Page", { tag: "@dashboard" }, () => {
  test.beforeEach(async ({ authPage }) => {
    await authPage.goto("/dashboard");
  });

  test("title test", async ({ page }) => {
    await expect(page).toHaveTitle("FSMA Portal");
  });

  test("navbar component test-dash", async ({ authPage }) => {
    await expect(await authPage.locator("h1")).toHaveText("FoodTraceAI");
    await expect(await authPage.locator("ul.nav-list")).toBeVisible();
    await expect(await authPage.locator("li.nav-item#active")).toHaveText("Arriving Shipments");
  });

  test("dashboard header test", async ({ authPage }) => {
    await expect(await authPage.locator("div.header p")).toHaveText("Arriving Supplier Shipments");
    await expect(await authPage.locator("button.import-shipping-cte")).toHaveText("Import Shipping CTE File");
    await expect(await authPage.locator("div.popup-overlay")).not.toBeVisible();
    await authPage.locator("button.import-shipping-cte").click();
    await expect(await authPage.locator("div.popup-overlay")).toBeVisible();
  });
});

// TODO: more tests