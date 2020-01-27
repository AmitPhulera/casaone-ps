const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const OrderSchema = new Schema({
  productId:Number,//mongoose.ObjectId,
  userId:Number,//mongoose.ObjectId,
  orderTime: {
      type:Date,
      default:Date.now,
  },
  ratings: {
      type:Number,
      default:null,
      min:0,
      max:5
  }
});
const Orders = mongoose.model("Orders",OrderSchema)
module.exports = Orders;