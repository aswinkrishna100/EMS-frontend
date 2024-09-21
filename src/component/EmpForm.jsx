import React from 'react'
import { useContext, useState } from 'react';
import { EmpContext } from '../context/EmpContext';
import { addUserAPI } from '../services/allAPI';
import { Link } from 'react-router-dom';

function EmpForm() {
    const [employee,setEmployee] = useState({
        name:"",
        email:"",
        age:"",
        desig:"",
        salary:"",
        experience:"",
        place:""
      })
      const {setAddResponse} = useContext(EmpContext)
      
      const handleAdd = async(e)=>{
        e.preventDefault()
        const {name,email,age,desig,salary,experience,place} = employee
        if(!name || !email || !age || !desig || !salary || !experience || !place){
          alert("Please fill the form completely")
        }else{
          const token = sessionStorage.getItem('token')
          if(token){
            var reqHeader = {
              "Content-Type":"application/json",
              "Authorization": `Bearer ${token}`
            }
          }
          const result = await addUserAPI(employee,reqHeader)
          if(result.status==200){
            alert("Employee Added")
            setEmployee({
              name:"",
              email:"",
              age:"",
              desig:"",
              salary:"",
              experience:"",
              place:""
                  })
          setAddResponse(result)
                  
          }else{
            alert("Error")
            console.log(result);
          }
        }
      }
  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
        <form>
          <h1 className='m-3 text-center'>Employee Form</h1>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Name' value={employee.name} onChange={(e)=>setEmployee({...employee,name:e.target.value})}/>
          <input type="email" className='form-control m-3 w-100' placeholder='Enter Email' value={employee.email} onChange={(e)=>setEmployee({...employee,email:e.target.value})}/>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Age' value={employee.age} onChange={(e)=>setEmployee({...employee,age:e.target.value})}/>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Designation' value={employee.desig} onChange={(e)=>setEmployee({...employee,desig:e.target.value})}/>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Salary' value={employee.salary} onChange={(e)=>setEmployee({...employee,salary:e.target.value})}/>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Experience' value={employee.experience} onChange={(e)=>setEmployee({...employee,experience:e.target.value})}/>
          <input type="text" className='form-control m-3 w-100' placeholder='Enter Place' value={employee.place} onChange={(e)=>setEmployee({...employee,place:e.target.value})}/>
          <button className='btn btn-success' style={{marginLeft:"200px"}} onClick={(e)=>handleAdd(e)}><Link to={'/table'} style={{color:"white", textDecoration:"none"}}>Add Employee</Link></button>
     </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default EmpForm
