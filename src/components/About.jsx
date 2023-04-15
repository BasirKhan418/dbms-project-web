import React, { useEffect } from 'react'
import Footer from './Footer'
import { useNavigate } from 'react-router-dom';
const About = () => {
  let navigate =useNavigate();
  useEffect(()=>{
  if(localStorage.getItem('token')){
    console.log("logggg")
  }
  else{
  navigate("/login")
  }
},[])
  return (
    <div>
      <h1 className='text-center my-3 mx-3 font' style={{position:'relative',top:50}}>
    Contribute On GitHub
  </h1>
    
    <div className="container" style={{position:'relative',top:50}}>
    <div className="card">
  <h5 className="card-header">
  Contribute On GitHub
  </h5>
  <div className="card-body">
<h5 className="card-title">Ecommerce Database </h5>
    <p className="card-text">Hii Guys ,DBMS Grp-3 are making the project called E-commerce database a real time shopping application database .Contribute On GitHub by clicking the button below:</p>
    <a href="https://github.com/BasirKhan418/Ecommerce-Database-Project" className="btn btn-primary" target="_blank" rel="noreferrer">Contribute On GitHub</a>
  </div>
</div>
    </div>
    <Footer/>
    </div>
  )
}

export default About
