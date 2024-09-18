import { useState } from 'react';
import './App.css';
import EmpTable from './component/EmpTable';
import { addUserAPI } from './services/allAPI';

function App() {
  const [employee,setEmployee] = useState({
    name:"",
    email:"",
    age:"",
    desig:"",
    salary:"",
    place:""
  })
  
  const handleAdd = async(e)=>{
    e.preventDefault()
    const {name,email,age,desig,salary,place} = employee
    if(!name || !email || !age || !desig || !salary || !place){
      alert("Please fill the form completely")
    }else{
      const result = await addUserAPI(employee)
      if(result.status==200){
        alert("Employee Added")
      }else{
        alert("Error")
        console.log(result);
      }
    }
  }


  return (
    <div className="App">
     <form>
      <h1 className='m-3'>Employee Form</h1>
      <input type="text" className='form-control m-3 w-25' placeholder='Enter Name' onChange={(e)=>setEmployee({...employee,name:e.target.value})}/>
      <input type="email" className='form-control m-3 w-25' placeholder='Enter Email' onChange={(e)=>setEmployee({...employee,email:e.target.value})}/>
      <input type="text" className='form-control m-3 w-25' placeholder='Enter Age' onChange={(e)=>setEmployee({...employee,age:e.target.value})}/>
      <input type="text" className='form-control m-3 w-25' placeholder='Enter Designation' onChange={(e)=>setEmployee({...employee,desig:e.target.value})}/>
      <input type="text" className='form-control m-3 w-25' placeholder='Enter Salary' onChange={(e)=>setEmployee({...employee,salary:e.target.value})}/>
      <input type="text" className='form-control m-3 w-25' placeholder='Enter Place' onChange={(e)=>setEmployee({...employee,place:e.target.value})}/>
      <button className='btn btn-success ms-3 ' onClick={(e)=>handleAdd(e)}>Add Employee</button>
     </form>
    <EmpTable/>
    </div>
  );
}

export default App;
