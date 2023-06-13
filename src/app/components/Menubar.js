" use client ";

import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import styles from "../styles/common_style.module.css";
import menubarStyles from "../styles/menubar.module.css";

import Image from "next/image";
import Link from "next/link";

const Menubar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top" >
      <Container>
        <Nav className="mr-auto">
          <Link href="/">
            <Image src="/logo.svg" alt="dynamic-logo" width={200} height={50} />
          </Link>
        </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav" >
            <Nav className="ms-auto" >
              <ul  className={menubarStyles.navbarListUl}>
                <li>
                  <Link href="/">Home</Link>
                </li>
                <li>
                  <Link href="/about">About Us</Link>
                </li>
                <li>
                  <Link href="/training">Training</Link>
                </li>
                <li>
                  <Link href="/placement">Placement</Link>
                </li>
                {/* <li> */}
                <NavDropdown title="Media" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Gallary</NavDropdown.Item>
                </NavDropdown>
                {/* </li> */}
                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                {/* <li> */}
                <Link href="/addmission">
                  <Button
                    variant="custom"
                    style={{ background: "#f48020", color: "white" }}
                  >
                    Online Addmission
                  </Button>
                </Link>
                {/* </li> */}
              </ul>
            </Nav>
          </Navbar.Collapse>
          
      </Container>
    </Navbar>





    // <Navbar bg="light" expand="lg">
    //   <Container>
    //     <Navbar.Brand href="/"><Image src="/logo.svg" alt="dynamic-logo" width={200} height={50} /></Navbar.Brand>
    //     <Navbar.Toggle aria-controls="basic-navbar-nav" />
    //     <Navbar.Collapse id="basic-navbar-nav" >
    //       <Nav  className={menubarStyles.navbarList}>
    //         <Nav.Link href="/">Home</Nav.Link>
    //         <Nav.Link href="/about">About Us</Nav.Link>
    //         <Nav.Link href="/training">Training</Nav.Link>
    //         <Nav.Link href="/placement">Placement</Nav.Link>
    //         <NavDropdown title="Media" id="basic-nav-dropdown">
    //           <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
    //           <NavDropdown.Item href="#action/3.2">Gallary</NavDropdown.Item>
    //         </NavDropdown>
    //         <Nav.Link href="/contact">Contact Us</Nav.Link>
    //         <Nav.Link href="/addmission"><Button
    //            variant="custom"
    //                  style={{ background: "#f48020", color: "white" }}
    //               >
    //                  Online Addmission
    //              </Button></Nav.Link>
    //       </Nav>
    //     </Navbar.Collapse>
    //   </Container>
    // </Navbar>
  );
};

export default Menubar;
