import React from 'react'
import f1 from "./img/f1.jpg"
import f2 from "./img/f2.jpg"
import f3 from "./img/f3.jpg"
import "../App.css";
const Slider = () => {
  return (
    <div>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
 
  <div className="carousel-inner " style={{height:400}}>
  
    <div className="carousel-item active">
    <h1 className='text-center my-3 mx-3 font'>
    Welcome to DBMS Project Web
  </h1>
      <img src={f1} className="d-block w-100" alt="f1"style={{height:400}}/>
     
    </div>
  
    <div className="carousel-item">
    <h1 className='text-center my-3 mx-3 font'>
   Welcome To Real Time 
  </h1>
      <img src={f2} className="d-block w-100" alt="f2" style={{height:400}}/>
    </div>
    <div className="carousel-item">
    <h1 className='text-center my-3 mx-3 font'>
   E-Commerce Database
  </h1>
      <img src={f3} className="d-block w-100" alt="f3" style={{height:400}}/>
    </div>
  </div>
  
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
    </div>
  )
}

export default Slider
