import React, { useContext, useEffect, useState } from 'react'
import Edit from './Edit'
import { deleteUserAPI, getUserAPI } from '../services/allAPI'
import { EmpContext } from '../context/EmpContext'

function EmpTable() {
   const [user,setUser] = useState([])
  const {addResponse,setAddResponse} = useContext(EmpContext)
    const getUserDetails = async()=>{
        const token = sessionStorage.getItem('token')
          if(token){            
            var reqHeader = {
              "Content-Type":"application/json",
              "Authorization": `Bearer ${token}`
            }
            const result = await getUserAPI(reqHeader)
            setUser(result.data)
          }
    }

    useEffect(()=>{
        getUserDetails()
    },[addResponse])

    const handleDelete = async(id)=>{
      const token = sessionStorage.getItem('token')
          if(token){
            var reqHeader = {
              "Content-Type":"application/json",
              "Authorization": `Bearer ${token}`
            }
          }else{
            alert("Unauthorized User")
          }
          const result = await deleteUserAPI(id,reqHeader)

      if(result.status==200){
        setAddResponse(result)
        alert("Employee Deleted")
        
      }else{
        alert("Error")
        console.log(result);
      }
    }
  return (
    <div>
      <h1 className='text-center'>Employee Details</h1>
      <table className='w-75 m-5 shadow table table-bordered'>
      <thead>
        <tr className='text-center'>
          <th>Name</th>
          <th>Email</th>
          <th>Age</th>
          <th>Designation</th>
          <th>Salary</th>
          <th>Experience</th>
          <th>Place</th>
          <th>Operations</th>
        </tr>
      </thead>
      <tbody>
        { 
         user?.length > 0 ?
         user?.map((item,index)=>(
          <tr className='text-center' key={index}>
          <td>{item?.name}</td>
          <td>{item?.email}</td>
          <td>{item?.age}</td>
          <td>{item?.desig}</td>
          <td>{item?.salary}</td>
          <td>{item?.experience}</td>
          <td>{item?.place}</td>
          <td className='d-flex justify-content-center'>
              <Edit user={item}/>
              <button className='btn btn-danger ms-3' onClick={()=>handleDelete(item._id)}>Delete</button>
          </td>
      </tr>
        )):"Nothing to Display"    
        }
      </tbody>
     </table>
    </div>
  )
}

export default EmpTable
