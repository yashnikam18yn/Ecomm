import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

import MailIcon from '@mui/icons-material/Mail';

import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PlaceIcon from '@mui/icons-material/Place';
import Footer from './Footer';


export default function Checkout() {
  
  
  const [email,setEmail]=useState("");
  
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("");


  const getEmail=(e)=>{
    setEmail(e.target.value);
  }

  const getMobile=(e)=>{
    setMobile(e.target.value);
  }

  const getAddress=(e)=>{
    setAddress(e.target.value)
  }

  
  const getData=async()=>{
    let user=localStorage.getItem('user');
        let userobj=JSON.parse(user);
      //console.log(userobj);
   
        let Userid=userobj._id;

    let result=await fetch('http://localhost:5000/check-out',{
      method:"post",
      body:JSON.stringify({email,mobile,address,Userid}),
      headers:{
        'Content-Type':'application/json'
      },

    });
    result =await result.json()
    alert("Order Confirm");
        setEmail("");
        setMobile("");
        setAddress("");
        
  }

  return (
    <div>
      <h5>Checkout</h5>
      
      <h4>Add Shipping Address</h4>
      <div className='container'>
      
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label"><MailIcon/></label>
          <div className="col-sm-10">
            <input type="Email" className="form-control" value={email} onChange={getEmail} id="inputEmail" placeholder='name@gmail.com' />
          </div>
         
        </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label"><AddIcCallIcon/></label>
        <div className="col-sm-10">
            <input type="mobilenumber" className="form-control" value={mobile} onChange={getMobile} id="inputEmail" placeholder='xxxxxxxxxx' />
          </div>
         
        </div>
        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label"><PlaceIcon/></label>
        <div className="col-sm-10">
           
            <textarea placeholder='address' type='text' value={address} onChange={getAddress}  className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          
        </div>

        <div>
        <button type="button" onClick={getData} className="btn btn-success"><Link className='nav-link' to='/order-now' >Order-Now</Link></button>
        </div>

      </div>
    <Footer/>
    </div>
  )
}
