import React, { useContext, useEffect, useState } from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import { EmpContext } from '../context/EmpContext';

function Header() {
  const {addResponse} = useContext(EmpContext)
  const [token,setToken]= useState("")

  useEffect(()=>{
    const getToken = sessionStorage.getItem('token')
    if(getToken){
      setToken(getToken)
    }
  },[addResponse])
  return (
    <div>
       <Navbar expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand href=""><Link to={'/'} style={{color:"black", textDecoration:"none"}} className='fs-2 fw-larger'>EMS</Link></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-4">
           { 
           token?
            <>
              <Nav.Link href=""><Link style={{color:"black", textDecoration:"none"}} to={'/form'} className='fs-5' >Add Employee</Link></Nav.Link>
              <Nav.Link href=""><Link style={{color:"black", textDecoration:"none"}} to={'/table'} className='fs-5' >View Employee</Link></Nav.Link>
            </>
            :
            <Nav.Link href=""><Link style={{color:"black", textDecoration:"none"}} to={'/login'} className='fs-5' >Login</Link></Nav.Link>
            }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </div>
  )
}

export default Header
