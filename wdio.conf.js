exports.config = {
  runner: 'local',
  specs: ['./specs/**/*.js'],
  exclude: [],
  maxInstances: 1,
  capabilities: [
    {
      browserName: 'chrome'
    }
  ],
  logLevel: 'info',
  deprecationWarnings: true,
  bail: 0,
  baseUrl: 'https://duckduckgo.com',
  waitforTimeout: 999999,
  connectionRetryTimeout: 999999,
  connectionRetryCount: 3,
  services: ['selenium-standalone'],
  framework: 'mocha',
  reporters: ['spec'],
  mochaOpts: {
    ui: 'bdd',
    timeout: 999999
  },
  before: function(capabilities, specs) {
    require('@babel/register');
    var chai = require('chai');
    global.expect = chai.expect;
    chai.Should();
  }
};
