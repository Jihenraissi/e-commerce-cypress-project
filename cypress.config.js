const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: 'yyqu51',
  video: false,
  retries: {
    runMode: 2,
    openMode: 0
  },
  reporter: 'mochawesome',
  reporterOptions: {
    reportDir: 'cypress/reports',
    overwrite: false,
    html: true,
    json: true
  },
  e2e: {
    baseUrl: "https://www.demoblaze.com/",
    viewportWidth: 1440,
    viewportHeight: 900,
    defaultCommandTimeout: 8000,
    setupNodeEvents(on, config) {
    },
  },
});