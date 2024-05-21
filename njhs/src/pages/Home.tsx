import React from 'react'

// Elements
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Services from '../components/homepage/Services'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Mission></Mission>
        <Services></Services>
        <Footer></Footer>
    </>
  )
}
