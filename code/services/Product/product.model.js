const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Products = new Schema({
  productId:Number,
  name:String,
});
module.exports = mongoose.model('Products', Products);