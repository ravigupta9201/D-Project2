"use client"

import Hero_Section from "../about/components/Hero_Section"
import Image from "next/image"
import placement_apiData from "./Placement_API"

import styles from "@/app/placement/placement.module.css"
import { Col, Container, Row } from "react-bootstrap"

const Placement = () => {
  return (
    <>
      <Hero_Section title={"placement"} link={"Home || Placement"} />

      <Container>
        <div style={{margin:"50px 0"}}>
        <Row>
          <h2 style={{color:"#054F7E", marginBottom:"50px"}}>Our Placement Partner</h2>
            {placement_apiData.map((cardApi)=> (
             
                <Col key={cardApi.id} lg ={2} md={3} sm={4} xs={6} className="py-2">
                
                  <div  className={styles.img_container}>
                    <Image src={cardApi.imageUrl} alt={"placement img"} width={80} height={40} ></Image>
                    <p className={styles.logo_title}>{cardApi.logoTitle}</p>
                  </div>
            
                </Col>
             
            )) }
         </Row>
        </div>        
      </Container>
    </>
  )
}

export default Placement
