# QA Automation Lab

Flagship QA automation portfolio project built with Playwright, API testing, and GitHub Actions CI.

This repository demonstrates how I design, run, and maintain a practical automated test suite that protects user workflows, validates API contracts, and helps prevent bad releases through CI.

---

## Project Overview

This project simulates a real-world QA automation setup using a small but meaningful application target: TodoMVC.

The goal is not just to “write tests,” but to demonstrate core QA engineering skills such as:

- functional UI testing
- API contract validation
- regression protection
- negative testing
- state-transition testing
- CI quality gates
- debugging and test hardening

---

## Tech Stack

- **Playwright** — UI / End-to-End testing
- **API testing** — contract and response validation
- **GitHub Actions** — CI pipeline
- **Node.js / npm** — project tooling

---

## Testing Scope

### UI / End-to-End Coverage
The UI suite currently covers core TodoMVC flows such as:

- adding a todo
- completing a todo
- deleting a todo
- filtering todos (Active / Completed / All)
- empty input rejection
- trimmed input behavior
- clear completed flow
- counter updates
- reversible state behavior

### API Coverage
The API suite currently covers:

- GET succes validation
- POST creation validation
- PATCH update validation
- negative case validation (`404`)
- schema-style assertions for response shape and types

---

## Smoke vs Regression

### Smoke Tests
Fast checks that confirm the core system is alive and critical workflows still work.

Examples in this repo:
- add todo
- complete todo
- delete todo
- basic API response success

### Regression Tests
Broader checks that protect against behavior breaking over time as the suite grows.

Examples in this repo:
- filters
- clear completed
- empty input
- trimmed input
- counter logic
- reversible state transitions

---

## Project Structure

```text
qa-automation-lab/
├── .github/workflows/        # GitHub Actions CI workflow
├── docs/                     # QA concept and strategy notes
├── tests/                    # Playwright UI and API test files
├── test-results/             # Raw artifacts from test runs
├── playwright-report/        # Human-readable HTML report
├── package.json              # Scripts and project metadata
├── playwright.config.ts      # Playwright configuration
├── progress_log.md           # Build log of reps and improvements
└── README.md
```

---

## Current Test Files

### `tests/todo.spec.ts`
Protects critical user workflows at the UI / E2E layer.

### `tests/api-jsonplaceholder.spec.ts`
Protects API contract behavior at the request/response layer.

---

## CI / Quality Gate

This project uses GitHub Actions to run tests automatically on every push.

CI currently provides:
- automated Playwright test execution
- pass/fail quality gate
- HTML report artifact support
- failure debugging support through screenshots, video, and trace settings

This helps simulate how QA automation protects releases in a real team environment.

---

## Reporting / Debugging

The project supports:
- HTML reports
- screenshots on failure
- video on failure
- trace on first retry
- CI-aware retries and worker settings

View the latest local report with:

```bash
npx playwright show-report
```

---

## How to Run

### Initial setup

```bash
npm run setup
```

### Run full suite

```bash
npm test
```

### Run only UI tests

```bash
npm run test:ui
```

### Run only API tests

```bash
npm run test:api
```

### Run in headed mode

```bash
npm run test:headed
```

### Debug mode

```bash
npm run test:debug
```

---

## Why This Project Matters

This repo demonstrates that I can:

- build and maintain a working automation suite
- protect user workflows through UI tests
- validate backend/API behavior
- debug failures and stabilize assertions
- use CI as a release protection mechanism
- document testing strategy clearly

---

## Roadmap / Next Improvements

Planned next upgrades include:

- stronger API coverage (POST / PUT / PATCH / DELETE)
- more QA artifacts (bug reports, test cases, test strategy docs)
- clearer smoke vs regression tagging
- broader QA portfolio packaging
- interview-ready QA documentation and examples

---

## Supporting QA Documentation

Additional QA-focused documentation lives in:

- `docs/qa-foundations.md`

More QA artifacts will be added under a dedicated `qa-artifacts/` structure.