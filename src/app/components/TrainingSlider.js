"use client"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";

import Package_Card from "./Package_Card";


import { Container } from "react-bootstrap";

import styles from "../styles/trainingSlider.module.css"


const TrainingSlider = () => {

    const settings = {
      dots: true,
      dotsClass: "slick-dots slick-thumb",
      infinite: true,
      slidesToShow: 4,
      slidesToScroll: 1,
      initialSlide: 0,
    //   autoplay: true,
      speed: 2000,
      autoplaySpeed: 2000,
      cssEase: "linear",
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            initialSlide: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    };

  return (
    <Container >
        <h2> Training </h2>
        <p>Lorem ipsum dolor sit amt consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates odit ducimus consectetur voluptatem obcaecati, eligendi itaque quasi delectus at officiis quas porro unde aperiam ipsa. Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores quia rerum natus voluptate voluptates.</p>
        <Slider {...settings}>
          <div>
            <Package_Card imageUrl={"/slider (1).png"} />
          </div>
          <div>
            <Package_Card imageUrl={"/slider (2).png"} />
          </div>
          <div>
            <Package_Card imageUrl={"/slider (3).png"} />
          </div>
          <div>
            <Package_Card imageUrl={"/slider (4).png"} />
          </div>
          <div>
            <Package_Card imageUrl={"/pic2.jpg"} />
          </div>
          
        </Slider>
      </Container>
  )
}

export default TrainingSlider
