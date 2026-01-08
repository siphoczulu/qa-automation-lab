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