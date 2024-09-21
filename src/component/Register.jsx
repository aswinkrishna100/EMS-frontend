import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { addAdminAPI } from '../services/allAPI'

function Register() {

  const [admin,setAdmin] = useState({
    name:"",
    email:"",
    password:""
  })
  
  const handleAdd = async(e)=>{
    e.preventDefault()
    const {name,email,password} = admin
    if(!name || !email || !password){
      alert("Please fill the Form Completely")
    }else{
      const result = await addAdminAPI(admin)
      if(result.status==200){
        alert("Registration Successfully")
        setAdmin({
          name:"",
          email:"",
          password:""
        })
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
        <form className='shadow'>
          <h2 className='mb-3 ms-4' style={{marginTop:"100px"}}>Register Form</h2>
         <input type="email" className='form-control w-75 mb-3 ms-4' placeholder='Enter Name' value={admin.name} onChange={(e)=>setAdmin({...admin,name:e.target.value})}/>
          <input type="email" className='form-control w-75 mb-3 ms-4' placeholder='Enter Email ID' value={admin.email} onChange={(e)=>setAdmin({...admin,email:e.target.value})} />
          <input type="password" className='form-control w-75 mb-3 ms-4' placeholder='Enter Password' value={admin.password} onChange={(e)=>setAdmin({...admin,password:e.target.value})} />
          <button className='btn btn-primary me-2 mb-3 ms-4'><Link to={'/login'} style={{color:"white", textDecoration:"none"}} onClick={(e)=>handleAdd(e)}>Register</Link></button>
          <Link to={'/login'}>ExistingUser/Login</Link>
        </form>
        </div>
        <div className="col"></div>
       </div>
    </div>
  )
}

export default Register
