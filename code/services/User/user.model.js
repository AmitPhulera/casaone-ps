const mongoose = require("mongoose");
const Schema = mongoose.Schema;

var Users = new Schema({
  userId: Number,
  userName: String
});
module.exports = Users;
