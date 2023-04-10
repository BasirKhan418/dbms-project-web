import React from 'react'

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
    <div className="container my-10 mx-10 d-flex justify-content-center ">

   
    <iframe src="https://onedrive.live.com/embed?resid=BF1ACF3C7501E89%2196651&amp;authkey=%21ABA8X-Q-gw-e1k8&amp;em=2&amp;wdAr=1.7777777777777777&amp;wdEaaCheck=1" width="1000px" height="500px" frameborder="0">This is an embedded <a target="_blank" href="https://office.com">Microsoft Office</a> presentation, powered by <a target="_blank" href="https://office.com/webapps">Office</a>.</iframe>
    </div>
    </div>
  )
}

export default Ppt
