"use client"
import React from 'react'
import Menubar from './components/Menubar'
import Banner from './components/Banner'
import AboutUs from './components/AboutUs'



const page = () => {
  return (
    <div>
      <Menubar />
      <Banner />
      <AboutUs />
    </div>
  )
}

export default page
