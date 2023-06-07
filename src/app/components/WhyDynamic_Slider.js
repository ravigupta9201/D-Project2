"use client"

import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import React, { Component } from "react";
import Slider from "react-slick";
import { Container } from "react-bootstrap";

import WhyDynamic_Card from "./WhyDynamic_Card";

const WhyDynamic_Slider = () => {

    const settings = {
        // dots: true,
        infinite: true,

        slidesToShow: 3,
        // slidesToScroll: 1,
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
            breakpoint: 700,
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
    <Container className="my-5" style={{}}>
        <Slider style={{display:"flex", justifyContent:"space between", gap:"20px" }} {...settings}>
            <div>
                <WhyDynamic_Card />
            </div>
            <div>
                <WhyDynamic_Card />
            </div>
            <div>
                <WhyDynamic_Card />
            </div>
        </Slider>
    </Container>
  )
}

export default WhyDynamic_Slider
