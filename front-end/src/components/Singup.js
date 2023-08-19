import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MailIcon from '@mui/icons-material/Mail';
import LockIcon from '@mui/icons-material/Lock';
import AddIcCallIcon from '@mui/icons-material/AddIcCall';
import PlaceIcon from '@mui/icons-material/Place';
import Footer from './Footer';

export default function Singup() {

  const [name,setName]=useState("");
  
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [mobile,setMobile]=useState("");
  const [address,setAddress]=useState("")

  const [error, setError] = useState(false);

  const navigate=useNavigate(); 

  useEffect(()=>{
    const auth=localStorage.getItem('user')
    if(auth)
    {
      navigate('/e-store')
    }
  })

  const getName= (e)=>{
   // console.log("onchange");
    setName(e.target.value)
    
  }
 
  const getEmail= (e)=>{
   // console.log("onchange");
    setEmail(e.target.value)
    
  }
  const getPassword= (e)=>{
    //console.log("onchange");
    setPassword(e.target.value)
    
  }
 
  const getMobile=(e)=>{
    setMobile(e.target.value)
  }

  const getAdress=(e)=>{
    setAddress(e.target.value)
  }



 

  const getData= async ()=>{
    console.log(name,email,password,mobile,address);
    // const salt=await bcrypt.genSalt(10);
    // const secPass=await bcrypt.hash(req.body.password,salt);
    if (!name || !email || !mobile || !password || !address) {
      setError(true);
      return false;
      
  }
    //fetch data into api or mongodb
    let result=await fetch('http://localhost:5000/register',{
      method:"post",
      body:JSON.stringify({name,email,password,mobile,address}),
      headers:{
        'Content-Type':'application/json'
      },

    });
    result =await result.json()
    //console.log(result);
    localStorage.setItem("user",JSON.stringify(result));

    if(result)
    {
      navigate('/')
    }

  }

  return (
    <>
      <div className='container'>
        
      
            
        <h4 className="title">Register</h4>
       
        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label"><AccountCircleIcon/></label>
          <div className="col-sm-10">
            <input type="text" value={name} onChange={getName} className="form-control" placeholder="EnterName" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
          {error && !name && <span className='col-sm-8 inputvalid'>
                        This Feild is Required.
                     </span>}
        </div>
       
     
        {/* <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label">Username</label>
          <div className="col-sm-10">
            <input type="text" value={userName} onChange={getuserName} className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1" />
          </div>
        </div> */}

        <div className="mb-3 row">
          <label for="staticEmail" className="col-sm-2 col-form-label"><MailIcon/></label>
          <div className="col-sm-10">
            <input type="Email" value={email} onChange={getEmail} className="form-control" id="inputEmail" placeholder='name@gmail.com' />
          </div>
          {error && !email && <span className='col-sm-8 inputvalid'>
                        This Feild is Required.
                     </span>}
        </div>

        <div className="mb-3 row">
          <label for="inputPassword" className="col-sm-2 col-form-label"><LockIcon/></label>
          <div className="col-sm-10">
            <input type="password" value={password} onChange={getPassword} className="form-control" id="inputPassword" placeholder='EnterPassword' />
          </div>
          {error && !password && <span className='col-sm-8 inputvalid'>
                        This Feild is Required.
                     </span>}
        </div>

        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label"><AddIcCallIcon/></label>
        <div className="col-sm-10">
            <input type="mobilenumber" value={mobile} onChange={getMobile} className="form-control" id="inputEmail" placeholder='xxxxxxxxxx' />
          </div>
          {error && !mobile && <span className='col-sm-8 inputvalid'>
                      This Feild is Required.
                   </span>}
        </div>

        <div className="mb-3 row">
        <label for="staticEmail" className="col-sm-2 col-form-label"><PlaceIcon/></label>
        <div className="col-sm-10">
           
            <textarea placeholder='address' type='text' value={address} onChange={getAdress} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
          </div>
          {error && !address && <span className='col-sm-8 inputvalid'>
                      This Feild is Required.
                     </span>}
        </div>

        <div>
        <button type="button" onClick={getData} className="btn btn-success">Sign Up</button>
        </div>

      </div>
      <Footer/>
    </>
  )
}
