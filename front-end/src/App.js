//import logo from './logo.svg';
import './App.css';
import './login.css';
import './components/css/prodetail.css';
import './components/css/cart.css';
import './components/Images/order.png'

import './components/css/addpro.css';
import './components/css/footerall.css';
import './components/css/about.css';
import './components/css/profile.css';


import Navbar from './components/Navbar';
import {BrowserRouter, Routes , Route,} from 'react-router-dom'
import Singup from './components/Singup';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProduct from './components/AddProduct';
import About from './components/About';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct';
import YourProfile from './components/YourProfile';
import ProductDetail from './components/ProductDetail';
import Editpro from './components/Editpro';
import Cart from './components/Cart';
import Checkout from './components/Checkout';
import Order from './components/Order';
import Mainpage from './components/Mainpage';
// import Footer from './components/Footer';




function App() {

  return (
    <div className="App">
      <BrowserRouter>
      
      <Navbar/>

     
     
      
      <Routes>
      <Route exact path='/' element={<Mainpage/>}/>
      <Route exact path="/proList" element={<ProductList/>}/>
      <Route element={<PrivateComponent/>}>  
       <Route exact path="/addPro" element={<AddProduct/>}/>
       <Route exact path="/updPro" element={<UpdateProduct/>}/>
       <Route exact path="/profile" element={<YourProfile/>}/>
       <Route exact path="/Edprofile" element={<h3>Profile Edit</h3>}/>
       <Route exact path="/logout" element={<h4>Logout</h4>}/>
       <Route exact path="/prodet/:id" element={<ProductDetail/>}/>
       <Route exact path='/editpro/:id' element={<Editpro/>}/>
       <Route exact path='/add-card' element={<Cart/>}/>
       <Route exact path='/check-out' element={<Checkout/>}/>
       <Route exact path='/order-now' element={<Order/>}/>
      
      </Route>

      <Route exact path='/about'  element={<About/>}/>
       <Route exact path="/signUp"  element={<Singup/>}/>
       <Route exact path='/login' element={<Login/>}/>
      </Routes> 
      
      {/* <Footer/> */}
      </BrowserRouter>
     
    </div>
  );
}

export default App;
