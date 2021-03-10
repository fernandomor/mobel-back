const { Schema, model } = require('mongoose');

const kitsSchema = new Schema(
  {
    kitName: String,
    kitImage: String,
    kitProducts: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
    kitPrice:Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Kit', kitsSchema);