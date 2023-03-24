const mongoose = require('mongoose');

const schema = new mongoose.Schema({
    title:{
        type:String ,
        required:true
    }
});// Creat Collection

module.exports = mongoose.model('Task',schema); 