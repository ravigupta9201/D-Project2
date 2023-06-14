import { Card, Container } from "react-bootstrap";

import Image from "next/image";
import styles from "../styles/whyDynamicCard.module.css";
import commonStyles from "@/app/styles/common_style.module.css"


const WhyDynamic_Card = ({ heading }) => {
  return (
    <>
      

        <Container>
          <Card className={styles.card} data-aos="zoom-in" data-aos-offset="300" data-aos-easing="ease-in-sine">
            <div className={styles.heading}>
              <Image src="/badge.svg" alt="my-logo" width={25} height={25} className={commonStyles.imageWrapper} />
              <h5>{heading}</h5>
            </div>
            <Card.Body>
              <p>
                Lorem ipsum dolor sit amet consectetur. Nec augu egestas etiam
                tempor fringilla. Imperdiet faucibus volutpat nisi neque arcu
                odio enim non. Laoreet dis sed nisi diam urna. Quis adipiscing
                facilisis ut lorem sollicitudin interdum.etiam tempor fringilla.
                Imperdiet faucibus
              </p>
            </Card.Body>
          </Card>
        </Container>
    </>
  );
};

export default WhyDynamic_Card;
