exports.config = {
  tests: './tests/js/*_test.js',
  output: './tests/output',
  helpers: {
    Puppeteer: {
      chrome:  {"args": [ "--no-sandbox" ]},
      restart: false,
      url: 'http://terance.grey-wing.com:9090',
      show: true
    }
  },
  include: {
    loginPage: './tests/js/pages/loginPage.js',
  },
  bootstrap: null,
  mocha: {},
  name: 'login-tests'
}