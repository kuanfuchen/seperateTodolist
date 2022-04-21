const handleSuccess = require('../service/handleSuccess');
const handleError = require('../service/handleError');
const Rooms = require('../model/rooms');
const posts = {
  async getPosts({req,res}){
    const data = await Rooms.find();
    handleSuccess(res,data)
  },
  async createPosts({req,res,body,info}){
    req.on('end',async()=>{
      try{
        const room = JSON.parse(body)
        if(room.name){
          const dataPost =await Rooms.create(room);
          handleSuccess(res,dataPost)
        }else{
          handleError(req,res,info)
        }
      }catch{
        handleError(req,res,info)
      }
      
    })
  },
  async deleteManyPosts(res){
    await Rooms.deleteMany({});
    handleSuccess(res,[]);
  },
  async deleteOnePosts({res,id}){
    await Rooms.findByIdAndDelete({_id:id});
    handleSuccess(res,'資料已刪除')
  },
  async patchPosts(req,res,id,body){
    req.on('end',async()=>{
      try{
        const room = JSON.parse(body)
        if(room.name){
          const data = await Rooms.findByIdAndUpdate({_id:id},body,{new:true});
          handleSuccess(res,data)
        }else{
          handleError(req,res,'格式錯誤')
        }
        
      }catch{
        handleError(req,res,'網頁格式錯誤')
      }
      
    })
  }
}
module.exports = posts;