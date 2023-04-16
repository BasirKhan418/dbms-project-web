import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
const Url_host= "https://grp3backend.vercel.app"
const Signup = (props) => {
  let history = useNavigate()
  const[cred,setCred] =useState({name:"",email:"",password:"",cpassword:""})
  const handleSubmit =async(e)=>{
      e.preventDefault()
      const {name,email,password}=cred;
      const response = await fetch(`${Url_host}/api/auth/createuser`, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({name,email,password }),
        });
        const json = await response.json();
        console.log(json) 
        if(json.success){
          localStorage.setItem('token',json.authtoken);
          history('/');
          props.showAlert("Account Created Successfully","success");
        }
        else{
          props.showAlert("Invalid Details","danger")
        }
  }
  const onChange = (e) => {
      setCred({ ...cred, [e.target.name]: e.target.value });
    };
  return (
    <>
    <div className='container' style={{position:'relative',top:50}}>
      <h2 className='my-2'>Create your account to use INotebook</h2>
    <form onSubmit={handleSubmit}>
    <div className="mb-3">
    <label htmlFor="name" className="form-label">Name</label>
    <input type="text" className="form-control" id="name" name='name' minLength={3} required value={cred.name} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="email" className="form-label">Email address</label>
    <input type="email" className="form-control" id="email" aria-describedby="emailHelp" name="email" value={cred.email} onChange={onChange}/>
    <div id="emailhelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label htmlFor="password" className="form-label">Password</label>
    <input type="password" className="form-control" id="password" name='password' minLength={5} required value={cred.password} onChange={onChange}/>
  </div>
  <div className="mb-3">
    <label htmlFor="cpassword" className="form-label">Confirm Password</label>
    <input type="password" className="form-control" id="cpassword" name="cpassword" minLength={5} required value={cred.cpassword} onChange={onChange}/>
  </div>
  <button type="submit" className="btn btn-primary">Submit</button>
</form>
    </div>
    </>
  )
}

export default Signup
