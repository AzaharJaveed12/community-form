var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');

const {notFound,errorHandeler} =require('./middleware/index');
var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());



//our route will be placed here...
app.get('/',(req,res)=>{
   res.json({
      message:'welcome to community API..!!',
      name:'Javeed did this..!!'
   });
});

app.use(notFound);
app.use(errorHandeler); 




module.exports = app;
