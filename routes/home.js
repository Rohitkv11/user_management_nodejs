var express = require('express');
const { redirect } = require('express/lib/response');
// const { render } = require('../app');
var router = express.Router();

/* GET user home page. */
router.get('/', function(req, res, next) {
    res.header('Cache-Control','no-cache,private,no-store,must-revalidate,max-stale=0,post-check=0,pre-check=0');
  let product=[
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },{image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
    title:'vivo v21',
    description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
    Price:29900,
    EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
},
{image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    },
    {image:'https://www.reliancedigital.in/medias/iPhone-11-64GB-Green-491901643-i-4-1200Wx1200H?context=bWFzdGVyfGltYWdlc3w2NDQ1OHxpbWFnZS9qcGVnfGltYWdlcy9oODYvaDRmLzk0MjE5MTYxNzY0MTQuanBnfDEyYzU5YzU2ODU3MmMzMjIzNjliMzQwMmVkNjUzNzQ4OGE1ZWI3OTE0ZDIwN2UxMWEwNThmZGQzYmY1MWFiNjg',
        title:'vivo v21',
        description:'Vivo V21 5G (Arctic White, 8GB RAM, 128GB Storage) with No Cost EMI/Additional Exchange Offers',
        Price:29900,
        EMIOption :'EMI starts at ₹1,412. No Cost EMI available' 
    }
]
//   var user=req.session.user
    // console.log(user);
    if(req.session.loggedIn){
  res.render('user/home',{product});
    }
    else{
       res.redirect('/login')
    }
});
router.get('/logout',(req,res)=>{
  req.session.destroy();
  res.redirect('/login')
  })
 
module.exports = router;
