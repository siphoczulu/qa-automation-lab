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
  await page.goto('https://demo.playwright.dev/todomvc/');
});

/**
 * Helper: add a todo item through the UI.
 * Why? Reuse. So we don't repeat the same 3 lines in every test.
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
test('can add a todo item', async ({ page }) => {
  // Act
  await addTodo(page, 'Learn Playwright');

  // Assert: verify the UI shows the item we added
  const todoItem = page.locator('.todo-list li', { hasText: 'Learn Playwright' });
  await expect(todoItem).toBeVisible();
});

/**
 * User story:
 * - user adds a todo
 * - user marks it as completed
 * - UI reflects completed state
 */
test('can mark a todo item as completed', async ({ page }) => {
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
test('can delete a todo item', async ({ page }) => {
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