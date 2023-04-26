import React, { useEffect } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
const Ppt = (props) => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("logggg")
  }
  else{
  navigate("/login")
  props.showAlert("Access Denied .Please Login to access this page ","danger")
  }
})
  return (
    <>
    <div className="container" style={{position:'relative',top:60}}>

    <h5 className="card-header">
   Name:-K.sonali<br/>
   Topic :- Derived Attributes in c
  </h5>
  <div className="card-body">
    <a href="https://www.slideshare.net/TarunSharma24/data-types-in-c-56342387" className="btn btn-primary mx-2" target='_blank'rel="noreferrer">Download PPT</a>
  </div>

  </div>
    <Footer/>
    </>
  )
}

export default Ppt
