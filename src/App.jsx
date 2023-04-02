import React from 'react'
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Code from './components/Code';
import Timereal from './components/Timereal';
import Virtual from './components/Virtual';
import Getcode from './components/Getcode';
import { BrowserRouter as Router,Routes,Route } from 'react-router-dom';
const App = () => {
  return (
    <>
    <Router>
    <Navbar/>
   
    <Routes>
    <Route exact path="/" element={<Home/>}/>
    <Route exact path="/about" element={<About/>} />
    <Route exact path="/code" element={<Code/>} />
    <Route exact path="/timetable" element={<Timereal/>} />
    <Route exact path="/virtualexp" element={<Virtual/>} />
    <Route exact path="/getcode" element={<Getcode/>} />
    </Routes>
    </Router>
    </>
  )
}

export default App

