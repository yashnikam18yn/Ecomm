import React, { useState } from 'react'
import { Link,useNavigate } from 'react-router-dom';
import Footer from './Footer';

export default function Login() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const navigate = useNavigate()

    const getEmail = (e) => {
        // console.log("onchange");
        setEmail(e.target.value)

    }
    const getPassword = (e) => {
        setPassword(e.target.value)
    }

    const getData = async () => {
        //console.log(username,password);
        let result = await fetch('http://localhost:5000/login', {
            method: 'post',
            body: JSON.stringify({ email, password }),
            headers: {
                'Content-Type': 'application/json'
            }

        });

        result = await result.json();
        //console.log(result);
        if (result.name) {
            alert("Login Successful", result.name);
            localStorage.setItem("user", JSON.stringify(result));
            navigate('/');
            console.log(result.name);

        } else {
            alert("Inavalid Email and password");
        }
    }



    return (
        <>

            {/* <div className="container my-4 mb-3 row">
                <h3>Login</h3>
                <label for="inputusername" className="col-sm-2 col-form-label">Enter Email:</label>
                <div className="col-sm-8">
                    <input type="email" onChange={getEmail} value={email} className="form-control" id="inputusername" />
                </div>
            </div>
            <div  className="container my-4 mb-3 row">
                <label for="inputPassword" className="col-sm-2 col-form-label">Password:</label>
                <div className="col-sm-8">
                    <input type="password" onChange={getPassword} value={password} className="form-control" id="inputPassword" />
                </div>
            </div>
            <div>
        <button type="button" onClick={getData} className="btn btn-success">Login</button>
        </div> */}
        
            <div className='loginform'>
            <div className="wrapper">
                <div className="inner-warpper text-center">
                <div className="logo text-center">
                <img className='imgbody' src="https://cdn-icons-png.flaticon.com/128/5087/5087592.png" alt="..." />
            </div>
                    <h2 className="title">Login to your account</h2>
                    <form action="" id="formvalidate">
                        <div className="input-group">
                           
                            <input placeholder='Enter e-mail' type="email" onChange={getEmail} value={email}  />
                            <span className="lighting"></span>
                        </div>
                        <div className="input-group">
                            <input placeholder='Password' type="password" onChange={getPassword} value={password}/>
                            <span className="lighting"></span>
                        </div>

                        <button className='btn-login-page' type="button" onClick={getData} id="login">Login</button>
                        {/* <div className="clearfix supporter">
        <div className="pull-left remember-me">
          <input id="rememberMe" type="checkbox"/>
          <label for="rememberMe">Remember Me</label>
        {/* </div>
        <a className="forgot pull-right" href="#">Forgot Password?</a>
      </div> */}
                  <Link className="forgot pull-right" to="/signUp">Sign Up</Link>
                    </form>


                </div>
            </div>
            </div>
            <Footer/>
            </>
            )
        
}

