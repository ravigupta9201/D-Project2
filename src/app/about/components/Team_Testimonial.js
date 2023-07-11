"use client";

import { Card, Container, Row, Col } from "react-bootstrap";
import cardData from "./Card_Data";

import Image from "next/image";
import styles from "@/app/about/styles/team_testimonial.module.css";

const Team_Testimonial = () => {
  const targetIndexBottom = [2];
  const targetIndexTop = [3];
  const targetIndex = [5];
  const targetIndexEight = [8];

  return (
    <>
      <Container>
        <div>
          <Row>
            <Col lg={6} className="my-2">
              <h3>Meet Our Team</h3>
              <p>
                Massive Media is an independent branding and experience design
                agency. Their services have a great variety, such as branding,
                digital marketing, web design etc. The Vancouver-based agency
                has a modern and elegant website with great visuals.
              </p>
            </Col>

            {cardData.map((card, index) => (
              <Col key={index} lg={3} className="my-2">
                {targetIndexTop.includes(index) && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <div className={styles.circle_top}></div>
                      <div className={styles.circle_bottom}></div>
                    </div>
                  </>
                )}

                {targetIndex.includes(index) && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <div className={styles.circle_top}></div>
                      <div className={styles.circle_bottom}></div>
                    </div>
                  </>
                )}

                <Card className={styles.card_container}>
                  <p>{card.content}</p>
                  <div style={{ display: "flex" }}>
                    <Image
                      src={card.imageUrl}
                      alt="team testimonial image"
                      width={50}
                      height={50}
                    />
                    <div>
                      <h4>{card.name}</h4>
                      <p>{card.title}</p>
                    </div>
                  </div>
                </Card>

                {targetIndexBottom.includes(index) && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                        marginTop: "20px",
                      }}
                    >
                      <div className={styles.circle_top}></div>
                      <div className={styles.circle_bottom}></div>
                    </div>
                  </>
                )}

                {targetIndexEight.includes(index) && (
                  <>
                    <div
                      style={{
                        display: "flex",
                        justifyContent: "center",
                        gap: "5px",
                        marginBottom: "20px",
                      }}
                    >
                      <div className={styles.circle_top}></div>
                      <div className={styles.circle_bottom}></div>
                    </div>
                  </>
                )}
              </Col>
            ))}
          </Row>
        </div>
      </Container>
    </>
  );
};

export default Team_Testimonial;
