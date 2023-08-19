const mongoose = require('mongoose');

const ProductSchema= new mongoose.Schema({
    ProductName:String,
    Description:String,
    Image:String,
    //userId:String,
    Price:String,
    Category:String,
    Company:String
});

//matching from the tbl
module.exports = mongoose .model("products",ProductSchema);