/*// An example configuration file.
exports.config = {
  directConnect: true,

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    'browserName': 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Spec patterns are relative to the current working directory when
  // protractor is called.
  specs: ['calc.js'],

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    defaultTimeoutInterval: 30000
  }
}; */
// to execute in internet explorer use in cmd-> webdriver-manager update --ie
exports.config = {
  seleniumAddress : 'http://localhost:4444/wd/hub',
  specs : ['../specs/ProtoCommerce.js'],

  /*capabilities: {
    'browserName': 'microsoft edge'
  }*/

  onPrepare : function()
  {
    browser.driver.manage().window().maximize();
  }

};
