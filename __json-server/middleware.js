module.exports = (req, res, next)=>{
  if(req.method === 'GET' && req.path === '/login'){
    console.log('++++++++++++++++   haha');
    return res.status(200).json({
      user:{
        token: 'fjdkshjkfds123456456'
      }
    })
  }
  next()
}