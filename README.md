# flatten-mongoose-validation-error [![Build Status](https://travis-ci.org/nepente/flatten-mongoose-validation-error.svg?branch=master)](https://travis-ci.org/nepente/flatten-mongoose-validation-error)

> Get an unified messaging from a Schema ValidationError in mongoose.


## Install
```
$ npm install --save flatten-mongoose-validation-error
```

## Usage

```js
const flattenMongooseValidationError = require('flatten-mongoose-validation-error');

const schema = new Schema({
  foo: {
    type: String,
    required: true
  },
  bar: {
    type: String,
    required: true
  }
});

const foo = new FooModel();
foo.save((error) => {
  const message = flattenMongooseValidationError(error);
  console.log(message);
  // Path `foo` is required. Path `bar` is required.

  const messageSeparatedByDash = flattenMongooseValidationError(error, ' - ');
  console.log(message);
  // Path `foo` is required. - Path `bar` is required.
});

```

## API

### flattenMongooseValidationError(err, [separator = ' '])

Returns a `String` with all messages separated by separator.


## License

MIT © [Nepente](http://nepente.io)
