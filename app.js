const express = require('express');
const mongoose = require('mongoose');
const app = express();
const router = require('./routes/tasks');
const methodsOver = require('method-override');

app.use(methodsOver('_method',{methods:['POST','GET']}))

mongoose.connect('mongodb://127.0.0.1:27017/ToDo',{useNewUrlParser: true,useUnifiedTopology: true});

app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended:true})) // Allow to read data from body 
app.use('/',router);

app.listen(3000);