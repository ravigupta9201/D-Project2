import { Container, Button, Row, Col } from "react-bootstrap";

import styles from "../styles/banner.module.css";
import Link from "next/link";

const Banner = () => {
  return (
    <div className={styles.container}>
      <Container>
        <Row >
          <Col className={styles.desc}  lg={6} md={12} sm={12}>
            <div>
              <p style={{ color: "#f48020" }}>A trusted digital agency</p>
              <h2>Quality Services,Your really want !</h2>
              <p>
                Creative Skills Pvt. Ltd. is training and employment service
                providing company. The company provides vocational training,
                entrepreneurship development services, career counseling and
                placement services.
              </p>
              <Link href="/about">
                <Button
                  variant="custom"
                  style={{
                    background: "#f48020",
                    color: "white",
                    padding: "8px 30px",
                  }}
                >
                  Read more
                </Button>
              </Link>
            </div>
          </Col>

          {/* <Col></Col> */}
        </Row>
      </Container>
    </div>
  );
};

export default Banner;
