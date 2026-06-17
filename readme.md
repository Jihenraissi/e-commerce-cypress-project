# Demoblaze — Cypress E-commerce Automation Framework

> End-to-end test automation framework for the [Demoblaze E-commerce App](https://www.demoblaze.com), built with Cypress following Page Object Model and CI/CD best practices.

---

## Tech Stack

| Tool           | Purpose                   |
| -------------- | ------------------------- |
| Cypress        | E2E Testing               |
| GitHub Actions | CI/CD Pipeline            |
| Cypress Cloud  | Parallel runs & Reporting |
| Faker.js       | Dynamic test data         |
| Mochawesome    | HTML Test Reports         |

---

## Project Structure

```
cypress/
├── e2e/
│   ├── aboutUs/
│   │   └── aboutUs.cy.js         # About Us modal & video tests
│   ├── authentication/
│   │   ├── Login.cy.js           # Login tests
│   │   ├── logOut.cy.js          # Logout tests
│   │   └── signUp.cy.js          # Signup tests
│   ├── cart/
│   │   ├── addToCart.cy.js       # Add to cart tests
│   │   ├── checkout.cy.js        # Checkout tests
│   │   └── removeProduct.cy.js   # Remove from cart tests
│   ├── contact/
│   │   └── contact.cy.js         # Contact form tests
│   └── home/
│       ├── categories.cy.js      # Category filter tests
│       └── pagination.cy.js      # Pagination tests
├── pages/                        # Page Object Model classes
│   ├── aboutUsPage.js
│   ├── loginPage.js
│   ├── signUpPage.js
│   ├── homePage.js
│   ├── productPage.js
│   ├── cartPage.js
│   └── contactPage.js
└── support/
    └── commands.js                # Custom Cypress commands
```

---

## Test Coverage — 27 Tests

| Module             | Scenarios                                   | Count |
| ------------------ | ------------------------------------------- | ----- |
| **About Us**       | Open modal, play/pause video                | 2     |
| **Authentication** | Login (valid/invalid), Signup, Logout       | 11    |
| **Shopping Cart**  | Add to cart, Checkout, Remove product       | 3     |
| **Home**           | Category filtering, Pagination              | 6     |
| **Contact**        | Form submission, validation bugs documented | 5     |

---

## Getting Started

```bash
# Install
git clone https://github.com/YOUR_USERNAME/YOUR_REPO.git
npm install

# Create cypress.env.json
{
  "USERNAME": "your-test-username",
  "PASSWORD": "your-test-password"
}
```

---

## Running Tests

```bash
npx cypress open        # Interactive mode
npm run cy:run          # Headless run
npm run report:full     # Run tests + generate HTML report
```

Report is generated at `cypress/reports/final-report.html`.

---

## CI/CD Pipeline

Every push triggers GitHub Actions with 2 parallel containers, screenshot capture on failure, and results published to Cypress Cloud.

---

## Best Practices Applied

- **Page Object Model** — one class per page, chainable methods
- **Custom Commands** — `cy.addFirstProductToCart()` removes duplication across 3 test files
- **Dynamic test data** — Faker.js for checkout, signup and contact forms
- **Network interception** — `cy.intercept()` + `cy.wait()` instead of fixed timeouts
- **Test retries** — `retries.runMode: 2` to handle the instability of a public demo server under load
- **Documented bugs** — contact form validation issues tracked as `[BUG]` test cases instead of hidden or skipped
- **HTML Reports** — Mochawesome generates visual reports after every run
- **CI/CD** — GitHub Actions with parallel execution

---

## Known Issues (Documented via Tests)

- The contact form has no client-side validation — messages are submitted regardless of empty fields or invalid email format. Covered by `[BUG]` tagged tests.
- Demoblaze is a public demo server with no SLA; running the full suite back-to-back can occasionally produce slower responses. Retries are configured to absorb this instability without masking real regressions.

---

## Author

**Jihen Raissi** — QA Automation Engineer
