const { test, expect } = require('@playwright/test');

test('health endpoint returns OK', async ({ request }) => {
  const response = await request.get('/api/health');
  expect(response.ok()).toBeTruthy();
  expect(await response.json()).toEqual({ status: 'ok' });
});

test('transactions endpoint returns transaction records', async ({ request }) => {
  const response = await request.get('/api/transactions');
  expect(response.ok()).toBeTruthy();
  const body = await response.json();
  expect(Array.isArray(body)).toBeTruthy();
  expect(body.length).toBeGreaterThan(0);
  expect(body[0]).toHaveProperty('description');
  expect(body[0]).toHaveProperty('amount');
});

test('login API rejects invalid credentials', async ({ request }) => {
  const response = await request.post('/api/login', { data: { email:'bad@example.com', password:'wrong' } });
  expect(response.status()).toBe(401);
  expect((await response.json()).error).toBe('Invalid email or password');
});
