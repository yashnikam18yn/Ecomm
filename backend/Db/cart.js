const mongoose = require('mongoose');

const cartSchema= new mongoose.Schema({
    ProductName:String,
    Description:String,
    Image:String,
    //userId:String,
    Price:String,
    Category:String,
    Company:String,
    Productid:String,
    Userid:String,
    Quantity:String
});

//matching from the tbl
module.exports = mongoose .model("carts",cartSchema);