"use client"
import styles from "@/app/contact/contact.module.css"

import { Container, Row, Col } from "react-bootstrap"
import Hero_Section from "../about/components/Hero_Section"
import Image from "next/image"
import { useState } from "react"


const Contact = () => {




  return (
    <>
      <Hero_Section title={"Contact Us"} link={"Home || Contact Us"} />

      <Container>
      <Row>
        <Col lg={5}>
          <h1>Get In Touch</h1>
          <Image src={"/contactus.svg"} alt="contact us img" width={400} height={400} />
        </Col>

        <Col lg={7}>
          <h2>Ready To Get Started?</h2>
          <div >

            <form action="">
                  <div className={styles.grid_two_section}>
                    <div className={styles.form}>
                      <input className={styles.textbox} md={6} type="text" placeholder=" " />
                      <label className={styles.form_label} htmlFor="">Name</label>
                    </div>
                  
                    <div className={styles.form}>
                      <input className={styles.textbox} md={6} type="email" placeholder=" " />
                      <label className={styles.form_label} htmlFor="">Email</label>
                    </div>
                  </div>
                  
                  <div className={styles.grid_two_section}>
                    <div className={styles.form}>
                      <input className={styles.textbox} md={6} type="text" placeholder=" " />
                      <label className={styles.form_label} htmlFor="">Phone</label>
                    </div>

                    <div  className={styles.form}>
                      <input className={styles.textbox} md={6} type="text" placeholder=" " />
                      <label className={styles.form_label} htmlFor="">Phone</label>
                    </div>
                    
                  </div>

                  

              
              <div className={styles.form}>
                <textarea className={styles.textbox} name="" id=""  rows="8" placeholder=" "></textarea>
                <label className={styles.form_label} htmlFor="">Your Message</label>
              </div>
            </form>
            
          </div>
        </Col>
      </Row>
      </Container>


      
    </>
  )
}

export default Contact
