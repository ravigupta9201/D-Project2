
import { Container, Button, Row, Col } from 'react-bootstrap';



import styles from "../styles/banner.module.css"
import Link from 'next/link';

const Banner = () => {
  return (
  
      <Row className={styles.container}>
        <Col sm={6} className={styles.desc} > 
            <p style={{color: "#f48020"}}>A trusted digital agency</p>
            <h2>Quality Services,Your really want !</h2>
            <p>Creative Skills Pvt. Ltd. is training and employment service providing company. The company provides vocational training, entrepreneurship development services, career counseling and placement services.</p>
            <Link href="#link"><Button variant="custom" style={{background: "#f48020", color:"white"}}>Online Addmission</Button></Link>
        </Col>
        {/* <Col md={6}></Col> */}
      </Row>
   
  )
}

export default Banner
