var express = require('express');
var router = express.Router();
const userHelpers = require('../helpers/user-helpers');



/* GET user sign up page. */
router.get('/', function(req, res) {
  if(req.session.loggedIn){
    res.redirect('/home')
  }else{
  res.render('user/index',{signupErr:req.session.signupErr});
  // req.session.signupErr=null
  }
});


router.post('/signup',function(req,res){
  userHelpers.doSignup(req.body).then((response)=>{
res.redirect('/login')  
    // if(response.status){
    //   // console.log(response.msg);
    // }
    // else{
    //   res.redirect('/login')
    // }
    
  }).catch((error)=>{
    let errorMsg =error.err
    req.session.signupErr=errorMsg
    res.redirect('/')
    console.log(errorMsg);
  })


})



module.exports = router;
