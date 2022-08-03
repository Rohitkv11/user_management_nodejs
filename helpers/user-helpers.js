var db=require('../config/connection')
var collection=require('../config/collections')
const bcrypt=require('bcrypt')
const collections = require('../config/collections')
module.exports={
    doSignup:(userData)=>{  
return new Promise(async(resolve,reject)=>{ 
    // let user=db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
           
            var user= await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
          if(user){
              reject({status:false, err:"email already exist"})
          }
          else{
            userData.password=await bcrypt.hash(userData.password,10)
            userData.confirm_password=await bcrypt.hash(userData.password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(userData).then((data)=>{
        resolve({status:true})
            })
        }
        })
},
    doLogin:(userData)=>{
        // console.log(userData);
 return new Promise(async (resolve,reject)=>{
            let loginStatus=false
            let response={}
            let user=await db.get().collection(collection.USER_COLLECTION).findOne({email:userData.email})
            if(user){
                bcrypt.compare(userData.password,user.password).then((status)=>{
                    if(status){
                        // console.log("login success");
                        response.user=user
                        response.status=true
                        resolve(response)
                    }else{
                        // console.log("login failed");
                        resolve({status:false})   
                    }
})
            }else{
                // console.log("login denied");
                resolve({status:false})
            }
        })
    },
}