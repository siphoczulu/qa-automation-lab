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