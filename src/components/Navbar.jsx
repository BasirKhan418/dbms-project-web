import React, { useEffect } from 'react'
import {Link, useLocation, useNavigate} from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  useEffect(()=>{
  console.log(location.pathname);
  },[location])
  let navigate =useNavigate()
   const handleLogout=()=>{
    localStorage.removeItem('token')
    navigate("/login")
   }
  return (
    <div>
      <nav className="navbar fixed-top navbar-expand-sm navbar-dark bg-dark ">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-DBMS GRP-3</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/"?"active":""}`} aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/code"?"active":""}`} to="/code">Contribute Here</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/timetable"?"active":""}`} to="/timetable">TimeTable</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/getcode"?"active":""}`} to="/getcode">Get Code</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/about"?"active":""}`} to="/about">Github</Link>
        </li>
        <li className="nav-item">
          <Link className={`nav-link ${location.pathname==="/ppt"?"active":""}`} to="/ppt">PPT</Link>
        </li>
      </ul>
      {!localStorage.getItem('token')?<form className="d-flex">
      <Link className="btn btn-primary mx-2" to="/login">Login</Link>
      <Link className="btn btn-primary mx-2" to="/signup">Sign Up</Link>
      </form>:<button className='btn btn-primary' onClick={handleLogout}>Logout</button>}
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
