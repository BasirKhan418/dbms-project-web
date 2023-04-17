import React, { useState } from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Code from './components/Code';
import Timereal from './components/Timereal';
import Virtual from './components/Virtual';
import Getcode from './components/Getcode';
import Ppt from './components/Ppt';
import Signup from './components/Signup';
import Login from './components/Login';
import Alert from './components/Alert';
import VirtualC from './components/VirtualC';
import Dbmscode from './components/Dbmscode';
import Ccode from './components/Ccode';
// import Spinner from './components/Spinner';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const App = () => {
  const[alert,setAlert]=useState(null);
  const showAlert=(message,type)=>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{
    setAlert(null)
    },2000)
  }
  return (
    <>
    <Router>
    <Navbar/>
  <Alert alert={alert}/>
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About />} />
    <Route exact path="/code" element={<Code showAlert={showAlert}/>} />
    <Route exact path="/timetable" element={<Timereal showAlert={showAlert}/>} />
    <Route exact path="/virtualexp" element={<Virtual showAlert={showAlert}/>} />
    <Route exact path="/getcode" element={<Getcode showAlert={showAlert}/>} />
    <Route exact path="/ppt" element={<Ppt showAlert={showAlert}/>} />
    <Route exact path="/getcode/signup7542" element={<Signup showAlert={showAlert}/>} />
    <Route exact path="/Login" element={<Login showAlert={showAlert}/>} />
    <Route exact path="/ccode" element={<Ccode/>} />
    <Route exact path="/dbmscode" element={<Dbmscode/>} />
    <Route exact path="/virtualc" element={<VirtualC/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App

