const { Schema, model } = require('mongoose');

const userSchema = new Schema(
  {
    email: String,
    name: String,
    address: [
        {
            street: String,
            number: Number,
            colonia: String,
            cp: Number,
            city: String
        }
    ],
    phone: Number,
    tokerCard: String,
    userRole: {
      type: String,
      default: 'user'
  },
    passwordHash : String
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('User', userSchema);