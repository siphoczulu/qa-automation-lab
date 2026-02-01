import { test, expect } from '@playwright/test';

test('GET /posts/1 returns a valid post payload', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);

  const body = await res.json();

  // "schema-ish" checks (types + required keys)
  expect(body).toEqual(
    expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    })
  );

  // specific sanity check
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