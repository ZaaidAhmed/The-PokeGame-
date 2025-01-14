const express= require('express');//core framework used to create the server. Simplifies the creation of HTTP (Hypertest Transfer Protocol)servers

const router= express.Router();
const cors=require(`cors`)
const {test,registerUser,loginUser,getProfile} =require('../controllers/authenticationController')


//Middleware
router.use(
    cors({ credentials: true, origin: 'http://localhost:5173' })
  );

router.get('/',test)
router.post('/register',registerUser)
router.post('/login',loginUser)
router.get('/profile',getProfile)
module.exports=router
