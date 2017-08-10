const expect = require('chai').expect;
const nock = require('nock');

const tools = require('../lib/tools');

describe('tools', () => {
  describe('printNmae()', () => {
    it('should print the name', () => {
      const result = tools.printName({
        firstName: 'sentayhu',
        lastName: 'Mekoonn',
      });
      expect(result).to.equal('sentayhu, Mekoonn');
    });
  });

  describe('addNumber()', () => {
    it('should add two number ', () => {
      const sum = tools.addNumber(2, 2);
      expect(sum).to.equal(4);
    });
  });

  describe('loadwiki', () => {
    // this.timeout(5000);
    // Mocha HOOKS, before we run the test
    before(() => {
      // Create a Mock webserver for wikipedia
      nock('https://en.wikipedia.org')
        .get('/wiki/Abraham_Lincoln')
        .reply(200, 'Mock Abrham Lincoln Page');
    });

    it('load Abraham Lincoln page', (done) => {
      tools.loadMyPage({ firstName: 'Abraham', lastName: 'Lincoln' }, (html) => {
        expect(html).to.equal('Mock Abrham Lincoln Page');
        done();
      });
    });
  });
});
