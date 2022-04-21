const headers = require('./header')
const handleError = (res,error,info)=>{
  res.writeHead(error,headers);
  res.write(JSON.stringify({
    status:false,
    message:info
  }))
  res.end();
};
module.exports = handleError;