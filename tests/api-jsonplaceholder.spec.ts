import { test, expect } from '@playwright/test';

test('GET /posts/1 returns a valid post payload', async ({ request }) => {
  const res = await request.get('https://jsonplaceholder.typicode.com/posts/1');
  expect(res.status()).toBe(200);

  const body = await res.json();

  // Validate required fields and basic response shape
  expect(body).toEqual(
    expect.objectContaining({
      userId: expect.any(Number),
      id: expect.any(Number),
      title: expect.any(String),
      body: expect.any(String),
    })
  );

  expect(body.id).toBe(1);
});

test('GET /posts/999999 returns 404', async ({ request }) => {
  const response = await request.get(
    'https://jsonplaceholder.typicode.com/posts/999999'
  );

  expect(response.status()).toBe(404);
});

test('POST /posts returns a created post payload', async ({ request }) => {
  const payload = {
    title: 'QA portfolio post',
    body: 'Testing write operation coverage',
    userId: 1,
  };

  const response = await request.post(
    'https://jsonplaceholder.typicode.com/posts',
    { data: payload }
  );

  expect(response.status()).toBe(201);
  expect(response.headers()['content-type']).toContain('application/json');

  const responseBody = await response.json();

  // Validate returned payload shape for a successful create response
  expect(responseBody).toEqual(
    expect.objectContaining({
      ...payload,
      id: expect.any(Number),
    })
  );
});

test('PATCH /posts/1 returns an updated post payload', async ({ request }) => {
  const patchPayload = {
    title: 'Updated QA portfolio title',
  };

  const response = await request.patch(
    'https://jsonplaceholder.typicode.com/posts/1',
    {
      data: patchPayload,
    }
  );

  expect(response.status()).toBe(200);
  expect(response.headers()['content-type']).toContain('application/json');

  const responseBody = await response.json();

  expect(responseBody).toEqual(
    expect.objectContaining({
      id: 1,
      title: patchPayload.title,
    })
  );
});