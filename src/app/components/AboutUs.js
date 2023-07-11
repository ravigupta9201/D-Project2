"use client"

import { Container, Button, Row, Col } from "react-bootstrap";


import styles from "../styles/aboutUs.module.css";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const AboutUs = ({children, showButton = true }) => {

  // Boolean [showButton, setShowButton] = useState(true)


  return (
    <>
      <div className={styles.container}>
        <Container>
          <Row>
            <Col className={styles.desc} lg={6} md={6}>
              <h2
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Welcome to Dynamic Skills
              </h2>
              <p
                data-aos="fade-right"
                data-aos-offset="300"
                data-aos-easing="ease-in-sine"
              >
                Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores
                quia rerum natus voluptate voluptates odit ducimus consectetur
                voluptatem obcaecati, eligendi itaque quasi delectus at officiis
                quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
                consectetur adipisicing elit. Dolores quia rerum natus voluptate
                voluptates odit ducimus consectetur voluptatem obcaecati,
                eligendi itaque quasi delectus at officiis quas porro unde
                aperiam ipsa.
              </p>

              { showButton &&  <Link href="/about" data-aos="fade-up">
                <Button variant="custom" style={{ background: "#f48020", color: "white", padding: "8px 30px",}}>
                    Read more
                </Button>
              </Link> }

              
              
            </Col>
            <Col lg={6} md={6}>
              {/* className={styles.imageWrapper} */}

              <Row data-aos="zoom-in">
                <Col>
                  {/* className="img-fluid" */}

                  <Image
                    src="/img (1).png"
                    alt="about-section image"
                    width={630}
                    height={150}
                    className={styles.imageSize}
                  />
                </Col>
              </Row>

              <Row data-aos="zoom-in">
                <Col>
                  <Image
                    src="/img (2).png"
                    alt="about-section image2"
                    width={300}
                    height={150}
                    className={styles.imageSize}
                  />
                </Col>
                <Col>
                  <Image
                    src="/web-designing.jpg"
                    alt="about-section image3"
                    width={300}
                    height={150}
                    className={styles.imageSize}
                  />
                </Col>
              </Row>
            </Col>
          </Row>

          <div>{children}</div>
        </Container>
      </div>
    </>
  );
};

export default AboutUs;
