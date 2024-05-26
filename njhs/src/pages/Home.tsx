// Elements
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import Mission from '../components/Mission'
import Services from '../components/homepage/Services'
import Footer from '../components/Footer'
import About from '../components/homepage/About'
import Donate from '../components/homepage/Donate'

export default function Home() {
  return (
    <>
        <Navbar></Navbar>
        <Hero></Hero>
        <Mission></Mission>
        <Services></Services>
        <Donate></Donate>
        <About></About>
        <Footer></Footer>
    </>
  )
}
