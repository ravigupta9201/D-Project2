"use client"


import Team_Testimonial from "@/app/about/components/Team_Testimonial"


import Testimonial from "./components/Testimonial"
import Team_Member from "./components/Team_Member"
import Hero_Section from "./components/Hero_Section"
import AboutUs from "../components/AboutUs"

const About = () => {

  return (
    <>
    

      <Hero_Section title={"About Us"} link={"Home || About Us"} />

      <AboutUs showButton = {false} >  

       
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum eaque vero quam tenetur ipsum, quibusdam, temporibus, consequatur dicta dolore fugit maiores sunt. Saepe expedita eius quibusdam qui voluptates magni nam nulla labore quasi in neque esse ut voluptate nemo omnis dolores eligendi, ipsum corrupti cumque architecto! Quae id nesciunt animi.</p>

        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum dicta eos ad molestias unde deserunt magnam explicabo veniam nihil quas nemo maxime illo error ex enim aut eius necessitatibus quisquam qui ut temporibus cupiditate eligendi, odio non. Maxime hic accusamus incidunt magnam, officiis qui voluptatum. Odio ipsa nulla praesentium autem?</p>
      </AboutUs>
      <Team_Testimonial />
      {/* <Team_Testimonial api = {Team_Testimonial_Api} /> */}
      {/* <Our_team /> */}
      
    </>
  )
}

export default About
