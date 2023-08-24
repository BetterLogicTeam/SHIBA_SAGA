import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Saga_header.css"
import logo from "../Assets/logo.jpg"

import {AiOutlineMenu} from 'react-icons/ai'
import {RxCross2 } from 'react-icons/rx'
import { useState } from 'react';
import Sage_landing from '../Sage_landing/Sage_landing';
export default function Saga_header() {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  return (
    <div className='main_bg_saga'>
      <Navbar collapseOnSelect expand="lg" className=" nav_bar_fiexe">
      <Container>
        <Navbar.Brand href="#home" className='logo_area'>
       <img src={logo} alt="" />
        </Navbar.Brand>
        {/* <Navbar.Toggle aria-controls="responsive-navbar-nav" /> */}
        <span className='d-block d-lg-none' onClick={()=>setShow(!show)} >
        {
        
          show ? <><RxCross2 className='text-white fs-1' /> </>:<><AiOutlineMenu className='text-white fs-1'/></>
        }
        

        </span>
        <Navbar.Collapse id="responsive-navbar-nav" className={show ? "show":""}>
          <Nav className="links_main">
            <Nav.Link className='header_links' onClick={handleClose} href="#features">WoofPaper</Nav.Link>
            <Nav.Link className='header_links' onClick={handleClose} href="#pricing">Shiba Crush</Nav.Link>
            <Nav.Link className='header_links' onClick={handleClose} href="#pricing">ShibaSaga</Nav.Link>
            <Nav.Link className='header_links' onClick={handleClose} href="#pricing">Team</Nav.Link>
            <Nav.Link className='header_links' onClick={handleClose} href="#pricing">
info@shibasaga.com</Nav.Link>
          
          </Nav>
          <Nav className='ms-auto'>
           <button className='header_btn_here'>Buy $SHIA</button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    <Sage_landing/>

        
    
    </div>
  )
}
