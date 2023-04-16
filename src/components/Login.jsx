import React, {useState} from 'react'
import {useNavigate} from "react-router-dom"
import Spinner from './Spinner';
const Login = (props) => {
  const [loading ,setLoading]=useState(false);
    let history = useNavigate()
    const[cred,setCred] =useState({email:"",password:""})
    const Url_host= "https://backendforgrp3.onrender.com"
    const handleSubmit =async(e)=>{
      setLoading(true);
        e.preventDefault()
        const response = await fetch(`${Url_host}/api/auth/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ email:cred.email, password:cred.password }),
          });
          const json = await response.json();
          console.log(json) 
          if(json.success){
            localStorage.setItem('token',json.authtoken);
            history('/');
            setLoading(false);
            props.showAlert("Logged In Successfully","success");
          }
          else{
            props.showAlert("Invalid Credentials","danger");
            setLoading(false)
          }
    }
    const onChange = (e) => {
        setCred({ ...cred, [e.target.name]: e.target.value });
      };
 
  return (
    <>
    {loading?<Spinner/>:
    <div className='container' style={{position:'relative',top:50}}>
      
      <h2 className='my-2 text-center bg-primary text-light' style={{padding:5,borderRadius:10}} >Login in to use GRP3 PROJECT WEB</h2>
     <form onSubmit={handleSubmit}>
  <div className="mb-3" >
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" name="email" aria-describedby="emailHelp" value={cred.email} onChange={onChange} />
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="passsword" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name="password" value={cred.password} onChange={onChange} />
  </div>

  <button type="submit" className="btn btn-primary" style={{width:100}}>Submit</button>
</form>
    </div>}
    </>
  )
}

export default Login
