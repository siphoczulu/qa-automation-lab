import { test, expect } from '@playwright/test';

test('GET /posts/1 returns correct data', async ({ request }) => {
  // Arrange: send a request to the API
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/1'
  );

  // Assert: status code is OK
  expect(response.status()).toBe(200);

  // Assert: response body contains expected data
  const body = await response.json();
  expect(body.id).toBe(1);
});

test('GET /posts/999999 returns 404', async ({ request }) => {
  // Act: ask for a resource that should not exist
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/999999'
  );

  // Assert: the API should respond honestly
  expect(response.status()).toBe(404);
});