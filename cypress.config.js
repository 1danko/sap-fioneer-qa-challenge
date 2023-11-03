const { defineConfig } = require("cypress");

module.exports = defineConfig({
  chromeWebSecurity: false,
  "reporter": "mochawesome",
  "reporterOptions": {
    "useInLineDiffs": true,
    "embeddedScreenshots": true,
    "reportDir": "cypress/results",
    "reportFilename": "[name].html",
    "overwrite": true,
    "html": true,
    "json": true,
  },
  e2e: {
    baseUrl: "https://www.sapfioneer.com",
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
