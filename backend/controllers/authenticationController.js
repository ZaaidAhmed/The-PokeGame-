const User =require('../models/user') // imports the user module .This model is responsible for defining the schema and structure for the user data
const {hashPassword,comparePassword} =require('../helpers/auth')
const jwt=require('jsonwebtoken');
const test=(req,res) =>{
    res.json('Test is working')
}

//Register Endpoint

const registerUser = async (req, res) => {
    try {
      const { name, email, password } = req.body;
  
      // Validate input
      if (!name) {
        return res.json({ error: 'Name is required' });
      }
      if (!password || password.length < 6) {
        return res.json({ error: 'Password should be more than 5 characters' });
      }
  
      // Check if user already exists
      const exist = await User.findOne({ email });
      if (exist) {
        return res.json({ error: 'Email already exists' });
      }
  







const hashedPassword= await hashPassword(password)

      // Create new user
      const user = await User.create({ name, email, password:hashedPassword, });
  
      return res.json({
        message: 'User registered successfully',
        user: { name: user.name, email: user.email ,id:user._id}
      });
    } catch (err) {
      console.log(err);
      res.json({ error: 'Something went wrong. Please try again.' });
    }
  };

  //Login endpoint 
  const loginUser = async(req, res) => {
    try {
      const { email, password } = req.body;
      //Check if the user exists
      const user=await User.findOne({email});
      if(!user){
        return res.json({error: 'User not found'});
      }
      //Compare the password
      const match=await comparePassword(password,user.password);
    if(match){
      jwt.sign({email: user.email, id: user._id,name: user.name},process.env.JWT_SECRET,{},(err,token)=>
    res.cookie('token',token).json(user)  )
    
    }
    if(!match){
      res.json({
        error: 'Password does not match'
      })
    }
    
    } catch (error) {
      console.log(error)
    }
  }




  const getProfile=(req,res)=>{
const {token} =req.cookies
if(token){
  jwt.verify(token,process.env.JWT_SECRET,{},(err,user)=>{
    if(err) throw err;
      res.json(user)
  })
}else{
  res.json(null)
}
  }

module.exports={
    test,
    registerUser,
    loginUser,
    getProfile
}