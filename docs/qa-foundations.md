# QA Foundations

## What a QA Engineer Does
A QA Engineer protects software quality by validating expected behavior, preventing regressions, and reducing the chance of bad releases. This includes checking user workflows, backend contracts, and overall system reliability.

## Core Testing Types

### Functional Testing
Checks whether the system works correctly.
Examples:
- UI workflows
- API responses
- business rules

### Non-Functional Testing
Checks how well the system works.
Examples:
- performance
- security
- accessibility
- load

## Testing Levels

### Unit Testing
Tests small pieces of code in isolation.

### Integration Testing
Tests whether components or services work correctly together.

### End-to-End (E2E) / UI Testing
Tests full user workflows through the interface.

## How My QA Lab Maps to This

### UI Tests
- Type: Functional
- Level: End-to-End (E2E)
- Protects: user workflows and visible product behavior

### API Tests
- Type: Functional
- Level: Integration / contract-level
- Protects: API responses, status codes, and payload shape

### CI
- Purpose: quality gate
- Value: prevents broken code from being merged or released

## Key Lessons So Far
- UI tests are slower and more fragile because they depend on the browser, selectors, timing, and rendering.
- API tests are faster and more stable because they hit the service directly.
- Good QA is not just finding bugs. It is preventing bad releases.
- Strong tests validate both direct actions and resulting system state.

## What I Still Need to Learn
- Smoke vs regression vs sanity testing
- Test case design techniques
- Bug reporting
- Severity vs priority
- Real-world QA workflows in teams
