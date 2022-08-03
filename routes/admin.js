var express = require('express');
const { redirect } = require('express/lib/response');

const adminHelpers = require('../helpers/admin-helpers');

var router = express.Router();

//get adminpanel page
 router.get('/',function(req,res,next){
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
     if(req.session.adminloggedIn){
        
     res.redirect('admin/adminpanel')
     }
     else{
         res.render('admin/admin',{"err":req.session.adminloginerr})
         req.session.adminloginerr=false
     }
 })

 //get admin panel page
 router.get ('/adminpanel',  function  (req,res,){
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
          adminHelpers.getUserInfo().then((data) => {
        if(req.session.admin){
     res.render('admin/adminpanel',{data})
        }
        else{
            res.redirect('/admin')
        }
          })
 })

 //admin login
router.post('/adminlogin', (req, res) => {
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
    let email = 'rohitkvvk@gmail.com'
    let passWord = '123456789'
    if (email == req.body.email && passWord == req.body.password) {
      req.session.adminloggedIn = true;
      req.session.admin = req.body;
      console.log(req.session.admin);
res.redirect('/admin/adminpanel');

    } else {
        req.session.adminloginerr=true
      res.redirect('/admin');
     
    }
  })

  //delete a user
  router.get('/delete-user/:id',(req,res)=>{
let userId=req.params.id
adminHelpers.deleteUser(userId).then((data)=>{
    res.redirect('/admin/adminpanel')
})
  })
  

  //GET add a user page
router.get('/adduser',(req,res)=>{
    res.render('admin/adduser')
})

//add a user
router.post('/adduser',(req,res)=>{
    adminHelpers.addUser(req.body).then((response)=>{
        res.redirect('/admin/adminpanel')
    })
})

//GET edit user page
router.get('/edituser/:id',async(req,res)=>{
    let userdata=await adminHelpers.userdetail(req.params.id)
    res.render('admin/edituser',{userdata,err: req.session.editEmailError})
    req.session.editEmailError=null
    })


    //edit user
    router.post('/edituser/:id', (req,res)=>{  
    adminHelpers.userUpdate(req.params.id,req.body).then((response)=>{
        console.log(response.msge);
        res.redirect('/admin/adminpanel')
    }).catch((error)=>{
        req.session.editEmailError=error.msge
        res.redirect('/admin/edituser/'+id)
    })
})

//admin logout
router.get('/adminlogout',(req,res)=>{
    req.session.destroy()
    res.redirect('/admin')
})

module.exports = router;