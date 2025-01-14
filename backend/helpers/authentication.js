const bcrypt = require('bcrypt');// here the bycrypt library is implemented for hashing and comparing passwords securely
const hashPassword =(password)=>{
    return new Promise((resolve,reject)=>{
        //callback function has two paramaters
        bcrypt.genSalt(12,(err,salt)=>{// generates a random salt that is a random string is going to be added to the password before trhe hasing is done.The number 12 represents the salt rounds which is the no of iterations and so slows the process
            if(err) {//checks for  error 
                reject(err)
        }

        bcrypt.hash(password,salt,(err,hash) =>{// the hash is the internal mechanism to produce the hashed password of bycrypt
                                  //the resulting hashed password is passed here
            if(err) {
                reject(err);
        }
        resolve(hash);
    })
})

})

}

const comparePassword = (password,hash) => {
    // here the same algo used to hash the final pasword with the new password witht the same algo  used initally
    return bcrypt.compare(password,hash)
}
module.exports ={
    hashPassword,
    comparePassword

}