import React from 'react';

import { useEffect, useState } from 'react';
import Logo from './Images/order.png';
import Footer from './Footer';



export default function Order() {
    const [products, setProducts] = useState([]);
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
        let result= await fetch(`http://localhost:5000/order-now/${userid}`);
        result=await result.json();
        setProducts(result);
        console.log(products.Userid);
    }
    
    // const totalPrice=()=>{
    //     try{
    //         let total=0;
    //         products?.map(item=>{total=(total+parseFloat(item.Price)*parseFloat(item.Quantity));

    //         });
            
    //         return total;
    //     }catch(error)
    //     {
    //         console.log(error);
    //     }
    // }


    const removeecart=async(Userid)=>{
        let resultcart= await fetch(`http://localhost:5000/order-now/${Userid}`,{
        method:"Delete"
       });
       resultcart= await resultcart.json()
       if(resultcart)
       {
        alert("Cancel Order Successfully...");
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
                <h2>Order-Page</h2>
                    <div className='row'>
                     <div className='col-sm-8 details'>
                     <ul>
                                             
                                             <li>
                                                <span>UserId</span>
                                             </li>
                                            
                                            <li>
                                                <span><em>Price :₹</em></span>
                                            </li>
                                            <li>
                                                <span>Quantity</span>
                                            </li>
                                            <li>
                                                <span>Status </span>
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
                                                <img src={Logo} alt=".../" />
                                            </li>
                                            <li>
                                                <span>User Id:{item.Userid}</span>
                                            </li>
                                            <li>
                                                <span><em>Price :₹{item.Price}</em></span>
                                            </li>
                                            <li>
                                                <span>1</span>
                                            </li>
                                            <li>
                                            <span>In Progress</span>
                                            </li>
                                            <li>
                                                <button onClick={()=>removeecart(item.Userid)} className='remove'>Cancel Order</button>
                                            </li>
                                        </ul>
                                    
                            </>
                        )     
                     }
                                 </div>
                                </div>
                            </div>
                            
                            <div class="col-sm-4 summary">
                                <h3>Summary</h3>
                                <ul>
                                    <li><span>Amount</span><span>₹</span></li>
                                    <li><span>Tax</span><span></span></li>
                                    <li><span>Delivery</span><span></span></li>
                                    <li><span>Discount</span><span></span></li>
                                    <li><span><h4>Total</h4></span><span><h4>₹</h4></span></li>

                                </ul>
                            </div>
                            <Footer/>
        </div>
                        
          
    )
}
