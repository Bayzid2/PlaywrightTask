class HeaderPage {
  constructor(page) {
    this.page = page;
    this.cartLink = page.locator('.shopping_cart_link');
    this.menu = page.locator('#react-burger-menu-btn');
    this.logoutMenu = page.locator('#logout_sidebar_link');
  }

  async openCart() {
    await this.cartLink.click();
  }

  async logout() {
    await this.menu.click();
    await this.page.waitForTimeout(500);
    await this.logoutMenu.click();
  }
}

module.exports = { HeaderPage };