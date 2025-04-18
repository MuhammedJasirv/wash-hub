// import { FaDatabase } from 'react-icons/fa';
import './Test.scss'; // Import global SCSS
import { useState } from 'react';
import Logo from '../assets/images/LOOG 1.png'
import Store from '../assets/images/footerStores.png'
import FaceBook from '../assets/images/FaceBook.png'
import Instagram from '../assets/images/Insatgram.png'
import LinkedIn from '../assets/images/LinkedIn.png'
const Test = () => {
  return (   
    <footer className="footer">
      <div className='sections'>
      <div className='first-section'>
        <img src={Logo} style={{maxWidth:'105px'}} alt="" />
        <p>CALL US</p>
        <p>+91 9099 990 999</p>
      </div>
      <div className='secount-section'>
      <img src={Logo} style={{maxWidth:'105px',visibility:'hidden'}} alt="" />
        <p>MAIL US</p>
        <p>laundryace@gmail.com</p>
      </div>
      <div className='thrird-section'>
        <p>About</p>
        <p>Contact</p>
        <p>Privacy Policies</p>
      </div>
      <div className='last-section'>
        <p>Request for Demo  1028 101 3030</p>
        <p>Download Our App</p>
        <img src={Store} alt="" />
      </div>
      </div>
      <div className='footer-section'>
        <p>© 2024 Ivory technologies</p>
        <div className='social-media'>
          <p>Follow Us</p>
          <img src={FaceBook} alt="" />
          <img src={LinkedIn} alt="" />
          <img src={Instagram} alt="" />
        </div>
      </div>
  </footer>
  );
};

export default Test;

