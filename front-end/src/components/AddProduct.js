import React, { useState } from 'react'
//import { useNavigate } from 'react-router-dom';
//import { useNavigate } from 'react-router-dom'
import Footer from './Footer';

export default function AddProduct() {

    const [ProductName, setProductName] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [Category, setCategory] = useState("");
    //const [UserId,setUserId]=useState("");
    const [Company, setComapany] = useState("");
    const [error, setError] = useState(false);
    //const navigate=useNavigate();

    const getData = async () => {
        console.log(!ProductName);
        if (!ProductName || !Description || !Image || !Price || !Category || !Company) {
            setError(true);
            return false;
            
        }

        console.log(ProductName, Description, Image, Price, Category, Company);
        //let userId= JSON.parse( localStorage.getItem('user'))._id;
        let result = await fetch('http://localhost:5000/add-product', {
            method: "post",
            body: JSON.stringify({ ProductName, Description, Image, Price, Category, Company }),
            headers: {
                'Content-Type': 'application/json'
            }
        

        });

        result = await result.json();
        console.log(result);
        alert("Product Added Successfully!!");
        setProductName("");
        setDescription("");
        setImage("");
        setPrice("");
        setCategory("");
        setComapany("");
    }

    return (
        <>
            <div className='add_product'>
                <div className='container'>
                    <h4>Add Product</h4>
                    <div className="container">

                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                        <input value={ProductName} onChange={(e) => { setProductName(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="product-name" />
                    </div>
                    {error && !ProductName && <span className='inputvalid'>
                        Enter Valid Name
                     </span>}
                     

                    <div className="container">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={Description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    {error && !Description && <span className='inputvalid'>
                        Provide Description
                     </span>}
                    

                   
                    {/* <div>
                        <label htmlFor="formFileSm" class="form-label">Upload Image</label>
                        <input value={Image} onChange={(e) => { setImage(e.target.value) }} class="form-control form-control-sm" id="formFileSm" type="file" />
                    </div>
                    {error && !Image && <span className='inputvalid'>
                        Upload Image
                     </span>} */}
                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">ImageURL</label>
                        <input value={Image} onChange={(e) => { setImage(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput4" />
                    </div>
                    {error && !Image && <span className='inputvalid'>
                        Enter Valid URL
                     </span>}
                    
                   



                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input value={Price} onChange={(e) => { setPrice(e.target.value) }} type="email" className="form-control" id="exampleFormControlInput4" />
                    </div>
                    {error && !Price && <span className='inputvalid'>
                        Enter Valid Price
                     </span>}

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                        <input value={Category} onChange={(e) => { setCategory(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput2" />
                    </div>
                    {error && !Category && <span className='inputvalid'>
                        Enter Valid Category
                     </span>}


                    {/* <div>

                        <label htmlFor="exampleFormControlInput1" className="form-label">User Id</label>
                        <input value={UserId} onChange={(e)=>{setUserId(e.target.value)}} type="email"  className="form-control" id="exampleFormControlInput3" />
                    </div> */}

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                        <input value={Company} onChange={(e) => { setComapany(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput3" />
                    </div>
                    {error && !Company && <span className='inputvalid'>
                        Enter Company Name
                     </span>}



                    <div className='my-3'>
                        <button onClick={getData} type="button" className="btn btn-success">Add Product</button>

                    </div>
                </div>
            </div>
        
        {/* materialui */}
        

     <Footer/>
        </>
    )
}
