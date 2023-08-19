import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useEffect } from 'react';

export default function Editpro() {
    const [ProductName, setProductName] = useState("");
    const [Description, setDescription] = useState("");
    const [Image, setImage] = useState("");
    const [Price, setPrice] = useState("");
    const [Category, setCategory] = useState("");
    //const [UserId,setUserId]=useState("");
    const [Company, setComapany] = useState("");
    // const [error, setError] = useState(false);
    const params=useParams();
    const navigate=useNavigate();

    //to get id
    useEffect(()=>{ 
        // console.log("id of product is",params.id);
        getProductEdit();
    },[]);

    const getProductEdit= async()=>{
        // console.log(params);
        let result= await fetch(`http://localhost:5000/product/${params.id}`);
        result=await result.json();
        // console.log(result.ProductName);
       setProductName(result.ProductName)
        setDescription(result.Description);
        setImage(result.Image);
        setPrice(result.Price);
        setCategory(result.Category);
        setComapany(result.Company);
    }
    const editData = async () => {
       
       // console.log(ProductName, Description, Image, Price, Category, Company);

        let result=await fetch(`http://localhost:5000/product/${params.id}`,{
            method:"Put",
            body:JSON.stringify({ProductName, Description, Image, Price, Category, Company}),
            headers:{
                "Content-Type":"application/json"
            }
           
        });
        if(result)
        {
            navigate('/proList');
        }
        //  result = await result.json();
        //  navigate("/proList")
        // console.log(result);
      
    }

  return (
    <div>
      
      <div className='add_product'>
                <div className='container'>
                <h4>Edit Product</h4>
                    <div className="container">

                        <label htmlFor="exampleFormControlInput1" className="form-label">Product Name</label>
                        <input value={ProductName} onChange={(e) => { setProductName(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput1" placeholder="product-name" />
                    </div>
                    
                     

                    <div className="container">
                        <label htmlFor="exampleFormControlTextarea1" className="form-label">Description</label>
                        <textarea value={Description} onChange={(e) => { setDescription(e.target.value) }} className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                    </div>
                    
                    

                   
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
                    
                    
                   



                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Price</label>
                        <input value={Price} onChange={(e) => { setPrice(e.target.value) }} type="email" className="form-control" id="exampleFormControlInput4" />
                    </div>
                    

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Category</label>
                        <input value={Category} onChange={(e) => { setCategory(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput2" />
                    </div>
                   


                    {/* <div>

                        <label htmlFor="exampleFormControlInput1" className="form-label">User Id</label>
                        <input value={UserId} onChange={(e)=>{setUserId(e.target.value)}} type="email"  className="form-control" id="exampleFormControlInput3" />
                    </div> */}

                    <div>
                        <label htmlFor="exampleFormControlInput1" className="form-label">Company</label>
                        <input value={Company} onChange={(e) => { setComapany(e.target.value) }} type="text" className="form-control" id="exampleFormControlInput3" />
                    </div>
                   



                    <div className='my-3'>
                        <button onClick={editData} type="button" className="btn btn-warning">Edit Product</button>
                    </div>
                </div>
            </div>
    </div>
  )
}
