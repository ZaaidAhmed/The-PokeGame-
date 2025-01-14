const mongoose = require('mongoose');// MongoDB object modellingg tool for Nodejs. Simplifying the management of ata and operation
const {Schema} =mongoose// so in Mongoose schema is used to define the structure of the documents 
// // Here the schema is is being destructured from the mongoose object so the code can be used directly instead of using mongoose.Sche3ma everytime we use it

const userSchema = new Schema({
    name:  String,// type of  name is String field
    email:{
        type:String,
        unique:true// this is used to ensure that no two users share the same email address 
    },
    password:String })


    const  UserModel=mongoose.model('User',userSchema );
    //                             user is the model name
                                   //User creates a mongoose model based on the userSchema 
                                        //userSchema is the schema of the documents in the users collectuns
module.exports=UserModel;
// This module.exports is used to ensure it ca be used to interact with the users collection in the MongDB daasdr as well as routes or controllers