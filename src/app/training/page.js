"use client";

import styles from "@/app/training/training.module.css";

import {
  Button,
  Card,
  Col,
  Container,
  Row,
  Dropdown,
  DropdownButton,
  Form,
  InputGroup,
} from "react-bootstrap";

import Hero_Section from "../about/components/Hero_Section";

import Image from "next/image";
import Package_Card from "../components/Package_Card";

const Training = () => {
  const options = [
    "deep and Machine Learning Course",
    "Data Science Course",
    "Python Course",
    "Mearn Stack Course",
    "QA Course",
  ];

  return (
    <>
      <Hero_Section title={"Training"} link={"Home || Training"} />

      <Container>
        <Card className="my-5 ">
          <div
            style={{
              display: "flex",
              background: "whitesmoke",
              padding: "20px 15px",
            }}
          >
            <div>
              <h2>Become Full Stack Developer With Mern Stack</h2>
              <p>
                Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores
                quia rerum natus voluptate voluptates odit ducimus consectetur
                voluptatem obcaecati, eligendi itaque quasi delectus at officiis
                quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores quia rerum natus voluptate
                voluptates.
              </p>
              <Button>Book Now</Button>
            </div>
            <div>
              <Image
                src="/web-designing.jpg"
                alt="training section image"
                width={300}
                height={300}
              />
            </div>
          </div>
        </Card>
      </Container>

      <Container>
        <div>
          <Row>

            <Col lg={4}>
              <div>
                <Form.Control
                  required
                  type="text"
                  list="dropdownoptions"
                  name="dropdownoptions"
                  placeholder="Choose an option"
                />
                <datalist id="dropdownoptions">
                  {options.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>
              </div>


              
            </Col>

            <Col lg={4}>
              <div>
                <Form.Control
                  required
                  type="text"
                  list="dropdownoptions"
                  name="dropdownoptions"
                  placeholder="Training Duration"
                />
                <datalist id="dropdownoptions">
                  {options.map((option, index) => (
                    <option key={index} value={option} />
                  ))}
                </datalist>
              </div>
            </Col>

            <Col lg={4}>
              <Button> Search Training</Button>
            </Col>

            
            

          </Row>

          <Row >
            {/* <Col lg={3} md={4}>
       
                <Package_Card  imageUrl={"/slider (1).png"}/>
                <Package_Card  imageUrl={"/slider (2).png"}/>
                <Package_Card  imageUrl={"/slider (3).png"}/>
                <Package_Card  imageUrl={"/slider (4).png"}/>
                <Package_Card  imageUrl={"/slider (2).png"}/>
                <Package_Card  imageUrl={"/slider (1).png"}/>
         
            </Col> */}

            <Col lg={3} md={6} className="my-3">
            <Package_Card  imageUrl={"/slider (1).png"}/>
            </Col>

            <Col lg={3} md={6} className="my-3"><Package_Card  imageUrl={"/slider (2).png"}/></Col>
            <Col lg={3} md={6} className="my-3"><Package_Card  imageUrl={"/slider (3).png"}/></Col>
            <Col lg={3} md={6} className="my-3"><Package_Card  imageUrl={"/slider (4).png"}/></Col>
            <Col lg={3} md={6} className="my-3"><Package_Card  imageUrl={"/slider (2).png"}/></Col>
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Training;
