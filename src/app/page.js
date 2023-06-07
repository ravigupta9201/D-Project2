"use client"
import React from 'react'
import Menubar from './components/Menubar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'
import Package_Card from './components/Package_Card'
import TrainingSlider from './components/TrainingSlider'
import WhyDynamic_Card from './components/WhyDynamic_Card'
// import { Container } from 'react-bootstrap'

import 'bootstrap/dist/css/bootstrap.css';



import WhyDynamic_Slider from './components/WhyDynamic_Slider'
import Footer from './components/Footer'
import CenterModeCarousel from './components/CenterModeCarousel'



const page = () => {

  const testimonials = [
    {
      imageUrl: "/men.jpg",
      name: 'John Doe',
      title: "React Developer",
      content: "The setup is fairly straightforward, and the learning curve is very manageable. It's really nice to have a  reasonable set of defaults for categories and account structure.In general, pivotalERP is the finest accounting software for start-ups and Large businesses. The following functionalities are included in this simple to use application: Assign Shortcuts, Create Quick Reports a UX that is easy to use, Software as a service (SaaS): It's simple to use and integrates well with the rest of the Pivotal Erp. Updates that arrive quickly and on a frequent basis.",
    },
    {
      imageUrl: "/men.jpg",
      name: 'Sushant ',
      title: "ui/ux designer",
      content: 'It was a great overall experience and was simple enough for a smaller business to implement while still having the horsepower. Having worked with a few erps, this is one of the cleanest UIs and has been a great experience with getting data out of it. The datacubes on the backend have been really good as well. Order allocation is clean and simple and has warehousing plugins that work well too.',
    },
    {
      imageUrl: "/men.jpg",
      name: 'Bibek Sharma',
      title: "QA Developer",
      content: `"the QA developer at Dynamic Technosoft is a highly skilled and reliable professional who consistently delivers exceptional results. Their commitment to excellence, coupled with their technical expertise, make them an invaluable member of any software development team. I wholeheartedly recommend them for any organization seeking a talented QA developer."`,
    },
    // Add more testimonials here
  ];

  return (
    <div>
      <Menubar />
      <Banner />
      <AboutUs />
      {/* <Package_Card /> */}
      <TrainingSlider />
      
      {/* <Container className='my-5' style={{ display: 'flex' , gap:"25px", }}>
        <WhyDynamic_Card />
        <WhyDynamic_Card />
        <WhyDynamic_Card />
      </Container> */}

      <WhyDynamic_Slider  />

      <CenterModeCarousel testimonials={testimonials} />

      <Footer />

    </div>
  )
}

export default page
