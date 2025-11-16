class CartPage {
  constructor(page) {
    this.page = page;
    this.cartItemName = page.locator('.inventory_item_name');
  }

  async goto() {
    await this.page.click('.shopping_cart_link');
  }

  async getFirstItemName() {
    return await this.cartItemName.first().textContent();
  }
}

module.exports = { CartPage };