# TodoMVC Core Flow Test Cases

## Scope
These test cases cover the most important functional flows of the TodoMVC application.

---

## TC-001 — Add a Todo

### Objective
Verify that a user can add a new todo item successfully.

### Preconditions
- Application is loaded
- Todo list is empty or available for input

### Steps
1. Enter `Learn Playwright` into the todo input
2. Press `Enter`

### Expected Result
- A new todo item appears in the list
- The text matches the entered value
- The counter shows `1 item left`

---

## TC-002 — Complete a Todo

### Objective
Verify that a user can mark a todo item as completed.

### Preconditions
- At least one todo exists in the list

### Steps
1. Locate an existing todo item
2. Click the completion checkbox

### Expected Result
- The todo item is marked as completed
- The item receives completed styling
- The checkbox is checked

---

## TC-003 — Delete a Todo

### Objective
Verify that a user can delete a todo item.

### Preconditions
- At least one todo exists in the list

### Steps
1. Hover over an existing todo item
2. Click the delete control

### Expected Result
- The todo item is removed from the list

---

## TC-004 — Filter Active Todos

### Objective
Verify that only active todos appear when the Active filter is selected.

### Preconditions
- At least two todos exist
- One is active
- One is completed

### Steps
1. Click the `Active` filter

### Expected Result
- Only active todos are shown
- Completed todos are excluded from the visible list

---

## TC-005 — Filter Completed Todos

### Objective
Verify that only completed todos appear when the Completed filter is selected.

### Preconditions
- At least two todos exist
- One is active
- One is completed

### Steps
1. Click the `Completed` filter

### Expected Result
- Only completed todos are shown
- Active todos are excluded from the visible list

---

## TC-006 — Clear Completed

### Objective
Verify that clearing completed todos removes only completed items.

### Preconditions
- At least one completed todo exists
- At least one active todo exists

### Steps
1. Click `Clear completed`

### Expected Result
- Completed todos are removed
- Active todos remain
- Counter reflects the remaining active items

---

## TC-007 — Reject Empty Input

### Objective
Verify that empty or whitespace-only input does not create a todo.

### Preconditions
- Application is loaded

### Steps
1. Enter only spaces into the todo input
2. Press `Enter`

### Expected Result
- No new todo item is created
- The counter does not appear
- The main todo section remains hidden

---

## TC-008 — Trim Extra Spaces

### Objective
Verify that the application trims extra spaces from input text.

### Preconditions
- Application is loaded

### Steps
1. Enter `   Learn Playwright   ` into the todo input
2. Press `Enter`

### Expected Result
- One todo is created
- Displayed text is `Learn Playwright`

---

## TC-009 — Reactivate a Completed Todo

### Objective
Verify that a completed todo can be made active again.

### Preconditions
- At least two todos exist
- One todo has been marked completed

### Steps
1. Uncheck the completed todo

### Expected Result
- The todo is marked active again
- Completed styling is removed
- Counter updates to reflect the new active count