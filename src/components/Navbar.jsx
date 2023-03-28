import React from 'react'
import {Link} from "react-router-dom";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark navbar-fixed-top">
  <div className="container-fluid">
    <Link className="navbar-brand" to="/">E-DBMS GRP-3</Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/virtualexp">Virtual Exp</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/code">Get Code</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/timetable">TimeTable</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">Github</Link>
        </li>
      </ul>
    </div>
  </div>
</nav>
    </div>
  )
}

export default Navbar
