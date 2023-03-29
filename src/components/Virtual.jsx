import React from 'react'
import "../App.css"
const Virtual = () => {
  return (
    <div>
        <div className="container">
        <h1 className='text-center my-3 mx-3 font'>
    Virtual Expereience
  </h1>
        </div>
      <div className="container">
      <div className="card my-3">
  <div className="card-body">
    <h5 className="card-title">Phase 1</h5>
    <h6 className="card-subtitle mb-2 text-muted">Create User Details</h6>
    <table className="table">
  <thead>
    <tr>
      <th scope="col">user_id</th>
      <th scope="col">user_name</th>
      <th scope="col">user_email</th>
      <th scope="col">user_password</th>
      <th scope="col">user_phone</th>
      <th scope="col">user_address</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">ui111</th>
      <td>priyanshu</td>
      <td>priyanshu@gmail.com</td>
      <td>pri1234</td>
      <td>9758485876</td>
      <td>Rachi,Jharkhand</td>
    </tr>
    <tr>
      <th scope="row">ui112</th>
      <td>basir</td>
      <td>basir121@gmail.com</td>
      <td>basiri1287</td>
      <td>9748485877</td>
      <td>Cuttack,Odisha</td>
    </tr>
    <tr>
      <th scope="row">ui113</th>
      <td>sartaj</td>
      <td>sartaj@gmail.com</td>
      <td>sartaji1895</td>
      <td>9335875459</td>
      <td>Jatni,Odisha</td>
    </tr>
    <tr>
      <th scope="row">ui114</th>
      <td>sadab</td>
      <td>sadab121@gmail.com</td>
      <td>sadab8574</td>
      <td>7077485236</td>
      <td>Kendrapara,Odisha</td>
    </tr>
   
  </tbody>
</table>
  </div>
</div>
      </div>
    </div>
  )
}

export default Virtual
