const mongoose = require('mongoose');
const dotenv = require('dotenv');
dotenv.config({path:'./config.env'})
const db = process.env.DATABASE.replace('<password>',process.env.DATABASE_KEY);
mongoose.connect(db)
  .then(()=>console.log('資料庫已連結'))
  .catch(()=>console.log('連接失敗'));
// 'mongodb://localhost:27017/hotel'