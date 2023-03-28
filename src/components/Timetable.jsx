import React from 'react'

const Timetable = () => {
  return (
    <div>
      <table className="table">
  <thead>
    <tr>
      <th scope="col">Name</th>
      <th scope="col">Table Name</th>
      <th scope="col">Required Table No.</th>
      <th scope="col">Start Date</th>
      <th scope="col">End Date</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th scope="row">Phase 1</th>
      <td>Create User Deatils</td>
      <td>1</td>
      <td>29 March 2023</td>
      <td>1 April 2023</td>
    </tr>
    <tr>
      <th scope="row">Phase 2</th>
      <td>Create Supplier Details</td>
      <td>1</td>
      <td>2 April 2023</td>
      <td>4 April 2023</td>
    </tr>
    <tr>
      <th scope="row">Phase 3</th>
      <td>Create Category Table</td>
      <td>1</td>
      <td>4 April 2023</td>
      <td>5 April 2023</td>
    </tr>
    <tr>
      <th scope="row">Phase 4</th>
      <td>Create Product Table</td>
      <td>10</td>
      <td>5 April 2023</td>
      <td>8 April 2023</td>
    </tr>
    <tr>
      <th scope="row">Phase 5</th>
      <td> Create Order Details</td>
      <td>10</td>
      <td>8 April 2023</td>
      <td>10 April 2023</td>
    </tr>
    <tr>
      <th scope="row">Phase 6</th>
      <td>Create OfferTable</td>
      <td>1</td>
      <td>10 April 2023</td>
      <td>12April 2023</td>
    </tr>
   
  </tbody>
</table>
    </div>
  )
}

export default Timetable
