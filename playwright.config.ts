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
    // Base URL is optional (I’ll still use full URL in tests for now)
    // baseURL: 'https://demo.playwright.dev/todomvc/',

    // Useful artifacts only when something fails
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',

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

  // Optional: keep outputs in predictable folders
  outputDir: 'test-results',
});