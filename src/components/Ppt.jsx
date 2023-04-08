import React from 'react'
import Code from './Code'

const Ppt = () => {
    const download =()=>{
        alert("PPT Unavailable it will be available soon ")
    }
  return (
    <div className='container'>
       <div>
      <table className="table" style={{position:'relative',top:50}}>
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Topic Name</th>
      <th scope="col">Submit Or Not</th>
      <th scope="col">Last Date To Submit</th>
    </tr>
  </thead>
  <tbody>
    <tr className='bg-success text-light'>
      <th scope="row" >Priyansu Kumar</th>
      <td>Natural Language Interface and conclusion</td>
      <td>Pending</td>
      <td>10 April 2023</td>
    </tr>
    <tr className='bg-success text-light'>
      <th scope="row" >Basir Khan</th>
      <td>Form Based Interface</td>
      <td>Pending</td>
      <td>10 April 2023</td>
    </tr>
    <tr className='bg-success text-light'>
      <th scope="row" >Smrutirupa Parida</th>
      <td>Introduction and Graphical Interface</td>
      <td>Pending</td>
      <td>10 April 2023</td>
    </tr>
    <tr className='bg-success text-light'>
      <th scope="row" >Manisha Mohapatra</th>
      <td>Menu Based InterFace</td>
      <td>Pending</td>
      <td>10 April 2023</td>
    </tr>
    <tr className='bg-success text-light'>
      <th scope="row" >K. Sonali</th>
      <td>Speech Input and output and DBA Interface</td>
      <td>Pending</td>
      <td>10 April 2023</td>
    </tr>
  </tbody>
</table>

    </div>
    <Code title="Share Your Content For PPT"/>
    <div className="card my-3 " style={{position:'relative',top:50}}>
          <div className="card-body">
            <h5 className="card-title">PPT</h5>
            <h6 className="card-subtitle mb-2 text-muted">PPT Appeared Here</h6>
            <p className="card-text">
                After Completion of ppt it will be appeared here
            </p>
            <button className='btn btn-primary' onClick={download}> Download Now</button>
          </div>
        </div>
    </div>
  )
}

export default Ppt
