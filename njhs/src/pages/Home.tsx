import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Services from '../components/homepage/Services'

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Services></Services>
    </>
  )
}
