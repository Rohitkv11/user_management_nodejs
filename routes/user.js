// var express = require('express');
// const { response } = require('../app');
// var router = express.Router();
// const userHelpers = require('../helpers/user-helpers');



// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index');
// });


// router.post('/signup',function(req,res){
//   userHelpers.doSignup(req.body).then((response)=>{
//     let errorMsg =response.msg
//     if(response.status){
//       console.log(response.msg);
//     }
//     else{
//       res.redirect('/login')
//     }
    
//   })

// //   .then((response)=>{
// // console.log(response);
//   // })
  

//   // console.log(req.body);
//   // MongoClient.connect('mongodb://localhost:27017',(err,client)=>{
//   //   if(err)
//   //   console.log("error");
//   //   else
//   //  client.db('create').collection('inst').insertOne(req.body) 
//   // })
//   // res.send("successfull")
// })

// router.get('/loginalready',(req,res)=>{
//   res.render('login')
// })


// //login
// /* GET users listing. */
// router.get('/login', function(req, res, next) {
//     // let usersession=req.session.user
//     // res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
//         if(req.session.loggedIn){
//           res.redirect('/home')
//         }
//         else{
//     res.render('login',{"loginErr":req.session.loginErr});
//             req.session.loginErr=false 
//         }
    
// });




// router.post('/loginaccess', function(req, res) {
//     // res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');   
// userHelpers.doLogin(req.body).then((response)=>{
//     if(response.status){
//         req.session.loggedIn=true
//         req.session.user=response.user
//         // console.log(req.session);
//         res.redirect('/home')
//     }   else{
//         req.session.loginErr=true
//         res.redirect('/login')
    
//   }
// })
// });
// module.exports = router;