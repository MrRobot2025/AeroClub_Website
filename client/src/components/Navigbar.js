import { Button, Navbar, Nav, NavDropdown, DropdownButton } from 'react-bootstrap';
import React, { useState } from "react";
import "../css/navbar.css";
import logo from "./circle-cropped.png";
import { Link, useHistory } from "react-router-dom";
import { toast } from 'react-toastify';
import { Link as Scroll } from 'react-scroll';

// const ScrollLink = Scroll.ScrollLink;


const Login = () => {

  const history = useHistory()
  const [loggedIn, setLoggedIn] = useState(localStorage.getItem('jwtToken') ? true : false)

  const handleLogout = () => {
    fetch('/api/signout', {
      method: 'post'
    }).then(res => res.json())
      .then(data => {
        localStorage.removeItem('jwtToken')
        setLoggedIn(false)
        toast.success(data.message)
        history.push('/')
      })
  }

  return (
    <>
      {
        loggedIn ?
          <DropdownButton title='Profile' variant='info' className="mr-sm-2 my-2 bt" drop='left'>
            <NavDropdown.Item href="/user/dashboard">Dashboard</NavDropdown.Item>
            <NavDropdown.Item onClick={handleLogout}>Logout</NavDropdown.Item>
          </DropdownButton>
          :
          <p className="bt"><Button variant="info" className="mr-sm-2 my-2"><Link to="/user/login" style={{ color: 'inherit', textDecoration: 'none' }}>Login</Link></Button></p>
      }
    </>
  )
}

export default function Navigbar() {


  return (
    <>
      <Navbar sticky="top" collapseOnSelect expand="lg" variant="dark" className="style top-bottom">
        <Navbar.Brand href="#home" className="title"><a><img src={logo} style={{ height: 50, marginRight: 5, marginLeft: 8 }} />AERO CLUB MNNIT</a></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link><Link to="/" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Home</Link></Nav.Link>
            <Nav.Link><Link to="/blogs" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Blogs</Link></Nav.Link>
            <Nav.Link ><Link to="/Gallery" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Gallery</Link></Nav.Link>
            <Nav.Link ><Link to="/projects" className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Projects</Link></Nav.Link>
            <NavDropdown title="Events" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item href="#action/3.3">AVISHKAR</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">PROSANG</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="More" id="basic-nav-dropdown" className="pad">
              <NavDropdown.Item ><Link to="/Alumni" style={{ color: 'inherit', textDecoration: 'none' }}>Our Alumnis</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="/news">News Section</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="https://tsaw.tech/">Our StartUps</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">Our Sponsors</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link><Scroll
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
              className="pad"
              style={{ color: 'inherit', textDecoration: 'none' }}
            > Contact
            </Scroll></Nav.Link>
            {/* <Nav.Link href="https://tsaw.tech/"><span className="pad" style={{ color: 'inherit', textDecoration: 'none' }}>Our StartUps</span></Nav.Link> */}
          </Nav>
          <p className="bt"><Button href="/sponsor" variant="light" className="mr-sm-2 my-2">Donate</Button></p>
          <Login />
        </Navbar.Collapse>
      </Navbar>
    </>
  );
}