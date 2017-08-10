var expect = require('chai').expect;
var tools = require('../lib/tools');

describe('tools', function(){
  describe("printNmae()", function (){
    it('should print the name', function(){
      var result = tools.printName({
        firstName: 'sentayhu',
        lastName: 'Mekoonn',
      });
      expect(result).to.equal('sentayhu, Mekoonn');
    });
  });

  describe('addNumber()', function(){
    it('should add two number ', function(){
      var sum = tools.addNumber(2,2);
      expect(sum).to.equal(4);
    });
  });
});
