import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import DeleteIcon from '@mui/icons-material/Delete';
import CreateIcon from '@mui/icons-material/Create';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';





export default function UpdateProduct() {
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
   
    //delete product api
    const deleteProduct = async(id) =>{
        
       // console.log(id);
       let result= await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
       });
       result= await result.json()
       if(result)
       {
        alert("Record Deleted Successfully...");
        getProducts();
       }
    }

    // const editProduct=()=>{
    //     console.log("clicked");
        
    // }
    
      
    

    //console.log("Products:", products);
  return (
    <div>
        <div className='container'>
                <h3>Update Product Here</h3>
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
                     <div className='container'>
                      
                        <div className="card "style={{marginBottom:"1rem",border:"1px solid #ddd"}}>
                            <img className='imgbody' src={item.Image} style={{ height: "16rem", width: "auto" ,borderRadius:"6px 6px 0px 0px"}} alt="..." />
                            <div className="card-body">
                                <h5 className="card-title">{item.ProductName}</h5>
                                <p className="card-text">{item.Description}</p>
                                <h6><CurrencyRupeeIcon/>{item.Price} RS</h6>
                                <div style={{justifyContent:"space-between",display:"flex"}} >
                                <button onClick={()=>deleteProduct(item._id)} className="btn btn-danger "><DeleteIcon/></button>
                               
                                 <button className='btn btn-warning'> <Link className="nav-link" to={"/editpro/"+item._id}><CreateIcon/></Link></button>
                                 </div>
                                 </div>
                               
                                 </div>    
                            </div>
                       
                    </>
                )
            }
    </div>
  )
}
