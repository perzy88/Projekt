const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    viewportHeight:1080, 
    viewportWidth: 1440, 
    chromeWebSecurity: false,
    baseUrl: 'https://www.siepomaga.pl/programista15k-debuguje', 
    watchForFileChanges: false, // sprawia że test się nie przeładowuje automatycznie tylko dopiero jak odświeżymy
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
