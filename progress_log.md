# Progress Log

## 2026-01-07
- Started QA Automation Lab
- Shipped repo + roadmap
## Jan 8, 2026 — Playwright + CI Milestone ✅

### What I shipped
- Bootstrapped a Playwright test project with Node/npm
- Added first UI test (TodoMVC add item flow)
- Added first API test (JSONPlaceholder GET /posts/1)
- Set up GitHub Actions CI to run Playwright tests on every push

### Proof
- Local run: 2 tests passing (UI + API)
- GitHub Actions workflow run: **GREEN** (Playwright Tests)
- Commits:
  - `test(ui): add first TodoMVC test`
  - `test(api): add GET /posts/1 smoke test`
  - `ci: run Playwright tests on GitHub Actions`

### Lesson learned
- Once tooling + CI are set up, adding tests becomes fast and repeatable.  
  The hard part is solving environment and automation plumbing early.

### Tomorrow targets
- Add Playwright config file + HTML report artifact review
- Add 1 more UI test (toggle complete or delete todo)
- Add API negative test (404 case)

## Jan 12, 2026 — UI Coverage + Config Solidified ✅

### What I shipped
- Added a second UI test to verify marking a todo item as completed
- Introduced `playwright.config.ts` to standardize test behavior
- Added proper npm scripts (`npm test`, `test:ui`, `test:api`, `test:headed`)
- Verified Playwright HTML report generation
- Confirmed GitHub Actions CI remains green after changes

### Proof
- Local run: 3 tests passing (2 UI + 1 API)
- GitHub Actions workflow run: **GREEN**
- Commits:
  - `test(ui): add todo completion test`
  - `chore: add Playwright config`
  - `chore: add test scripts`

### Lesson learned
- UI tests are more about asserting **state changes** than text.
- Centralizing config removes friction and makes CI behavior predictable.

### Next targets
- Add API negative test (404 case)
- Improve selector robustness in UI tests
- Minor README update to reflect completed foundation work