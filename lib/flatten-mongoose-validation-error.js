module.exports = function flattenMongooseValidationError(error, separator = ' ') {
  if (!error || error.name !== 'ValidationError') {
    return '';
  }
  const keys = Object.keys(error.errors);
  const messages = [];
  for (key of keys) {
    messages.push(error.errors[key].message);
  }

  return messages.join(separator);
};
