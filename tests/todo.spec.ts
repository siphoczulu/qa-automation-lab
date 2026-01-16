import { test, expect } from '@playwright/test';

/**
 * This test is a tiny “user story”:
 * - user opens TodoMVC
 * - user adds a todo
 * - user sees it in the list
 */
test('can add a todo item', async ({ page }) => {
  // Arrange: open the app in a real browser instance controlled by Playwright
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Act: interact like a user
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.fill('Learn Playwright');
  await todoInput.press('Enter');

  // Assert: verify the UI changed as expected
  const firstTodo = page.locator('.todo-list li').first();
  await expect(firstTodo).toContainText('Learn Playwright');
});

test('can mark a todo item as completed', async ({ page }) => {
  // Arrange
  await page.goto('https://demo.playwright.dev/todomvc/');

  // Add a todo first (setup)
  const todoInput = page.getByPlaceholder('What needs to be done?');
  await todoInput.fill('Learn Playwright');
  await todoInput.press('Enter');

  const todoItem = page.locator('.todo-list li', { hasText: 'Learn Playwright' });
  await expect(todoItem).toBeVisible();


  // Act: click the checkbox to mark completed
  await todoItem.locator('input.toggle').check();

  // Assert: the <li> gets a "completed" class
  await expect(todoItem).toHaveClass(/completed/);
  await expect(todoItem.locator('input.toggle')).toBeChecked();
});