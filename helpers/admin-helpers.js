var db = require("../config/connection");
var collection = require("../config/collections");
const async = require("hbs/lib/async");
const bcrypt=require('bcrypt')
var objectId = require('mongodb').ObjectId
module.exports = {
    // getAllusers: () => {
    //     return new Promise(async (resolve, reject) => {
    //         let userInfo = await db
    //             .get()
    //             .collection(collection.USER_COLLECTION)
    //             .find()
    //             .toArray();
    //         resolve(userInfo);
    //     });
    // },
    getUserInfo:()=>{
        return new Promise(async(resolve,reject)=>{
            let usersinfo = await db. get().collection(collection.USER_COLLECTION).find().toArray()
            // console.log(usersinfo);
            resolve(usersinfo)
        })
    },
    deleteUser:(userId)=>{
        return new Promise((resolve,reject)=>{
 db.get().collection(collection.USER_COLLECTION).deleteOne({_id:objectId(userId)}).then((response)=>{
    // console.log(data);
resolve(response)
});
        });
    },
    addUser:(data)=>{
        return new Promise( async (resolve,reject)=>{
            data.password=await bcrypt.hash(data.password,10)
            db.get().collection(collection.USER_COLLECTION).insertOne(data).then((response)=>{
                resolve(response)
            })
        })
    },
    userdetail:(data)=>{
        return new Promise ((resolve,reject)=>{
db.get().collection(collection.USER_COLLECTION).findOne({_id:objectId(data)}).then((user)=>{
    resolve(user)
})
        })
    },
    userUpdate:(userId,userDetail)=>{
        return new Promise((resolve,reject)=>{
        db.get().collection(collection.USER_COLLECTION).updateOne({_id:objectId(userId)},
        {$set:{name:userDetail.name,
            email:userDetail.email}})
        .then(()=>{
            resolve({status:true,msge:"Edited successfully"})
        }).catch(()=>{
            reject({status:false,msge:"email already exist"})
        })
    })
    }
}
