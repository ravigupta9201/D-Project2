" use client ";

import { Container, Nav, Navbar, NavDropdown, Button } from "react-bootstrap";
import menubarStyles from "../styles/menubar.module.css";
import commonStyles from "@/app/styles/common_style.module.css"

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const Menubar = () => {

  const [clickedLink, setclickedLink] = useState('')
  const handleClickedLink = (link)=>{
    setclickedLink(link)
  }


  const [ image, setImage ] = useState("/logo.svg")
  useEffect( ()=>{
    const handleImageScroll = () => {
      const scrollPosition = window.scrollY;
      if(scrollPosition>100){
        setImage("/logo2.svg")
      } else {
        setImage("/logo.svg")
      }
    }

    window.addEventListener("scroll", handleImageScroll)

    return () => {
      window.removeEventListener("scroll", handleImageScroll)
    }

  }, [] );



  const [scrolledBackgroundColor, setScrolledBackgroundColor] = useState(false);
  useEffect( () => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      if ( scrollPosition > 100) {
        setScrolledBackgroundColor(true);
      } else {
        setScrolledBackgroundColor(false);
      }
    };


    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll)
    };

  }, [] );

  const navbarClassName = scrolledBackgroundColor ? `${menubarStyles.scrolled}` : `${menubarStyles.withoutScrolled}` ;


  return (
    <Navbar expand="lg" className={navbarClassName} >
      <Container>
        <Nav className="mr-auto">
          <Link href="/">
            <Image src={image} alt="dynamic-logo" width={200} height={50} className={commonStyles.imageWrapper} />
          </Link>
        </Nav>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse  id="basic-navbar-nav" >
            <Nav className={menubarStyles.navLink} >

              <ul  className={menubarStyles.navbarListUl}>
                <li>
                  <Link href="/" onClick={ ()=>{handleClickedLink("home")}} style={{ color: clickedLink === "home" ? "#b3005a" : ""}} >Home</Link>
                </li>
                <li>
                  <Link href="/about" onClick={ ()=> {handleClickedLink("about")} } style={{ color: clickedLink=== "about" ? "#b3005a" : "" }} >About Us</Link>
                </li>
                <li>
                  <Link href="/training" onClick={ ()=>{handleClickedLink("training")}} style={{ color: clickedLink=== "training"? "#b3005a" : "" }}>Training</Link>
                </li>
                <li>
                  <Link href="/placement" onClick={ ()=>{handleClickedLink("placement")}} style={{ color: clickedLink=== "placement"? "#b3005a" : "" }} >Placement</Link>  
                </li>
                
                <NavDropdown title="Media" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">News</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Gallary</NavDropdown.Item>
                </NavDropdown>

                <li>
                  <Link href="contact">Contact Us</Link>
                </li>
                
                <Link href="/addmission">
                  <Button
                    variant="custom"
                    style={{ background: "#054F7E", color: "white" }}
                  >
                    Online Addmission
                  </Button>
                </Link>
                
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
