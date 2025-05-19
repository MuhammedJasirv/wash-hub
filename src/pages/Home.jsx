import React from 'react'
import LandingPage from '../components/landingPage/LandingPage'
import FooterLandingPage from '../components/footerLandingPage/FooterLandingPage'
import About from '../components/about/About'
import Service from '../components/service/Service'
import Vision from '../components/vision/Vision'
import HowItWorks from '../components/howItWorks/HowItWorks'
import Pricing from '../components/pricing/Pricing'
import Footer from '../components/footer/Footer'

const Home = () => {
  return (
    <div>
        <LandingPage/>
        <About/>
        <Service/>
        <Vision/>
        <HowItWorks/>
        <Pricing/>
        <Footer/>
    </div>
  )
}

export default Home