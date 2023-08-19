const express = require("express")
const cors=require("cors");
const multer=require("multer");
//const mongoose =require('mongoose');
require('./Db/config');
const user_signup = require('./Db/user_signup');
const Product = require("./Db/Product");
const cart=require("./Db/cart");
const checkout = require("./Db/checkout");



const app =express()

app.use(express.json());
app.use(cors());


//register 
app.post("/register", async(req,resp)=>{
    let user_signups = new user_signup(req.body);
    let result= await user_signups.save();
    resp.send(result);
})

//login route
app.post("/login",async (req,resp)=>{
   // let user= await user_signup.findOne(req.body).select("-password");
    let user= await user_signup.findOne(req.body)
    if(req.body.password && req.body.email)
    {
        if(user)
        {
        resp.send(user)
        }
        else{
            resp.send({result:"No user found"});
        }
   }
    else{
        resp.send({result:"No user found"});
    }
})


//insert product into database
app.post("/add-product",async (req,resp)=>{
    let product=new Product(req.body);
    let result=await product.save();
    resp.send(result);
})

//const PORT = 5000
/*
const connectDB = async ()=>{
    mongoose.connect("mongodb://localhost:27017/e-commerce");
}
*/
/*
app.get("/",(req,res)=>{
    res.send("Hello From Root side")
})
*/
/*
app.listen(PORT , ()=>{
    console.log("serVer started");
})*/

//fetch product data so we use an get method

// app.get("/products",async(req,resp)=>{
//     let products= await Product.find();
//     resp.send(products);
    
// })

app.get("/products",async(req,resp)=>{
    let products= await Product.find();
    resp.send(products);
})

app.delete("/product/:id",async (req,resp)=>{
    //resp.send("Working.......");
    //resp.send(req.params.id);
    const result= await Product.deleteOne({_id:req.params.id});
    resp.send(result)
});



app.get("/search/:key",async(req,resp)=>{
    let result=await Product.find({
        "$or":[
            {ProductName:{$regex:req.params.key}},
            {Company:{$regex:req.params.key}}
        ]
    });
    resp.send(result)
});

app.get("/product/:id",async(req,resp)=>{
     let result=await Product.findOne({_id:req.params.id});
     if(result)
     {
        resp.send(result)
     }else{
        resp.send({result:"No record found"});
     }
});


//edit product
app.put("/product/:id", async(req,resp)=>{
    let result=await Product.updateOne(
        {_id:req.params.id},
        {
          $set : req.body  
        }
    )
    resp.send(result);
});


//product details 

app.get("/pordet/:id",async(req,resp)=>{
    let result=await Product.findOne({_id:req.params.id});
    if(result)
    {
        resp.send(result);
    }else
    {
        resp.send({result:"No record found"});
    }
});

app.post("/add-cart",async (req,resp)=>{
    let data=new cart(req.body);
    let result=await data.save();
    resp.send(result);
})


app.get("/add-card/:id",async(req,resp)=>{
    let result=await cart.find({Userid:req.params.id});
    if(result)
    {
        resp.send(result);
    }else
    {
        resp.send({result:"No record found"});
    }
});


app.delete("/add-card/:id",async(req,resp)=>{
    // const result= await cart.deleteOne({_id:req.params.id});
    const result= await cart.deleteOne({Productid:req.params.id});
    resp.send(result)
   // resp.send(req.params.id);

});

app.post("/check-out",async(req,resp)=>{
    let data=new checkout(req.body);
    let result=await data.save();
    resp.send(result);
});

app.get("/order-now/:id",async(req,resp)=>{
    let result=await checkout.find({Userid:req.params.id});
    if(result)
    {
        resp.send(result);
    }else
    {
        resp.send({result:"No record found"});
    } 
});

app.delete("/order-now/:id",async(req,resp)=>{
    const result= await checkout.deleteOne({Productid:req.params.id});
    resp.send(result)
});




app.listen(5000);