const { test, expect } = require('@playwright/test');
const { LoginPage } = require('../Pages/LoginPage');
const { InventoryPage } = require('../Pages/InventoryPage');
const { CartPage } = require('../Pages/CartPage');
const { HeaderPage } = require('../Pages/HeaderPage');

test('A user logs in with valid credentials, adds one product to the cart, verifies the product name in the cart, and logs out.', async ({ page }) => {
  const loginPage = new LoginPage(page);
  const inventoryPage = new InventoryPage(page);
  const cartPage = new CartPage(page);
  const headerPage = new HeaderPage(page);

  //Visit URL and Login
  await loginPage.goto();
  await loginPage.login();

  //Add first products to cart
  const expectedProductName = await inventoryPage.getFirstProductName();
  await inventoryPage.addFirstProductToCart();

  //Go to cart page and verify product name
  await headerPage.openCart();
  const cartProductName = await cartPage.getFirstItemName();
  expect(cartProductName).toBe(expectedProductName);

  //Logout
  await headerPage.logout();

  //Verify login page after click logout
  await expect(page).toHaveURL('https://www.saucedemo.com/');
});