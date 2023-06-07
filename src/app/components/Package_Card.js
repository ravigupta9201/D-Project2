import Card from 'react-bootstrap/Card';

import Image from 'next/image';

const Package_Card = ({imageUrl}) => {
  return (
    <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src={imageUrl} alt='card' height={300} />
      {/* <Image src="/web-designing.jpg" alt='card' width={300} height={400} /> */}
      <Card.Body>
        <Card.Text> Mobile reparing  </Card.Text>
        <Card.Text>Basic Mobile Reparing</Card.Text>
        <Card.Text> Duration: 3 Months <Card.Link href="#">Learn More</Card.Link> </Card.Text>
        
      </Card.Body>
    </Card>
  )
}

export default Package_Card
