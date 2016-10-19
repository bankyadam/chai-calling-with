'use strict';

module.exports = function(chai, utils) {
  const Assertion = chai.Assertion;

  const wrapObject = function() {
    const obj = utils.flag(this, 'object');
    const args = Array.from(arguments);

    utils.flag(this, 'object', function() {
      return obj.apply(null, args);
    });
  };

  Assertion.addProperty('when', function() { return this; });
  Assertion.addProperty('calling', wrapObject);
  Assertion.addChainableMethod('callingWith', wrapObject);
};
