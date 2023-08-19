import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

import VisibilityIcon from '@mui/icons-material/Visibility';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';
import WatchIcon from '@mui/icons-material/Watch';
import DiamondIcon from '@mui/icons-material/Diamond';
import BoltIcon from '@mui/icons-material/Bolt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import Footer from './Footer';





export default function ProductList() {

    const [products, setProducts] = useState([]);

    useEffect(() => {
        getProducts();
       
    }, []);
    // console.log("Products:-", products);

    // console.warn("products",products);http://localhost:5000/products

    const getProducts = async () => {
        let result = await fetch('http://localhost:5000/products');
        result = await result.json();
        setProducts(result);
    }


    const SearchHandel = async (event) => {
        let key = event.target.value;
        if (key) {
            //console.log(key);
            let result = await fetch(`http://localhost:5000/search/${key}`);
            result = await result.json();
            //console.log(result);
            if (result) {
                setProducts(result);
            }
        } else {
            getProducts();
        }

    }

    //console.log("Products:", products);

    const fillterResult = (category) => {
        const result = products.filter((item) => {
            return item.Category === category;
        });
        setProducts(result);

    }

    return (
        <>
         
            <h5 className='text-center text-info'>Category Lets Shop</h5>


            <div class="btn-group">
                <button onClick={() => fillterResult('SmartPhone')} class="btn btn-warning mt-3">Phone<PhoneAndroidIcon/></button>
                <button onClick={() => fillterResult('Beauty')} class="btn btn-warning mt-3">Beauty<AutoFixHighIcon/></button>
                <button onClick={() => fillterResult('SmartWatch')} class="btn btn-warning mt-3">Watch<WatchIcon/></button>
                <button onClick={() => fillterResult('Fashion')} class="btn btn-warning mt-3">Fashion<DiamondIcon/></button>
                <button onClick={() => fillterResult('Electronics')} class="btn btn-warning mt-3">Electronics<BoltIcon/></button>
                <button onClick={() => fillterResult('Books')} class="btn btn-warning mt-3">Book<MenuBookIcon/></button>
                {/* <button type="button" class="btn btn-warning mt-3">Datsun</button>
                <button type="button" class="btn btn-warning mt-3">Toyota</button>
            <button type="button" class="btn btn-warning mt-3">Mahindra</button> */}
            </div>





            <div className='container'>
                <hr></hr>
                <form className="" style={{marginLeft:"34%"}} role="search">
                    <input className="form-control me-2" onChange={SearchHandel} type="search" placeholder="Search-Product" aria-label="Search"  /> 
                    
                </form>

                {/* <div className="card">
                    <img className='imgbody' src="https://tse4.mm.bing.net/th?id=OIP.saVjvlag_mrLGem4ctOTIQHaIV&pid=Api&P=0" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">Name</h5>
                        <p className="card-text">Looking to quickly add Bootstrap to your project? Use jsDelivr,eo the downloads page.</p>
                        <a href="/" className="btn btn-primary">Add To Card</a>
                    </div>
                </div> */}
            </div>
            {
                products?.map((item) =>
                    <>
                                
                                <div className='container' >
                                <div className="card"style={{marginBottom:"1rem",border:"1px solid #ddd"}}>
                                   
                                    <img className='imgbody' style={{ height: "16rem", width: "100%" ,borderRadius:"6px 6px 0px 0px"}} src={item.Image} alt="..." />
                                  
                                    <div className="card-body">
                                        <h5 className="card-title">{item.ProductName}</h5>
                                        <p className="card-text">{item.Description}</p>
                                        <h6>₹{item.Price} RS</h6>

                                        <button className="btn btn-primary" style={{borderRadius:"5px"}}> <Link className="nav-link" to={"/prodet/" + item._id}>ProductDetail<VisibilityIcon/></Link></button>
                                    </div>
                                </div>
                                </div>
                               
                                               
                    </>
                   
                )
                  
            }   
          
            

      {/* footer */}
      

        </>

    )
}
