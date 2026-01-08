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