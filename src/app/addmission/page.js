"use client";

import Image from "next/image";
import styles from "@/app/addmission/addmission.module.css";
import { useState, useRef } from "react";
import { Container, Row, Col, Form, InputGroup, Button } from "react-bootstrap";

const Addmission = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    // setSelectedImage(URL.createObjectURL(file));
    const imageUrl = typeof window !== "undefined" ? URL.createObjectURL(file) : null;
    setSelectedImage(imageUrl);
  };

  const inputRef = useRef();

  const handleImageClick = (event) => {
    inputRef.current.click();
  };



  const [validated, setValidated] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (
    <>
      <Container>
        <Row style={{ margin: "50px 0px" }}>
          <Col>
            <div style={{ display: "grid", justifySelf: "center" }}>
              <h1>Admission Form</h1>
              <p>
                Please enter your details into the fields below, we will respond
                to your enquiry shortly via email.
              </p>
            </div>
          </Col>

          <Col md={2}>
            <div onClick={handleImageClick}>
              <div className={styles.image_container}>
                {selectedImage && (
                  <Image
                    src={selectedImage}
                    alt="Selected"
                    width={200}
                    height={200}
                  />
                )}
              </div>

              <input
                ref={inputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                style={{ display: "none" }}
              />
              <button className={styles.upload_btn}>Upload Photo</button>
            </div>
          </Col>
        </Row>

        <div>
          <h1>Personal Details:</h1>
          <Form noValidate validated={validated} onSubmit={handleSubmit}>
            <Row className="mb-3">
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="m-0">First name <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="First name"
                  style={{width:"80%"}}
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="m-0">Middle name <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Middle name"
                  style={{width:"80%"}}
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="m-0">Last name <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Last name"
                  style={{width:"80%"}}
                  
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="m-0">Phone Number <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Phone Number"
                  style={{width:"80%"}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="m-0">Email <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Email"
                  style={{width:"80%"}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom02">
                <Form.Label className="m-0">Gender <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="email"
                  placeholder="Gender"
                  style={{width:"80%"}}
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <h1>Permanent Address:</h1>
              <Col md={4} >
                <label htmlFor="">Provinance <span style={{color:"red"}}>*</span></label>
                <Form.Select className="mb-3" style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your province</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col md={4} >
                <label htmlFor="">District <span style={{color:"red"}}>*</span></label>
                <Form.Select className="mb-3" style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your District</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col md={4} >
                <label htmlFor="">Municipality <span style={{color:"red"}}>*</span></label>
                <Form.Select className="mb-3" style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your Municipality</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col md={4} >
                <label htmlFor="">Ward No. <span style={{color:"red"}}>*</span></label>
                <Form.Select className="mb-3" style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your Ward No.</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col md={4} >
                <label htmlFor="">Street Name <span style={{color:"red"}}>*</span></label>
                <Form.Select className="mb-3" style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your Street Name</option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>
              

              <h1>Training:</h1>
              <Col md={4} >
                <label htmlFor="">Faculty <span style={{color:"red"}}>*</span></label>
                <Form.Select style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your Faculty </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <Col md={4} >
                <label htmlFor="">Duration <span style={{color:"red"}}>*</span></label>
                <Form.Select style={{width:"80%"}} aria-label="Default select example">
                  <option>Choose your Duration </option>
                  <option value="1">One</option>
                  <option value="2">Two</option>
                  <option value="3">Three</option>
                </Form.Select>
              </Col>

              <h1>Education:</h1>
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="m-0">Degree Name <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Degree Name"
                  style={{width:"80%"}}
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="m-0">School Name <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="School Name"
                  style={{width:"80%"}}
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>

              
              <Form.Group className="mb-3" as={Col} md="4" controlId="validationCustom01">
                <Form.Label className="m-0">Percentage / GPA <span style={{color:"red"}}>*</span></Form.Label>
                <Form.Control
                  required
                  type="text"
                  placeholder="Percentage / GPA"
                  style={{width:"80%"}}
                 
                />
                <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
              </Form.Group>
              
            </Row>

           
            
            <Button type="submit">Submit form</Button>
          </Form>
        </div>

        <div>
          
        </div>
      </Container>
    </>
  );
};

export default Addmission;
