/**
 * TodoMVC UI regression tests
 *
 * Purpose:
 * - Validate core user flows (add, complete, delete)
 * - Act as smoke + regression coverage for the app
 *
 * These tests are intentionally small and readable.
 */
import { test, expect, type Page } from '@playwright/test';

/**
 * We keep the tests readable by:
 * 1) doing common setup once (beforeEach)
 * 2) using a tiny helper function to add todos
 *
 * Big idea: tests should read like user stories, not like messy scripts.
 */

test.beforeEach(async ({ page }) => {
// Arrange: open the app for every test
  await page.goto('');
   // Wait until the app is actually ready (input exists + visible)
  await expect(page.locator('input.new-todo')).toBeVisible();
});

/**
 * Helper: add a todo item through the UI.
 */
async function addTodo(page: Page, text: string) {
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.fill(text);
  await todoInput.press('Enter');
}

/**
 * User story:
 * - user opens TodoMVC
 * - user adds a todo
 * - user sees it in the list
 */
test('Given an empty list, when a user adds a todo, then it appears in the list', async ({ page }) => {
  // Act
  await addTodo(page, 'Learn Playwright');

  // Assert: verify the UI shows the item we added
  const todoItem = page.locator('.todo-list li', { hasText: 'Learn Playwright' });
  await expect(todoItem).toBeVisible();
  // Assert (extra): verify the counter shows 1 item left
  const counter = page.locator('.todo-count');
  await expect(counter).toHaveText('1 item left');
});

/**
 * User story:
 * - user adds a todo
 * - user marks it as completed
 * - UI reflects completed state
 */
test('Given an existing todo, when a user marks it complete, then it shows as completed', async ({ page }) => {
  // Arrange
  await addTodo(page, 'Learn Playwright');

  const todoItem = page.locator('.todo-list li', { hasText: 'Learn Playwright' });

  // Act: check the checkbox (semantic checkbox action = more stable)
  await todoItem.locator('input.toggle').check();

  // Assert: TodoMVC marks completed items by adding a "completed" class to the <li>
  await expect(todoItem).toHaveClass(/completed/);

  // Assert (extra): the checkbox is actually checked
  await expect(todoItem.locator('input.toggle')).toBeChecked();
});

/**
 * User story:
 * - user adds a todo
 * - user deletes it
 * - it disappears from the list
 */
test('Given an existing todo, when a user deletes it, then it is removed from the list', async ({ page }) => {
  // Arrange
  await addTodo(page, 'Learn Playwright');

  const todoItem = page.locator('.todo-list li', { hasText: 'Learn Playwright' });
  await expect(todoItem).toBeVisible();

  // Act:
  // TodoMVC only shows the delete (X) button when you hover the todo row.
  await todoItem.hover();
  await todoItem.locator('button.destroy').click();

  // Assert: the item should no longer exist in the DOM
  await expect(todoItem).toHaveCount(0);
});