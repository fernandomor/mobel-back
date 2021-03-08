const { Schema, model } = require('mongoose');

const orderSchema = new Schema(
  {
    selectedProducts:[{ type: Schema.Types.ObjectId, ref: 'product' }],
    orderNumber: Number,
    emailUser:String,
    total: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Order', orderSchema);