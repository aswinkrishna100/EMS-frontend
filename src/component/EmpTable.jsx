import React from 'react'
import Edit from './Edit'

function EmpTable() {
  return (
    <div>
      <table className='w-75 m-4 shadow table table-bordered'>
      <thead>
        <tr className='text-center'>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Place</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        <tr>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td></td>
            <td className='d-flex'>
                <Edit/>
                <button className='btn btn-danger ms-3  text-center'>Delete</button>
            </td>
        </tr>
      </tbody>
     </table>
    </div>
  )
}

export default EmpTable
