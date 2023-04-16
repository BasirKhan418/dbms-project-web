import React, { useEffect } from 'react'
import Timetable from './Timetable'
import "../App.css";
import Footer from './Footer';
import { useNavigate } from 'react-router-dom';
const Timereal = (props) => {
  let navigate =useNavigate(props);
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
    <div>
      <h1 className='text-center my-3 mx-3 font ' style={{position:'relative',top:50}}>
    Time Table Of the Project
  </h1>
  <div className="container">
    <Timetable/>
  </div>
  <div className="container"  style={{position:'relative',top:50}}>
  <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create User Table</h6>
    <p className="card-text">Parameters are :-user name, user id, user address ,user email,user password,user phone no.,user payment method(stored in table using alter command)</p>
  </div>
</div>
<div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 2</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create Supplier Details</h6>
    <p className="card-text">Parameters are :-Supplier name, Supplier id, Supplier address ,Supplier email,Supplierpassword,Supplier phone no.,Supplier payment method</p>
  </div>
</div>
  <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 3</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create Category Table</h6>
    <p className="card-text">Parameters are :-Category id,Category Name ,Category Description,Total no. of suppliers in this category (refer to supplier details)</p>
  </div>
</div>
 <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 4</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create Product Table</h6>
    <p className="card-text">Parameters are :- Product id,sku,product name,product description category id,Category name,mrp,price,available size,available stock,avaialble colour,discount</p>
  </div>
</div>
  <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 5</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create Order Details</h6>
    <p className="card-text">Parameters are :-order id,product_id,order number,price,quantity,discount,total,size,color,shipdate,payment method,order status,shipment type</p>
  </div>
</div>
  <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 6</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create OfferTable</h6>
    <p className="card-text">Parameters are :-offer name,offer type ,offer id, discount amount,coupon code</p>
  </div>
</div>
  </div>
  <Footer/>
    </div>
  )
}

export default Timereal
