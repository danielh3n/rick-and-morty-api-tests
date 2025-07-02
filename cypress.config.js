const { defineConfig } = require('cypress');

module.exports = defineConfig({
  e2e: {
    baseUrl: 'https://rickandmortyapi.com/api',
    setupNodeEvents(on, config) {
      // implement node event listeners here if needed
    },
    specPattern: 'cypress/e2e/api/**/*.spec.js',
  },
});
