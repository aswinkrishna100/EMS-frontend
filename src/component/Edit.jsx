import React, { useContext, useState } from 'react'
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { editUserAPI } from '../services/allAPI';
import { EmpContext } from '../context/EmpContext';

function Edit({user}) {
  const {setAddResponse} = useContext(EmpContext)
  
  const [show, setShow] = useState(false);

  const [editEmp,setEditEmp] = useState({
    id: user?._id,
    name: user?.name,
    email:user.email,
    age: user.age,
    desig: user.desig,
    salary : user.salary,
    experience : user.experience,
    place : user.place
  })
 
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const handleUpdate = async(e)=>{
    e.preventDefault()
    const {name,email,age,desig,salary,experience,place,id} = editEmp
    if(!name || !email || !age || !desig || !salary || !experience || !place || !id){
      alert("Please fill the form completely")
    }else{
      const token = sessionStorage.getItem('token')
          if(token){
            var reqHeader = {
              "Content-Type":"application/json",
              "Authorization": `Bearer ${token}`
            }
          }else{
            alert("Unauthorized User")
          }
          const result = await editUserAPI(editEmp,reqHeader)

      if(result.status==200){
        setAddResponse(result)
        alert("Employee Updated")
        handleClose()
        
      }else{
        alert("Error")
        console.log(result);
        handleClose()
      }
    }
   
  }
  
  return (
<div>
    <Button variant="secondary" onClick={handleShow}>Edit</Button>

      <Modal show={show} onHide={handleClose} backdrop="static" keyboard={false} >
        <Modal.Header closeButton>
          <Modal.Title>Employee Details</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <input type="text" className="form-control mb-2" value={editEmp.name} placeholder="Name" onChange={(e)=>setEditEmp({...editEmp, name:e.target.value})}/>
          <input type="email" className="form-control mb-2" value={editEmp.email} placeholder="Email" onChange={(e)=>setEditEmp({...editEmp, email:e.target.value})}/>
          <input type="text" className="form-control mb-2" value={editEmp.age} placeholder="Age" onChange={(e)=>setEditEmp({...editEmp, age:e.target.value})}/>
          <input type="text" className="form-control mb-2" value={editEmp.desig} placeholder="Designation" onChange={(e)=>setEditEmp({...editEmp, desig:e.target.value})}/>
          <input type="text" className="form-control mb-2" value={editEmp.salary} placeholder="Salary" onChange={(e)=>setEditEmp({...editEmp, salary:e.target.value})}/>
          <input type="text" className="form-control mb-2" value={editEmp.experience} placeholder="Experience" onChange={(e)=>setEditEmp({...editEmp, experience:e.target.value})}/>
          <input type="text" className="form-control mb-2" value={editEmp.place} placeholder="Place" onChange={(e)=>setEditEmp({...editEmp, place:e.target.value})}/>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="success" onClick={(e)=>handleUpdate(e)} >Update</Button>
        </Modal.Footer>
      </Modal>
</div>

  )
}

export default Edit
