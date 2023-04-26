import React from 'react'
import {Link} from "react-router-dom";
const Ccode = () => {
  return (
    <div className="container" style={{position:'relative',top:50}}>
       <h1 className="text-center my-3 mx-3 font">C Code </h1>
         <div className="card">
  <h5 className="card-header">
    C Project Souce Code For Quiz App
  </h5>
  <div className="card-body">
    <code></code>
    <Link to="/code" className="btn btn-primary mx-2">Do some changes in code</Link>
    <a href="https://github.com/BasirKhan418/Quiz-Game-using-c-" className="btn btn-primary mx-2" target='_blank'rel="noreferrer">Get Project Github Link</a>
  </div>
</div>
<iframe src="https://www.jdoodle.com/embed/v0/6aTE" frameborder="0" title='c Compiler' style={{position:'relative',top:50,height:1000}} className='w-100'></iframe>
</div>
  )
}

export default Ccode
