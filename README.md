# Playwright CRUD UI Example

This project demonstrates how to write a simple end‑to‑end test in **Playwright** using TypeScript to exercise the core **Create‑Read‑Update‑Delete (CRUD)** actions on a public web application.  The test interacts with the [TodoMVC React](https://todomvc.com/examples/react/) implementation to add a new todo, verify its presence, edit it, and finally delete it.  The goal is to showcase how UI automation can be used to validate basic workflows with clean, maintainable code.

## Key concepts

- **Stable locators**: The test uses user‑oriented selectors such as `getByPlaceholder()` and `getByRole()` rather than brittle CSS selectors.  This aligns with Playwright best practices that encourage targeting what the user sees instead of internal markup【465384592128435†L84-L104】.
- **Isolated actions**: Each step (create, read, update, delete) is performed using a clear, single purpose action.  Keeping tests focused and isolated makes failures easier to diagnose【465384592128435†L55-L62】.
- **Assertions that auto‑wait**: Playwright’s `expect()` automatically waits for conditions to be met, reducing the need for manual waits and increasing test resilience【465384592128435†L84-L121】.

## Running the test

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the test suite:

   ```bash
   npx playwright test
   ```

3. Open the HTML report (optional):

   ```bash
   npx playwright show-report
   ```

The test file is located at `tests/crud-ui.spec.ts`.  Feel free to modify the test to explore other interactions on the TodoMVC site.

## Project structure

- `package.json` – defines the project metadata and dev dependencies.
- `playwright.config.ts` – central configuration (browser, base URL, reporter, etc.).
- `tsconfig.json` – TypeScript compiler options.
- `tests/crud-ui.spec.ts` – the end‑to‑end test showcasing CRUD actions.

This example can serve as a starting point for more advanced automation frameworks that incorporate patterns like the **Page Object Model** and **fixtures** to scale alongside your application.
