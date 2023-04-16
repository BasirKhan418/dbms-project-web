import React from 'react'
import loading from "./spinner.gif"
const Spinner = () => {
  return (
    <div>
      <div className="container text-center" style={{position:'relative',top:300}}>
        <img src={loading} alt="loading" />
      </div>
    </div>
  )
}

export default Spinner
