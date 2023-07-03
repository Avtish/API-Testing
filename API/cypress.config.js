const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://api.tmsandbox.co.nz",
        defaultCommandTimeout: 10000,
        video: false,
        screenshotOnRunFailure: true,

    setupNodeEvents(on, config) {
    },
  },
});