const mongoose = require('mongoose');
const schema =new mongoose.Schema({
  name:String,
  price:{
    type:Number,
    required:[true,'缺少價碼']
  },
  rating:Number
},{
  versionKey:false
});
const Rooms = mongoose.model('Room',schema) 
module.exports = Rooms;