# TodoMVC Risk Analysis

## Objective
Identify the highest-value product risks in the TodoMVC application and clarify what should be protected first through testing.

---

## Highest-Value Product Risks

### 1. Core todo creation fails
If users cannot add todos, the product loses its main purpose immediately.

### 2. Completion state becomes inaccurate
If completed and active states are not reflected correctly, users lose trust in the system.

### 3. Delete / clear completed removes the wrong items
Destructive actions carry high risk because mistakes can remove user data unexpectedly.

### 4. Filter behavior becomes inconsistent
If Active / Completed / All views show incorrect items, the visible state becomes misleading.

### 5. Counter becomes incorrect
The counter is small, but it reflects business logic directly. If it is wrong, the application feels unreliable.

### 6. Invalid input is accepted
If empty or whitespace-only todos are allowed, data quality and user experience degrade.

---

## Highest-Value Flows to Protect First

The most important flows to protect through automation are:

- add todo
- complete todo
- delete todo
- clear completed
- filter active/completed/all
- counter updates
- empty input rejection

These flows provide the highest confidence in basic product behavior.

---

## What Should Be Automated First

Priority automation candidates:

1. add todo
2. complete todo
3. delete todo
4. basic API success response
5. negative input rejection
6. state-dependent UI behavior (filters, counters, clear completed)

These provide the strongest regression protection for the smallest automation cost.

---

## What Should Stay Manual for Now

At this stage, the following areas can remain manual or out of scope:

- cross-browser differences beyond current coverage
- accessibility validation
- performance / load behavior
- visual layout issues
- mobile-specific viewport behavior

These are valuable, but not the highest priority for this foundations repo.

---

## Main Assumptions

- TodoMVC is being used as a learning target, not a production business application
- The current suite is focused on functional correctness
- External hosted dependencies may introduce noise unrelated to logic regressions

---

## Summary

The biggest risks in TodoMVC are not complexity risks — they are correctness and state-consistency risks.

This makes the application a good target for foundational QA automation practice because:
- core workflows are easy to understand
- regressions are visible
- state changes can be validated clearly
- the suite can model real QA thinking on a smaller surface area