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

## Feb 10, 2026 — UI Test Hardening ✅

### What I shipped
- Hardened TodoMVC filter test to assert list count and item content instead of visibility

### Proof
- Local run: 6/6 tests passing
- CI: green

### Lesson learned
- Visibility assertions can be flaky when UI hides elements via CSS
- Counting rendered items + checking content is more reliable and closer to real user behavior

### Next targets
- Add negative UI test (empty input does not create todo)
- Learn when to mock API vs hit real endpoints

## March 24, 2026 — README Upgrade + QA Clarity 

### What I shipped
- Refactored README to reflect a real-world QA project structure
- Clearly defined:
  - UI (E2E) test role → user workflows
  - API test role → backend contract validation
  - CI role → preventing bad releases
- Improved wording to be more aligned with industry terminology (E2E, API contract, CI pipeline)

### Proof
- Updated README.md with:
  - Testing strategy section
  - Clear project overview
  - Professional structure and terminology
- Repo now presents as a portfolio-ready QA project

### Key insights
- QA is not just writing tests — it's designing a **layered testing strategy**
- UI tests protect user experience, API tests protect system correctness
- CI acts as a **quality gate** that enforces trust in the system

### Outcome
- Transitioned from “learning QA tools” to **understanding QA engineering**
- Improved ability to explain the purpose of my tests in real-world terms

## March 25, 2026 — Negative UI Testing Added

### What I shipped
- Added a negative UI test to verify that empty todo input does not create a new item
- Recovered the Playwright browser environment when missing browser binaries blocked UI execution
- Verified the full suite passes again locally and in CI

### Proof
- Local run: all tests passing
- GitHub Actions: **GREEN**

### Lesson learned
- Negative tests are important because they verify the system rejects invalid user behavior correctly
- Not every failure is caused by test logic; sometimes the environment itself is the issue
- If API tests pass but UI tests fail with missing executable errors, the Playwright browser installation is the likely problem

### Next targets
- Add another negative or edge-case UI test
- Continue improving confidence in distinguishing logic failures from environment failures

## March 28, 2026 — Counter State Coverage 

### What I shipped
- Added a UI test to verify that the todo counter updates correctly after completing one item
- Strengthened coverage around derived UI state, not just direct user actions

### Proof
- Local run: full test suite passing
- New test validates that completing one of two todos updates the counter to `1 item left`

### Lesson learned
- Good UI tests do not only verify clicks and visible changes
- They also verify summary state and business logic shown to the user
- Small tests can add high-value regression coverage when they check the right thing

### Next targets
- Add another edge-case UI test around duplicate or trimmed input
- Continue building confidence in testing derived state through the UI

## March 29, 2026 — Trimmed Input Edge Case

### What I shipped
- Added a UI edge-case test to verify that todo input with extra spaces is trimmed correctly
- Strengthened the suite by covering imperfect but realistic user input

### Proof
- Local run: full test suite passing
- GitHub Actions: **GREEN**
- New test confirms that adding `   Learn Playwright   ` results in a single todo with cleaned text

### Lesson learned
- Good QA tests should cover realistic user behavior, not just ideal inputs
- Edge-case tests add high-value coverage because they validate how the product handles messy input
- A small test can still be meaningful when it protects business behavior

### Next targets
- Add another edge-case UI test (duplicate input or toggle/counter interaction)
- Keep building confidence around product assumptions vs actual behavior

## March 30, 2026 — Clear Completed Flow

### What I shipped
- Added a UI test for the “Clear completed” flow
- Verified that completed todos can be removed while active todos remain
- Asserted final list state and counter correctness after cleanup

### Proof
- Local run: full test suite passing
- GitHub Actions: **GREEN**
- New test confirms that clearing completed items leaves only active todos in the list

### Lesson learned
- Good UI tests validate complete flows, not just isolated actions
- Cleanup actions like “Clear completed” are important because they combine multiple states: completion, conditional UI, and destructive behavior
- Strong QA coverage checks both what disappears and what correctly remains

### Next targets
- Add another edge-case UI test (duplicate input or whitespace-only behavior review)
- Keep strengthening the suite around realistic user behavior and state transitions

## March 31, 2026 — Conditional UI State Assertion 

### What I shipped
- Strengthened the “Clear completed” UI test with an extra assertion
- Verified that the “Clear completed” button disappears after completed items are removed

### Proof
- Local run: full test suite passing
- GitHub Actions: **GREEN**

### Lesson learned
- Strong QA tests validate not just the main action, but also the surrounding UI state
- Conditional UI elements should be checked both when they appear and when they are expected to disappear

### Next targets
- Add one more edge-case or state-transition UI test
- Continue building the suite with small, high-value assertions

## April 1, 2026 — Stronger Negative UI Coverage

### What I shipped
- Strengthened the empty-input negative UI test with an additional assertion
- Verified that the main todo section stays hidden when the user submits only spaces

### Proof
- Local run: full test suite passing
- GitHub Actions: **GREEN**

### Lesson learned
- Negative tests are stronger when they validate both data state and UI state
- It is not enough to assert that no item was created; the interface should also remain in the correct “empty” state

### Next targets
- Add one more high-value edge-case UI assertion
- Continue strengthening negative and state-transition coverage with small focused reps

## April 2, 2026 — Reversible State Coverage 

### What I shipped
- Added a UI test to verify that a completed todo can be marked active again
- Validated that the counter updates correctly when state is reversed

### Proof
- Local run: full test suite passing
- GitHub Actions: **GREEN**
- New test confirms that completing one of two todos changes the counter to `1 item left`, and unchecking it changes the counter back to `2 items left`

### Lesson learned
- Good QA coverage should include reversible state transitions, not just one-way actions
- Testing that a system can return to a correct previous state is just as important as testing the initial change
- Counter assertions are useful because they validate visible business logic, not just UI clicks

### Next targets
- Shift from only lab reps into QA discipline reps
- Learn and classify testing types (smoke, regression, sanity, functional, non-functional)
- Keep the lab alive while starting broader QA skill building

## April 10, 2026 — QA Foundations + Small Hardening

### What I shipped
- Added a QA foundations document to connect my repo work to broader QA practice
- Strengthened a reversible-state UI test with an additional conditional UI assertion

### Proof
- New docs file: `docs/qa-foundations.md`
- Local run: full test suite passing

### Lesson learned
- My lab is Phase 1, not the whole QA journey
- Small assertions can still add valuable regression coverage when they verify conditional UI state

### Next targets
- Learn smoke vs regression vs sanity testing
- Practice test case design outside the repo
- Keep the lab alive with smaller maintenance reps