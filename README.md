# QA Automation Lab (Playwright + API + CI)

## Overview
This project simulates a real-world QA automation setup, combining UI (E2E) and API testing with CI integration.

The goal is to build practical QA engineering skills and demonstrate the ability to design, execute, and maintain a reliable automated test suite.

---

## Tech Stack
- Playwright (UI / End-to-End testing)
- API testing (JSONPlaceholder)
- GitHub Actions (CI pipeline)
- Node.js / npm

---

## Testing Strategy

### UI Tests (End-to-End)
- Validate critical user workflows:
  - Add todo
  - Complete todo
  - Delete todo
  - Filter todos (Active / Completed / All)
- Ensure correct UI state and behavior from a user perspective

### API Tests
- Validate API contract:
  - Status codes
  - Response structure (schema-like checks)
- Ensure backend responses are correct and stable

### CI Integration
- Tests run automatically on every push via GitHub Actions
- Failing tests block broken code from being merged
- Artifacts (reports, screenshots, videos) support debugging

---

## Key Concepts Demonstrated
- Functional testing (UI + API)
- End-to-End (E2E) testing
- Integration/API testing
- Test stability and selector strategy
- CI/CD integration for quality gates

---

## Proof of Work
- All tests passing locally and in CI
- Clean commit history showing incremental improvements
- Progress log documenting daily learning and decisions

---

## Why This Project Exists
To simulate the responsibilities of a QA engineer:
- Protect user workflows
- Validate backend contracts
- Prevent bad releases through automated testing

---

## How to Run

```bash
npm ci
npm test
```

## View Test Report

```bash
npx playwright show-report
```