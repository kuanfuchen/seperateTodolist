const routes = require('./routes');

require('./collections');
const app = async(req,res)=>{
  routes(req,res);
}
module.exports = app