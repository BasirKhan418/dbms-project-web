import React from 'react'
import Slider from './Slider'
import Team from './Team'
import Timetable from './Timetable'
import {Link} from "react-router-dom";
import Footer from './Footer';
const Home = () => {
  return (
    <>
    <div className="container">
     <Slider/>
     </div>
     <div className="container my-10">

     
     <div className="card">
  <h5 className="card-header">
    Overview
  </h5>
  <div className="card-body">
    <h5 className="card-title">Ecommerce Database </h5>
    <p className="card-text">Hii Guys ,DBMS Grp-3 are making the project called E-commerce database a real time shopping application database .Contribute Yourself By Clicking get started</p>
    <Link to="/code" className="btn btn-primary">Get Started</Link>
  </div>
</div>
</div>
<Team/>
<div className="container">
<div className="card">
  <h5 className="card-header">
    See Project Virtually
  </h5>
  <div className="card-body">
<h5 className="card-title">Ecommerce Database </h5>
    <p className="card-text">Hii Guys ,DBMS Grp-3 are making the project called E-commerce database a real time shopping application database .See the project virtually by clicking on virtual experience button given below:</p>
    <Link to="/virtualexp" className="btn btn-primary">Virtual Experience</Link>
  </div>
</div>
</div>
<div className="container">
<h1 className='text-center my-3 mx-3 font'>
    See the supporting Videos to help the project
  </h1>
</div>
<div className="container display">
  <div className="mx-3 my-3">
  <iframe className="yt"src="https://www.youtube.com/embed/7S_tz1z_5bA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
<div className="mx-3 my-3">
<iframe className="yt" src="https://www.youtube.com/embed/uj4fy4kpaOA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
</div>


</div>
<h1 className='text-center my-3 mx-3 font'>
    Time Table Of the Project
  </h1>
  <div className="container">
    <Timetable/>
  </div>
  <Footer/>
    </>    
   
  )
}

export default Home
