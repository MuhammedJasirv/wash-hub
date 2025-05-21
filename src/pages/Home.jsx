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

const Home = () => {
  return (
    <div className="home-container">
      <div className="home-hero">
        <LandingPage />
        <Features />
        <About />
      </div>

      <div className="home-content">
        <Service />
        <Vision />
        <HowItWorks />
        <Pricing />
        <Footer />
      </div>
    </div>
  );
};

export default Home;
