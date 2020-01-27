const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Notifications = new Schema({
  triggerTime:Date,
  registeredTime:String,
  medium:String,
  notificationType:String,
  metaData:Map,
});
module.exports = Users;