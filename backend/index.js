const express = require('express');
const dotenv= require('dotenv').config();
const cors=require('cors')
const {mongoose}= require('mongoose')
const cookieParser =require('cookie-parser')
const app=express();
// trying to connect the database with our
mongoose.connect(process.env.MONGO_URL)

.then(()=>console.log("Fortunately the DataBase is  Connected"))
.catch((err)=>console.log("Unfotunately the DataBase is not Connected",err))

//middleware
 app.use(express.json())
app.use(cookieParser());
app.use(express.urlencoded({extended:false}))



app.use('/',require('./routes/authenticationRoute'))

const port =process.env.PORT ||8000;

app.listen(port,()=>console.log(`So the server is running on port ${port}`))

