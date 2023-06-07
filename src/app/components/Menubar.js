" use client "

import {Container, Nav, Navbar, NavDropdown, Button } from 'react-bootstrap';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Button from 'react-bootstrap/Button';
// import 'bootstrap/dist/css/bootstrap.css';

import Image from 'next/image';

const Menubar = () => {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">
          <Image src="/logo.svg" alt='dynamic-logo' width={200} height={50} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto justify-content-center align-items-center">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">About Us</Nav.Link>
            <Nav.Link href="#link">Training</Nav.Link>
            <Nav.Link href="#link">Placement</Nav.Link>
            <NavDropdown title="Media" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Gallary</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#link">Contact Us</Nav.Link>
            <Nav.Link href="#link"><Button variant="custom" style={{background: "#f48020", color:"white"}}>Online Addmission</Button></Nav.Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Menubar
