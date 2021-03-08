const { Schema, model } = require('mongoose');

const productSchema = new Schema(
  {
    productName: String,
    inventory: Number,
    productImage: String,
    deliveryTime: String,
    productDescription: String,
    category:{
      type: String,
      enum:["Sillas","Archiveros","Escritorios","Repisas"]
    },
    price: Number
  },
  {
    timestamps: true,
    versionKey: false
  }
);

module.exports = model('Product', productSchema);