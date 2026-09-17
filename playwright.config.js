const { defineConfig } = require('@playwright/test');
module.exports = defineConfig({
  testDir: './tests',
  use: { baseURL: 'http://127.0.0.1:3000', headless: true },
  webServer: { command: 'node app/server.js', url: 'http://127.0.0.1:3000', reuseExistingServer: true }
});
