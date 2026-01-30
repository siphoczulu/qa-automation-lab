import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests',

  // Gives each test a reasonable max time
  timeout: 30_000,

  // Expect() assertions get their own timeout
  expect: {
    timeout: 5_000,
  },

  // CI is noisier/flakier → allow retries there only
  retries: process.env.CI ? 2 : 0,

  // Keep CI stable: to avoid running too many browsers in parallel
  workers: process.env.CI ? 1 : undefined,

  // Nice output locally; HTML report to inspect when needed
  reporter: [['list'], ['html', { open: 'never' }]],

  use: {
    // All tests run against this base URL
    baseURL: process.env.BASE_URL || 'https://demo.playwright.dev/todomvc/',

    // Useful artifacts only when something fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'on-first-retry',

    // Default for stability
    actionTimeout: 10_000,
    navigationTimeout: 30_000,
  },

  // Run on Chromium by default (closest to CI + most stable)
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },
  ],

  // Optional: to keep outputs in predictable folders
  outputDir: 'test-results',
});