const headers = require('../service/header');
const httpServe = {
  cors(req,res){
    res.writeHead(200,headers);
    res.end();
  },
  notFound(req,res){
    res.writeHead(404,headers);
    res.write(JSON.stringify({
      status:false,
      message:"錯誤網址"
    }));
    res.end();
  }
}
module.exports = httpServe;