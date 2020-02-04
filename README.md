chai-calling-with
=================

> Readable way for testing exceptions for [Chai](http://chaijs.com)

## Installation

Install using [npm](https://www.npmjs.org/):

```sh
npm install chai-calling-with
```

## Setup
```javascript
var chai = require('chai');
chai.use(require('chai-calling-with'));
```

## Assertions

### .calling

```javascript
expect(myFunction).when.calling.to.throw;

myFunction.should.calling.throw;
```

### .callingWith

```javascript
expect(myFunction).when.callingWith('foo', 'bar').to.throw;

myFunction.should.callingWith('foo', 'bar').throw;
```

## Contributing

Please submit all issues and pull requests to the [bankyadam/chai-calling-with](https://github.com/bankyadam/chai-calling-with) repository!

## Tests

Run tests using `npm test`.

## Support

If you have any problem or suggestion please open an issue [here](https://github.com/bankyadam/chai-calling-with/issues).
