const httpControllers = require('../controllers/https');
const postsControllers = require('../controllers/posts')
const router =(req,res)=>{
  let body = '';
  const {url, method} = req;
  req.on('data',chunk=>body += chunk);
  if(url==='/rooms' && method==='GET'){
    postsControllers.getPosts(req,res);
  }else if(url==='/rooms' && method==='POST'){
    postsControllers.createPosts(req,res,body,'資料格式錯誤')
  }else if(method === 'OPTIONS'){
    httpControllers.cors(req,res)
  }else if(url==='/rooms'&&method==='DELETE'){
    postsControllers.deleteManyPosts(res)
  }else if(url.startsWith('/rooms/')&&method==='DELETE'){
    const id = url.split('/').pop();
    postsControllers.deleteManyPosts(res, id)
  }else if(url.startsWith('/rooms/')&&method==='PATCH'){
    const id = url.split('/').pop();
    postsControllers.patchPosts({res,id,body})
  }else{
    httpControllers.notFound(req,res)
  }
}
module.exports = router