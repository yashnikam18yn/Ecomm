import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LoginIcon from '@mui/icons-material/Login';
import LogoutIcon from '@mui/icons-material/Logout';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ProductionQuantityLimitsIcon from '@mui/icons-material/ProductionQuantityLimits';
import StoreIcon from '@mui/icons-material/Store';
import InfoIcon from '@mui/icons-material/Info';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import EditIcon from '@mui/icons-material/Edit';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShoppingCartCheckoutIcon from '@mui/icons-material/ShoppingCartCheckout';



export default function Navbar() {
  const auth=localStorage.getItem('user');
 
  
const navigate =useNavigate()
const logout=()=>{
  localStorage.clear();
  navigate('/signUp');
}
  return (
    <>
    <div>
     
     <nav className="navbar navbar-expand-lg bg-body-tertiary" >
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-Comm<StoreIcon/></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/proList">Products<ShoppingCartCheckoutIcon/></Link>
        </li>
        {
          auth ?
          <>
           <li className="nav-item">
           <Link className="nav-link" to="/addPro">Add <AddShoppingCartIcon/></Link>
           </li>
           <li className="nav-item">
            <Link className="nav-link" to="/updPro">Update<ProductionQuantityLimitsIcon/></Link>
            </li>
            <li className="nav-item dropdown">
            <Link className="nav-link dropdown-toggle" to="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            <ExpandMoreIcon/>
          </Link>
          <ul className="dropdown-menu">
            <li><Link className="dropdown-item" to="/profile"><PersonOutlineIcon/>({JSON.parse(auth).name})</Link></li>
            <li><Link className="dropdown-item" to="/Edprofile">Edit Profile <EditIcon/></Link></li>
            <li><Link className="dropdown-item" to="/add-card"><ShoppingCartIcon/>Cart</Link></li>
            {/* <li><hr className="dropdown-divider"/></li> */}
            
          </ul>
            </li>
          </>:
          <>
          </>
          
        }
        
        <li className="nav-item">
          <Link className="nav-link" to='/about'>About<InfoIcon/></Link>
        </li>
        <li className="nav-item">
       { auth ? <Link className="nav-link" onClick={logout} to="/logout"><LogoutIcon/>({JSON.parse(auth).name})</Link>:
       <Link className="nav-link" to="/signUp"><HowToRegIcon/></Link>}
        </li>
        <li className='nav-item'>
       { auth ? <Link className='nav-link disabled' to="/login"><LoginIcon/></Link>:<Link className='nav-link' to="/login"><LoginIcon/></Link>}
        </li>
      </ul>
      {/* <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
        <button className="btn btn-outline-success" type="submit">Search</button>
      </form> */}
      
    </div>
  </div>
</nav> 
    </div>

   {/* Footer */}
   


    </> 
  )
}
