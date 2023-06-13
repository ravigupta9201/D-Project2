import {Container, Button, Row, Col} from "react-bootstrap";


import styles from "../styles/aboutUs.module.css";
import Image from "next/image";
import Link from "next/link";

const AboutUs = () => {
  return (
    <>
      <div className={styles.container}>
      <Container>
        <Row>
          <Col className={styles.desc} lg={6} md={12} sm={12}>
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
            <Link href="/about">
              <Button
                variant="custom"
                style={{ background: "#f48020", color: "white", padding: "8px 30px" }}
              >
                Read more
              </Button>
            </Link>
          </Col>
          <Col lg={6} md={12} sm={12} >
            <Row >
              <Col>
              {/* className="img-fluid" */}
              <Image className={styles.imageWrapper} src="/img (1).png"  alt="about-section image"  width={630}  height={150}  />
              </Col>
            </Row>
            

            <Row >
              <Col>
                <Image className={styles.imageWrapper}  src="/img (2).png"  alt="about-section image2" width={300}  height={150}  />
              </Col>
              <Col>
                <Image className={styles.imageWrapper} src="/web-designing.jpg" alt="about-section image3" width={300} height={150} />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
      </div>
    </>
  );
};

export default AboutUs;
