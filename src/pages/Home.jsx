import React from 'react';
import './Home.scss';

import LandingPage from '../components/landingPage/LandingPage';
import FooterLandingPage from '../components/footerLandingPage/FooterLandingPage';
import About from '../components/about/About';
import Service from '../components/service/Service';
import Vision from '../components/vision/Vision';
import HowItWorks from '../components/howItWorks/HowItWorks';
import Pricing from '../components/pricing/Pricing';
import Footer from '../components/footer/Footer';
import Features from '../components/features/Features';
import WhatsAppButton from '../components/ui/WhatsAppChat';

const Home = () => {
  return (
    <div className="home-container">
      <div className='home-header'>
      <div className="home-hero">
        <section id='home'>
        <LandingPage />
        <Features />
        </section>
        <section id='about'>
        <About />
        </section>
      </div>
      </div>
      <div className="home-content">
        <section id="services">
        <Service />
        </section>
        <Vision />
        <HowItWorks />
        <section id='contact'>
        <Pricing />
        </section>
        <WhatsAppButton/>
        <Footer />
      </div>
    </div>
  );
};

export default Home;
