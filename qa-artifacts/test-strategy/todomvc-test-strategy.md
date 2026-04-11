# TodoMVC Test Strategy

## Objective
Define a lightweight QA strategy for the TodoMVC application covered in this repository.

The purpose of this strategy is to explain:
- what is being tested
- what is most important to protect
- which tests should be treated as smoke vs regression
- what risks still exist
- how quality is enforced before change is accepted

---

## Scope

### In Scope
The current automated suite focuses on core functional behavior of the TodoMVC application, including:

- adding a todo
- completing a todo
- deleting a todo
- filtering todos
- rejecting empty input
- trimming extra spaces
- clearing completed items
- updating visible counters
- reversible state transitions

### Out of Scope
The current suite does not yet cover:

- cross-browser coverage beyond Chromium
- accessibility testing
- performance / load testing
- security testing
- mobile viewport behavior
- visual regression testing

---

## Test Levels Covered

### UI / End-to-End Tests
These tests simulate real user behavior in the browser and validate visible product behavior.

They are used to protect:
- critical user workflows
- state changes visible to the user
- conditional UI behavior
- regression-prone interactions

### API Tests
These tests validate request/response behavior and API contract expectations.

They are used to protect:
- positive API responses
- negative API behavior (`404`)
- schema-style response validation

---

## Smoke Test Scope

Smoke tests should run on every push and answer one question:

**“Is the product basically working?”**

Recommended smoke coverage in this repo:
- add todo
- complete todo
- delete todo
- basic API success response

These tests are small, fast, and cover the most critical product behavior.

---

## Regression Test Scope

Regression tests go broader and protect behavior that is more likely to break as the system changes.

Recommended regression coverage in this repo:
- filters (Active / Completed / All)
- empty input rejection
- trimmed input behavior
- clear completed flow
- counter logic
- reversible state behavior

These tests are important because they verify system correctness beyond the happy path.

---

## Risks and Potential Failure Areas

Current key risks include:

### External Dependency Risk
The suite currently depends on:
- hosted TodoMVC demo site
- external API endpoint for request tests

This means failures may sometimes come from environment/network instability rather than product logic.

### Selector / UI Coupling Risk
UI tests depend on selectors, visible text, and DOM state.
Changes in markup or rendering behavior could break tests even if business logic remains correct.

### Browser Runtime Risk
UI tests depend on Playwright browser binaries being installed correctly.
If browsers are missing, API tests may still pass while UI tests fail instantly.

---

## Quality Gates

The current quality gate is:

- local test validation before push
- GitHub Actions CI run on push
- failing tests block confidence in the change
- screenshots, video, and trace support debugging on failures

This creates a simple but effective release safety net.

---

## Test Data Strategy

Current tests use lightweight inline data such as:
- `Learn Playwright`
- `Ship QA reps`

This keeps tests readable and easy to debug.

Future improvement:
- centralize reusable test data constants if the suite grows significantly

---

## Future Improvements

Planned upgrades to this strategy include:

- stronger API coverage (POST / PUT / PATCH / DELETE)
- explicit smoke vs regression grouping in the suite
- sample bug reports linked to covered behavior
- test case documentation mapped to current flows
- broader QA coverage beyond functional automation

---

## Summary

This test strategy reflects a lightweight but real QA approach:

- protect critical workflows
- cover both UI and API layers
- use CI as a quality gate
- expand gradually from smoke coverage into broader regression protection

The project is intentionally small, but the testing thinking is designed to mirror real QA engineering practice.