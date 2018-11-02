const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    id: {
      type: String
    },
    firstName: {
      type: String
    },
    lastName: {
      type: String
    },
    email: {
      type: String
    },
    password: {
      type: String
    },
});

export {
    UserSchema,
}