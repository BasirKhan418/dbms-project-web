import React from 'react'

const VirtualC = () => {
  return (
    <>
    <div style={{position:'relative',top:50}}>
       <div className="container">
        <h1 className='text-center my-3 mx-3 font'>
    Virtual Expereience
  </h1>
  {/* <p className="bg-secondary text-light p-3">Nothing to preview it here please work on project to virtual experience</p> */}
  </div>
    </div>
    <iframe src="https://www.jdoodle.com/embed/v0/68JT" frameborder="0" title='c Compiler' style={{position:'relative',top:50,height:1000}} className='w-100'></iframe>
  
    </>
  )
}

export default VirtualC
