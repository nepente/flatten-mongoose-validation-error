module.exports = function flattenMongooseValidationError(validationError, separator = ' ') {
  if (!validationError || validationError.name !== 'ValidationError') {
    return '';
  }
  const keys = Object.keys(validationError.errors);
  const messages = [];
  for (key of keys) {
    messages.push(validationError.errors[key].message);
  }

  return messages.join(separator);
};
