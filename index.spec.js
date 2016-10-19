'use strict';

const chai = require('chai');
chai.should();
chai.use(require('./'));

describe('chai-calling-with', function() {
  const thisThrows = function() { throw new Error(); };
  const thisNotThrows = function() {};


  describe('framework', function() {

    describe('calling', function() {

      context('expect', function() {
        it('passes for a function', function() { chai.expect(thisThrows).calling.to.throw; });
        it('passes "not" for a function', function() { chai.expect(thisNotThrows).calling.not.to.throw; });
      });


      context('should', function() {
        it('passes for a function', function() { thisThrows.should.calling.throw; });
        it('passes "not" for a function', function() { thisNotThrows.should.calling.not.throw; });
      });

    });


    describe('callingWith', function() {

      context('expect', function() {
        it('passes for a function', function() { chai.expect(thisThrows).callingWith().to.throw; });
        it('passes "not" for a function', function() { chai.expect(thisNotThrows).callingWith().not.to.throw; });
      });


      context('should', function() {
        it('passes for a function', function() { thisThrows.should.callingWith().throw; });
        it('passes "not" for a function', function() { thisNotThrows.should.callingWith().not.throw; });
      });

    });


    describe('.when', function() {
      it('passes for a function', function() { chai.expect(thisThrows).when.calling.to.throw; });
    });

  });

});
