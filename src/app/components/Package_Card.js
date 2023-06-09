import {Card, Container} from 'react-bootstrap';

import Image from 'next/image';
import styles from "../styles/packageCard.module.css"
import Link from 'next/link';

const Package_Card = ({imageUrl}) => {
  return (
    <Container>
    <Card className={styles.card_section}>
      <Card.Img variant="top" src={imageUrl} alt='card' height={250} />
      {/* <Image src="/web-designing.jpg" alt='card' width={300} height={400} /> */}
      <Card.Body>
        {/* <Card.Text> Mobile reparing  </Card.Text>
        <Card.Text>Basic Mobile Reparing</Card.Text>
        <Card.Text> Duration: 3 Months <Card.Link href="#">Learn More</Card.Link> </Card.Text> */}

        <p>Mobile reparing</p>
        <h5>Basic Mobile Reparing</h5>
        <div>
          <p>Duration: 3 Months</p>
          <Link href="#">Learn More</Link>
        </div>
        
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Package_Card
