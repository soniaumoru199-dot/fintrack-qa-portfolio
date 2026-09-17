# FinTrack QA Portfolio Project

A portfolio-quality Software Testing / QA project demonstrating manual test design, UI automation, API testing concepts, bug reporting, and CI.

## What this project demonstrates
- Test plan and test strategy
- Functional, negative, boundary, usability, and regression testing
- Detailed test cases with expected/actual results
- Professional bug reports with severity and reproduction steps
- Playwright UI automation
- API-style endpoint checks using a lightweight local Node server
- GitHub Actions CI
- Clear QA documentation

## Project under test
FinTrack is a small mock personal-finance web application. It includes:
- Login
- Dashboard
- Transaction form
- Transaction list
- Basic search/filtering

The app intentionally contains a few defects so the QA work has real findings to document.

## Requirements
- Node.js 18+
- npm

## Run locally
```bash
npm install
npm start
```
Open http://127.0.0.1:3000

Demo credentials:
- Email: `demo@fintrack.test`
- Password: `Password123!`

## Run automated tests
In another terminal:
```bash
npm test
```

For headed mode:
```bash
npm run test:headed
```

## Project structure
```text
app/                 Mock application under test
tests/               Playwright UI and API tests
docs/                Test plan, strategy, and test cases
bugs/                Bug reports
.github/workflows/   CI configuration
```

## QA workflow
1. Review requirements.
2. Identify test scenarios and risks.
3. Write test cases.
4. Execute exploratory/manual checks.
5. Record defects with reproducible evidence.
6. Automate stable regression scenarios.
7. Run tests in CI.
8. Retest fixed defects and update documentation.
