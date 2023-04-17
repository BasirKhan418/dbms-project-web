import React, { useEffect } from 'react'
import {Link, useNavigate} from "react-router-dom";
// import Dbmscode from './Dbmscode';
const Getcode = (props) => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("logggg")
  }
  else{
  navigate("/login")
  props.showAlert("Access Denied. Please Login to access this page ","danger")
  }
})
  return (
    <>
    <div>
      <h1 className="text-center my-3 mx-3 font" style={{position:'relative',top:50}}>Manage Your Project</h1>
      <div className="container d-flex justify-content-center flex-column align-items-center"  style={{position:'relative',top:100}}>
      <Link className="btn btn-primary my-2 w-75 p-3" to="/dbmscode">Get Dbms Project Code</Link>
      <Link className="btn btn-primary my-2 w-75 p-3" to="/ccode">Get c Project Code</Link>
      <Link className="btn btn-primary my-2 w-75 p-3" to="/getcode/signup7542">Create Your New / Team Member Account</Link>
      <Link className="btn btn-primary my-2 w-75 p-3" to="/virtualc">Virtual Preview C Project</Link>
      <Link className="btn btn-primary my-2 w-75 p-3" to="/virtualexp">Virtual Preview Dbms Project</Link>
      </div>
      
    </div>
   
    </>
  )
}

export default Getcode
