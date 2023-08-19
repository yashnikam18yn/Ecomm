const mongoose = require('mongoose');

const userSchema= new mongoose.Schema({
    name:String,
    //username:String,
    email:String,
    password:String,
    mobile:String,
    address:String
    
});

//matching from the tbl
module.exports = mongoose .model("user_signups",userSchema);