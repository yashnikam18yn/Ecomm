import React from 'react'
import { useParams } from 'react-router-dom'
import { useEffect,useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ShopIcon from '@mui/icons-material/Shop';
import Footer from './Footer';



export default function ProductDetail() {

  const [products, setProducts] = useState([]);
  const [Quantity,setquantity]=useState(1);
  const params=useParams();


  useEffect(()=>{ 
     //console.log("id of product is",params.id);
     getProductDetail();
    
},[]);

       
     const getProductDetail=async()=>{
           let result=await fetch(`http://localhost:5000/pordet/${params.id}`);
             result=await result.json();
             setProducts(result);
             //console.log(result.ProductName);
     }
 
     const incresequantity=()=>{

      const qty=Quantity+1;
      if(qty<=10)
      {
        setquantity(qty);
      }
      
     }

     const decresequantity=()=>{
      const qty=Quantity-1;
      if(qty>=1)
      {
        setquantity(qty);
      }
     }

     const addTocart=async()=>{

      
         
      let result=await fetch(`http://localhost:5000/pordet/${params.id}`);
      result=await result.json();

      let user=localStorage.getItem('user');
      let userobj=JSON.parse(user);
      //console.log(userobj);
   
      let userid=userobj._id;
      //console.log(userid);

     
      let ProductName=result.ProductName;
      let Description=result.Description;
      let Image=result.Image;
      let Price=result.Price;
      let Category=result.Category;
      let Company=result.Company;
      let Productid=result._id
    
      let Userid=userid;
      
    

      let cartdata = await fetch('http://localhost:5000/add-cart', {
            method: "post",
            body: JSON.stringify({ ProductName,Description,Image,Price,Category,Company,Productid,Userid,Quantity }),
            headers: {
                'Content-Type': 'application/json'
            }
        
      
        });
        alert("Cart Addedd!!!!!!!");
      
        // let userData= user && JSON.parse(user)[0];
        // this.uId=userData.id;
        
        // console.log(userData)
        // let result= await fetch(`http://localhost:5000/pordet/${params.id}`);
        // result = await result.json();
        // //setProducts(result);
        // console.warn(result);
        // let cartData={
            
        //     ...result,
        //     Productid:params._id,
        //     Userid:this.uId
                    
        // }
        // delete cartData.id;
        // console.log(cartData);
  
     }


  return (
    <div>
      <div class="row product-details" >
    <div class="col-sm-6">
    <img className='product-img'  src={products.Image} alt="..." />
    </div>
    <div class="col-sm-6 details" >
        <div class="product-details">
            <h1>{products.ProductName}</h1>
            <h3>Price :<CurrencyRupeeIcon/> {products.Price}</h3>

            <h6>Category : {products.Category}</h6>
            <h6>Company : {products.Company}</h6>
            <p className='prodeldec'>Description : {products.Description}</p>
            {/* <button style={{borderRadius:"1rem"}} className='buy'> <Link className="nav-link"  to={"/add-card/"+products._id}>Add Cart<ShoppingCartIcon/></Link></button>  */}
            <button style={{borderRadius:"1rem"}} className='buy' onClick={addTocart}>Add Cart<ShoppingCartIcon/></button>
            <button style={{borderRadius:"1rem"}} class="buy">Buy<ShopIcon/></button>
            <div class="quantity-group">
                 <button  onClick={decresequantity}><RemoveIcon/></button> 
                 <input readOnly  type='integer' value={Quantity} onChange={(e) => { setquantity(e.target.value) }}/>
                 <button onClick={incresequantity}><AddIcon/></button>
            </div>
        </div>
   </div>
</div>
<Footer/>
    </div>
  )
}
