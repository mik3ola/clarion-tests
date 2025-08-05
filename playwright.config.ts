import { defineConfig } from '@playwright/test';
import dotenv from 'dotenv';

dotenv.config(); // Load .env variables at runtime

export default defineConfig({
  testDir: './tests',
  timeout: 30000,
  retries: 1,
  use: {
    headless: false,
    baseURL: process.env.BASE_URL,
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
    trace: 'retain-on-failure',
    viewport: { width: 1280, height: 720 }
  }
});
