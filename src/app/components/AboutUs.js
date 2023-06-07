import Container from "react-bootstrap/Container";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import styles from "../styles/aboutUs.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <Container fluid>
        <Row className={styles.container}>
          <Col lg={6}>
            <h2>Welcome to Dynamic Skills</h2>
            <p>
              Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores
              quia rerum natus voluptate voluptates odit ducimus consectetur
              voluptatem obcaecati, eligendi itaque quasi delectus at officiis
              quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Dolores quia rerum natus voluptate
              voluptates odit ducimus consectetur voluptatem obcaecati, eligendi
              itaque quasi delectus at officiis quas porro unde aperiam ipsa.
            </p>
            <Link href="#link">
              <Button
                variant="custom"
                style={{ background: "#f48020", color: "white" }}
              >
                Online Addmission
              </Button>
            </Link>
          </Col>
          <Col lg={6} className={styles.img_section}>
            <Row>
              <Col sm={12}>
              {/* className="img-fluid" */}
              <Image src="/img (1).png"  alt="about-section image"  width={630}  height={150}  />
              </Col>
            </Row>
            

            <Row>
              <Col sm={6}>
                <Image src="/img (2).png"  alt="about-section image2" width={300}  height={150}  />
              </Col>
              <Col sm={6}>
                <Image src="/web-designing.jpg" alt="about-section image3" width={300} height={150} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default AboutUs;
