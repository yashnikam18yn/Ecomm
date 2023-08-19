import React from 'react';
import DeleteIcon from '@mui/icons-material/Delete';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import DiscountIcon from '@mui/icons-material/Discount';

import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from './Footer';


export default function Cart() {
    const [products, setProducts] = useState([]);
    //const [total,settotal]=useState(0);
    
    //const params = useParams();

    useEffect(() => {
        //console.log("id of product is", params.id);
        getCartpro();

    }, []);

    
    
    const getCartpro = async () => {
        let user=localStorage.getItem('user');
        let userobj=JSON.parse(user);
      //console.log(userobj);
   
        let userid=userobj._id;
        let result= await fetch(`http://localhost:5000/add-card/${userid}`);
        result=await result.json();
        setProducts(result);
    }
    
     
    const totalPrice=()=>{
        try{
            let total=0;
            products?.map(item=>{total=(total+parseFloat(item.Price)*parseFloat(item.Quantity));

            });
            
            return total;
        }catch(error)
        {
            console.log(error);
        }
    }


    const deletecart=async(Productid)=>{
        let resultcart= await fetch(`http://localhost:5000/add-card/${Productid}`,{
        method:"Delete"
       });
       resultcart= await resultcart.json()
       if(resultcart)
       { 
        
        alert("Record Deleted Successfully...");
        getCartpro();
       }
    }

    

    return (
        
        <div className='container'>
                {/* {
                    products?.map((item) =>
                        <>
                            <div className='cart-page'>
                                <h2>Cart-Page</h2>
                                <div className='row'>
                                    <div className='col-sm-8 details'>
                                        <ul>
                                            <li>
                                                <img src={item.Image} alt=".../" />
                                            </li>
                                            <li>
                                                <span><em>Name:{item.ProductName}</em></span>
                                            </li>
                                            <li>
                                                <span><em>Price :₹{item.Price}</em></span>
                                            </li>
                                            <li>
                                                <span>Quantity :1</span>
                                            </li>
                                            <li>
                                                <button className='remove'>Remove from cart</button>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                            </>
                    )
                }
                             */}
                <div className='cart-page'>
                <h2>Cart-Page</h2>
                    <div className='row'>
                     <div className='col-sm-8 details'>
                     <ul>
                                            <li>
                                                {/* <img src="/" alt=".../#" /> */}
                                                <span>Image</span>
                                            </li>
                                            <li>
                                                <span><em>Name</em></span>
                                            </li>
                                            <li>
                                                <span><em>Price :₹</em></span>
                                            </li>
                                            <li>
                                                <span>Quantity </span>
                                            </li>
                                            <li>
                                                <span>Action</span>
                                            </li>
                                        </ul>

                     {
                      
                        products.map((item)=>
                         <>
                    
                                        <ul>
                                            <li>
                                                <img src={item.Image} alt=".../" />
                                            </li>
                                            <li>
                                                <span><em>Name:{item.ProductName}</em></span>
                                            </li>
                                            <li>
                                                <span><em>Price :₹{item.Price}</em></span>
                                            </li>
                                            <li>
                                                <span>{item.Quantity}</span>
                                            </li>
                                            
                                            <li>
                                                <button onClick={()=>deletecart(item.Productid)} className='remove' ><DeleteIcon/></button>
                                            </li>
                                            
                                        </ul>
                                   
                                    
                                         
                            </>
                            
                        )   
                        
                     }
                      
                                 </div>
                                </div>
                            </div>
                            <div>
                            
                                <button className='btn btn-primary'><Link className="nav-link" to="/check-out">Check-Out</Link></button>
                            </div>
                            <div class="col-sm-4 summary">
                                <h3>Summary</h3>
                                <ul>
                                    <li><span>Amount:-{totalPrice()}</span></li>
                                    <li><span>Tax:-0 <CurrencyRupeeIcon/></span><span></span></li>
                                    <li><span>Delivery : Free Delivery <LocalShippingIcon/></span><span></span></li>
                                    <li><span>Discount 0  <DiscountIcon/> </span></li>
                                    <hr></hr>
                                    <li><span><h4>Total  {totalPrice()} <CurrencyRupeeIcon/> </h4></span><span><h4></h4></span></li>

                                </ul>
                            </div>
      <Footer/>                     
                            
        </div>
                        
    )
}
