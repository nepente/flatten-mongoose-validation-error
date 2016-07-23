const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
  id: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  profile_picture: {
    type: String,
    required: true,
    validate: {
      validator(value) {
        return /[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/
          .test(value);
      },
    },
  },
  full_name: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model('User', userSchema);
