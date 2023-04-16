import React, { useEffect } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
const Ppt = () => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("logggg")
  }
  else{
  navigate("/login")
  }
})
  return (
    <>
    <h1 className='text-center my-3 mx-3 font' style={{position:'relative',top:50}}>
    Download and view PPT
  </h1>
    <div className="container my-10 mx-10 d-flex justify-content-center align-items-center" style={{position:'relative',top:50}}>
    <p>no ppt here add to view</p>
    </div>

    <Footer/>
    </>
  )
}

export default Ppt
