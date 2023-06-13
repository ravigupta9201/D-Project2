import {Card, Container} from 'react-bootstrap';

import Image from 'next/image';
import styles from "../styles/packageCard.module.css"
import Link from 'next/link';

const Package_Card = ({imageUrl}) => {
  return (
    <Container>
    <Card>
      <Card.Img variant="top" src={imageUrl} alt='card' height={250} />
      <Card.Body>
        <p>Mobile reparing</p>
        <h5>Basic Mobile Reparing</h5>
        <div style={{display:"flex", justifyContent:"space-between", alignItems:"center"}}>
          <p>Duration: 3 Months</p>
          <div style={{ display:"flex", alignItems:"center", gap:"5px" }}
>
            <Link href="/training">Learn More</Link>
            <Image src="/dbarrow.svg" alt='arrow' width={10} height={10} />
          </div>
        </div>
        
      </Card.Body>
    </Card>
    </Container>
  )
}

export default Package_Card
