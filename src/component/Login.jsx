import React, { useContext, useState } from 'react'
import { json, Link, useNavigate } from 'react-router-dom'
import { getAdminAPI } from '../services/allAPI'
import { EmpContext } from '../context/EmpContext'

function Login() {
  const {setAddResponse} = useContext(EmpContext)
  const navigate = useNavigate()
  const [login,setLogin] = useState({
    email:"",
    password:""
  })
  
  const getAdmin = async(e)=>{
    e.preventDefault()
    const result = await getAdminAPI(login)
    if(result.status==200){
      setAddResponse(result)
      sessionStorage.setItem('user',JSON.stringify(result.data.existingUser))
      sessionStorage.setItem('token',result.data.token)
      alert('Login Successful')
      navigate('/table')
    }else{
      alert("Incorrect email or password")
    }
}

  return (
    <div>
      <div className="row">
        <div className="col"></div>
        <div className="col">
       <form className='shadow' style={{height:"250px"}}>
          <h2 className='mb-3 ms-4' style={{marginTop:"100px"}}>Login Form</h2>
          <input type="email" className='form-control w-75 mb-3 ms-4' placeholder='Enter Email ID' value={login.email} onChange={(e)=>setLogin({...login,email:e.target.value})}/>
          <input type="password" className='form-control w-75 mb-3 ms-4' placeholder='Enter Password' value={login.password} onChange={(e)=>setLogin({...login,password:e.target.value})}/>
          <button className='btn btn-primary me-2 mb-3 ms-4'  onClick={(e)=>getAdmin(e)}> Login</button>
          <Link to={'/'} >Create New</Link>
       </form>
        </div>
        <div className="col"></div>
      </div>
    </div>
  )
}

export default Login
