import React from 'react'
import {Link} from "react-router-dom";
const Ccode = () => {
  return (
    <div className="container" style={{position:'relative',top:50}}>
       <h1 className="text-center my-3 mx-3 font">C Code </h1>
         <div className="card">
  <h5 className="card-header">
    C Project
  </h5>
  <div className="card-body">
    <h5 className="card-title">Nothing to preview it here contribute to see</h5>
    <Link to="/code" className="btn btn-primary">Get Started</Link>
  </div>
</div>
</div>
  )
}

export default Ccode
