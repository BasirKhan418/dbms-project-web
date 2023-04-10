import React from 'react'
import Footer from './Footer'

const Ppt = () => {
  return (
    <>
    <h1 className='text-center my-3 mx-3 font' style={{position:'relative',top:50}}>
    Download and view PPT
  </h1>
    <div className="container my-10 mx-10 d-flex justify-content-center align-items-center" style={{position:'relative',top:50}}>
    
    <iFrame src="https://onedrive.live.com/embed?resid=BF1ACF3C7501E89%2196651&amp;authkey=%21ABA8X-Q-gw-e1k8&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="1000px" height="500px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com" rel="noreferrer" >Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps" rel="noreferrer">Office</a>.</iFrame>
    </div>

    <Footer/>
    </>
  )
}

export default Ppt
