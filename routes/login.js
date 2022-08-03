var express = require('express');
var router = express.Router();
var userHelpers=require('../helpers/user-helpers')

/* GET user login page */
router.get('/', function(req, res, next) {
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
        if(req.session.loggedIn){
          res.redirect('/home')
        }
        else{
    res.render('user/login',{"loginErr":req.session.loginErr});
            req.session.loginErr=false 
        }
    
});


//check user login

router.post('/loginaccess', function(req, res) {  
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0'); 
userHelpers.doLogin(req.body).then((response)=>{
    if(response.status){
        req.session.loggedIn=true
        req.session.user=response.user
        // console.log(req.session);
        console.log(req.session);
        res.redirect('/home')
    }   else{
        req.session.loginErr=true
        res.redirect('/login')
    
  }
})
});
module.exports = router;


