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

## Jan 16, 2026 — Test Stability & CI Hardening ✅

### What I shipped
- Refactored UI tests to use more stable, intention-based selectors
- Improved checkbox interaction using semantic actions (check)
- Tuned Playwright config for reliability:
- CI-only retries
- Controlled worker count in CI
- Traces, screenshots, and videos retained only on failure
- Verified local runs + CI pipeline after refactor

### Proof
- Local run: 4 tests passing (UI happy path + UI state change + API positive + API negative)
- GitHub Actions workflow: GREEN
- Commits:
  - chore: refine Playwright config for stability
  - test(ui): stabilize todo completion assertions

### Lesson learned
- Reliable tests are about intent, not DOM structure.
- Good automation isn’t just writing tests, it’s configuring how they fail and how you debug them.
- CI-first thinking prevents flaky, untrusted test suites.

### Next targets
- Add one realistic UI scenario:
  - delete a todo or
  - filter Active / Completed todos
- Introduce shared setup (beforeEach) to reduce repetition
- Keep commit history small and intentional

## Jan 17, 2026 — UI Scenarios + Test Refactor ✅

### What I shipped
- Refactored TodoMVC UI tests using `beforeEach` and a reusable helper
- Added delete-todo UI scenario (hover + destroy button)
- Improved test readability and reduced duplication

### Proof
- Local run: 3 UI tests passing
- GitHub Actions workflow: **GREEN**
- Commit:
  - `test(ui): add delete todo scenario and refactor setup`

### Lesson learned
- UI tests should read like user stories, not scripts
- Refactoring test setup makes suites easier to extend and maintain
- Hover-only actions are common in real apps and must be handled explicitly

### Next targets
- Add Active / Completed filter UI tests
- Introduce `data-testid` selectors and compare stability
- Begin grouping tests by feature (describe blocks)

## Jan 21, 2026 — Repo Ownership & Fundamentals Deep Dive ✅

### What I shipped
- Fully reviewed and understood the structure of my QA Automation repo
- Verified all UI and API tests pass locally (npm test)
- Confirmed CI is stable and green
- Clarified the role of every major file:
  - package.json
  - package-lock.json
  - playwright.config.ts
  - tests/*.spec.ts
  - test-results/ vs playwright-report/

### Proof
- Local run: 5 tests passing (UI + API)
- CI: GREEN on GitHub Actions
- No code changes required — understanding-focused session

### Lessons learned
- npm test runs Playwright, which auto-discovers all .spec.ts files
- CI uses npm ci to guarantee deterministic, reproducible installs
package-lock.json is critical for consistency across machines
- test-results/ contains raw artifacts (traces, screenshots, videos)
- playwright-report/ is the human-readable HTML report
- Flaky tests are usually caused by selectors, timing, state leakage, or environment differences — not “randomness”

### Next targets
- Improve selector strategy (getByRole, getByTestId)
- Add richer API assertions (headers, schema-level checks)
- Introduce a light Page Object pattern for UI tests
- Continue building confidence explaining the repo end-to-end

## Jan 28, 2026 — Environment Recovery ✅

### What I shipped
- Repaired Playwright UI runtime by reinstalling required browser binaries

### Proof
- Local run: 5 passed
- UI + API tests both green again

### Lesson learned
- If API tests pass but UI tests fail instantly with “Executable doesn’t exist”, it’s a browser install/cache issue — fix with npx playwright install.

### Next targets
- Add one more UI assertion (filter counts / active/completed)
- Add API schema-ish assertion (check required fields types)
- Keep CI green

## Jan 30, 2026 — Micro Rep (Continuity) ✅

### What I shipped
- Updated progress log to maintain consistency and reduce tomorrow’s startup friction

### Proof
- Git commit: docs: log Jan 30 micro rep (continuity)

### Lesson learned
- Consistency beats intensity: even a small rep protects momentum and keeps the system alive.

### Next session plan (tomorrow, first 10 minutes)
- git pull && npm ci
- npm test
- Add 1 new UI assertion (filters or footer count)
- Push + confirm CI stays green

## Jan 30, 2026 — Config Hardening (baseURL) ✅

### What I shipped
- Added baseURL to Playwright config (supports switching environments via env var)
- Refactored UI tests to use page.goto('/') instead of hardcoding full URLs
- Fixed flaky UI tests caused by incorrect baseURL + page.goto('/') usage

### Proof
- Local run: npm test passing
- CI: GitHub Actions run GREEN

### Lesson learned
- Centralizing URLs in playwright.config.ts makes tests easier to maintain and lets you run the same suite against different environments (staging/prod) without rewriting tests.
- page.goto('/') navigates to the domain root, not the app path
- When using baseURL, page.goto('') means “go exactly to baseURL”

### Next targets
- Add one UI assertion that checks the footer counters / filters (All / Active / Completed)
- Add one stronger API “schema-ish” assertion (required keys + types)
- Keep CI green

## Feb 1, 2026 — Repo Deep Dive + Stronger API Coverage ✅

### What I shipped
- Explained the full Playwright test flow end-to-end (config → tests → report → CI)
- Gained clarity on package.json:
  - how npm scripts work
  - why npm test runs Playwright
  - difference between npm install vs npm ci
- Reviewed and interpreted the Playwright HTML report
- Added stronger API test coverage with schema-style assertions:
  - validated required fields and types for /posts/1
  - kept negative test for 404 behavior
- Kept CI green after changes

### Proof
- Local run: all UI + API tests passing
- GitHub Actions: GREEN
- New commit:
  - test(api): add schema-style assertions for post payload

### Lesson learned
- API tests validate contracts and rules, not just status codes
- package.json is the control center for scripts, dependencies, and reproducible environments
- UI tests and API tests cover different layers and work best together
- HTML reports + artifacts (screenshots/videos) are critical for debugging failures

### Next targets
- Practice explaining API vs UI test coverage out loud (interview-style)
- Add one more UI assertion that validates derived state (filters or counts)
- Keep daily QA reps short, focused, and proof-driven

## Feb 8, 2026 — UI Filtering Coverage ✅

### What I shipped
- Added UI regression test for TodoMVC filtering (Active / Completed / All)
- Diagnosed and fixed a false assumption about visibility vs DOM removal
- Stabilized assertions using item counts and content instead of visibility

### Proof
- Local run: 6 tests passing (UI + API)
- Filter test validated across all views
- CI: GREEN

### Lesson learned
- UI filtering doesn’t always mean “hidden” — often items are removed from the DOM.
- `toHaveCount()` is safer than `not.toBeVisible()` when lists are filtered.
- Debugging failures teaches more than green runs.

### Next targets
- Add one flaky-hardening improvement (destroy button visibility wait)
- Introduce a small Page Object for Todo actions
- Keep CI green with one focused test per session