const mongoose = require('mongoose');

const checkout= new mongoose.Schema({
    
    email:String,
    mobile:String,
    address:String,
    Userid:String
    
});

//matching from the tbl
module.exports = mongoose .model("orders",checkout);