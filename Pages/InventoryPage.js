class InventoryPage {
  constructor(page) {
    this.page = page;
    this.addToCartButton = page.locator('.inventory_item:nth-child(1) button');
    this.productName = page.locator('.inventory_item:nth-child(1) .inventory_item_name');
  }

  async addFirstProductToCart() {
    await this.addToCartButton.click();
  }

  async getFirstProductName() {
    return await this.productName.textContent();
  }
}

module.exports = { InventoryPage };