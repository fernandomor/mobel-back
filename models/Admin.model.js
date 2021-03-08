const { Schema, model } = require('mongoose');

const adminSchema = new Schema(
  {
    email: String,
    passwordHash: String,
    userRole: {
      type: String,
      default: 'admin'
  },
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Admin', adminSchema);