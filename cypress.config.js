const { defineConfig } = require("cypress");

module.exports = defineConfig({

  "watchForFileChanges": false,
  "projectId": "81umr2",
  "chromeWebSecurity": false,
  "defaultCommandTimeout": 30000,
  "numTestsKeptInMemory": 1,
  
  // retries: {
  //   runMode: 2,
  //   openMode: 2,
  // },

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },

    // experimentalSessionAndOrigin: true

  },
  
}); 
