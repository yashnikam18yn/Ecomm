import React from 'react'
import Footer from './Footer';



export default function YourProfile() {
    const auth = localStorage.getItem('user');

    return (
        <div>
            <div className='profilepage' ClassName="container mt-4 mb-4 p-3 d-flex justify-content-center">
                <div className='card-profile' ClassName="card-profile p-4"> 
                    <div ClassName=" image d-flex flex-column justify-content-center align-items-center">
                        <button ClassName="btn btn-secondary">
                        <img className='imgbodyprofile' src="https://cdn-icons-png.flaticon.com/128/5087/5087592.png" alt="..." />

                        </button> <span className='profilename' ClassName="name mt-3">{JSON.parse(auth).name}<br></br></span>
                        <span ClassName="idd"><h6>Email</h6>{JSON.parse(auth).email}</span>
                        <div ClassName="d-flex flex-row justify-content-center align-items-center gap-2">
                            <span ClassName="idd1">Address:</span>
                            <span className='profileaddress' ClassName="idd1">{JSON.parse(auth).address}</span>
                            <span><i ClassName="fa fa-copy"></i></span>
                        </div>
                        <div ClassName="d-flex flex-row justify-content-center align-items-center mt-3">
                            <span ClassName="number">Mobile:<span ClassName="follow">{JSON.parse(auth).number}</span></span>
                        </div> <div ClassName=" d-flex mt-2"> <button ClassName="btn1 btn">Edit Profile</button>
                        </div> 

                    </div>
                    </div>
                    </div>

                   
<Footer/>
                </div>
                


    

                    )
}
