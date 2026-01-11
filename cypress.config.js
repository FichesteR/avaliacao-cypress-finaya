const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://www.saucedemo.com',
    screenshotOnRunFailure: true,
    video: true,
    setupNodeEvents(on, config) {
      on('after:screenshot', (details) => {
        console.log('📸 Screenshot gerado:', details.path);
      });

      return config;
    },
  },
});
