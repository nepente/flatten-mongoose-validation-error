const { expect } = require('chai');
const flattenMongooseValidationError = require('../');
const userSchema = require('./user-schema');

describe('Flatten mongoose EalidationError', () => {
  it('should be empty string when error is null', (done) => {
    try {
      const message = flattenMongooseValidationError(null);
      expect(message).to.be.equal('');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should be empty string when error is not a instance of ValidationError', (done) => {
    try {
      const message = flattenMongooseValidationError(new Error());
      expect(message).to.be.equal('');
      done();
    } catch (err) {
      done(err);
    }
  });

  it('should return error message', (done) => {
    try {
      const user = new userSchema();
      user.save((error) => {
        const message = flattenMongooseValidationError(error);
        expect(message).to.be.equal('Path `full_name` is required. Path `profile_picture` is required. Path `username` is required. Path `id` is required.');
        done();
      });
    } catch (err) {
      done(err);
    }
  });

  it('should return error message separated by separator', (done) => {
    try {
      const user = new userSchema();
      user.save((error) => {
        const message = flattenMongooseValidationError(error, ' * ');
        expect(message).to.be.equal('Path `full_name` is required. * Path `profile_picture` is required. * Path `username` is required. * Path `id` is required.');
        done();
      });
    } catch (err) {
      done(err);
    }
  });
});
