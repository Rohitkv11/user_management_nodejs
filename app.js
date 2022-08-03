var createError = require('http-errors');
var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
var db=require('./config/connection')
var MongoClient=require('mongodb').MongoClient
var session=require('express-session')


var indexRouter = require('./routes/index');
var loginRouter = require('./routes/login');
var homeRouter = require('./routes/home');
var adminRouter = require('./routes/admin')
var app = express();


// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'hbs');

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret:"key",resave:false,saveUninitialized:true,cookie:{maxAge:600000}}))
db.connect((err)=>{
  if(err)
  console.log("not connected to port");
  else
  console.log("connected succesfully to port ");
})

// app.use((req,res,next)=>{
//   res.set('Cache-Control','no-store')
//   next()
// })


app.use('/', indexRouter);
app.use('/login',loginRouter);
app.use('/home', homeRouter);
app.use('/admin', adminRouter);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});
module.exports = app;
