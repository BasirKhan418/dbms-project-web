import React, { useEffect } from 'react'
import {Link, useLocation} from "react-router-dom";
const Navbar = () => {
  let location = useLocation();
  useEffect(()=>{
  console.log(location.pathname);
  },[location])
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
          <Link className={`nav-link ${location.pathname==="/virtualexp"?"active":""}`} to="/virtualexp">Virtual Exp</Link>
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
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
