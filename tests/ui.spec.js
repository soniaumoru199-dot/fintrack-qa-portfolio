const { test, expect } = require('@playwright/test');

test('valid user can log in and see dashboard', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill('demo@fintrack.test');
  await page.getByLabel('Password').fill('Password123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('heading', { name: 'Dashboard' })).toBeVisible();
  await expect(page.getByText('University fees')).toBeVisible();
});

test('invalid login shows an error', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill('wrong@example.com');
  await page.getByLabel('Password').fill('wrong');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await expect(page.getByRole('alert')).toHaveText('Invalid email or password');
});

test('user can search transactions', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill('demo@fintrack.test');
  await page.getByLabel('Password').fill('Password123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByPlaceholder('Search transactions...').fill('Internet');
  await expect(page.getByText('Internet subscription')).toBeVisible();
  await expect(page.getByText('University fees')).toBeHidden();
});

test('user can add a transaction', async ({ page }) => {
  await page.goto('/');
  await page.getByLabel('Email').fill('demo@fintrack.test');
  await page.getByLabel('Password').fill('Password123!');
  await page.getByRole('button', { name: 'Sign in' }).click();
  await page.getByLabel('Description').fill('Test purchase');
  await page.getByLabel('Amount').fill('5000');
  await page.getByRole('button', { name: 'Add transaction' }).click();
  await expect(page.getByText('Test purchase')).toBeVisible();
  await expect(page.getByRole('status')).toHaveText('Transaction added successfully.');
});
