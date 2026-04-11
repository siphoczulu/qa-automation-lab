# Sample UI Bug Report — Todo Counter Does Not Update After Reactivating a Completed Todo

## Title
Todo counter does not return to the correct value after a completed item is marked active again

## ID
BUG-001

## Type
UI / Functional Bug

## Severity
Medium

## Priority
High

## Environment
- Application: TodoMVC
- Browser: Chromium
- Test Environment: Playwright local run
- OS: macOS

## Summary
When a user completes one of two todos and then marks it active again, the counter should return to `2 items left`. If the counter remains at `1 item left`, the visible product state becomes inconsistent with the actual list state.

## Preconditions
- The application is loaded
- The todo list is empty

## Steps to Reproduce
1. Add a todo: `Learn Playwright`
2. Add a second todo: `Ship QA reps`
3. Mark `Learn Playwright` as completed
4. Observe the counter changes to `1 item left`
5. Uncheck `Learn Playwright` to mark it active again
6. Observe the counter

## Expected Result
The counter updates to `2 items left`

## Actual Result
The counter remains at `1 item left`

## Impact
This creates incorrect feedback for the user and makes the visible summary inconsistent with the actual number of active todos.

## Suggested Root Cause
The application may be updating the completed state of the todo item without recalculating the active todo count after the state is reversed.

## Notes
This is a strong regression candidate because it involves reversible state logic and visible business behavior.