# Playwright SauceDemo Automation (Page Object Model)

## Test Scenario
- Log in as `standard_user`
- Add the first product (Sauce Labs Backpack) to the cart
- Verify the correct product name appears in the cart
- Log out successfully

## Project Structure
```
├── pages/                  # Page Object classes
│   ├── LoginPage.js
│   ├── InventoryPage.js
│   ├── CartPage.js
│   └── HeaderPage.js
├── tests/
│   └── automationTask.spec.js  # Main test file
├── playwright.config.js   # Playwright configuration (auto-generated)
├── package.json
└── README.md               # You are here
```

## Prerequisites
- Node.js
- npm

## Setup & Installation
```bash
# Clone the repo
git clone https://github.com/Bayzid2/PlaywrightTask

# Install dependencies
npm install

# Install Playwright browsers
npx playwright install
```

## Run the Test
```bash
npx playwright test automationTask.spec.js
npx playwright test automationTask.spec.js --headed   (For view in browser)
```

## View HTML Report
```bash
npx playwright show-report
```
*(If port 9323 is busy: `npx playwright show-report --port 6060`)*
