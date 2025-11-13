import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import Logo from "../../assets/images/LOOG 2.png";
import Store from "../../assets/images/footerStores.png";
import Facebook from "../../assets/images/FaceBook.png";
import Instagram from "../../assets/images/Insatgram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import "./Footer.scss";

const Footer = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
 const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello LaundryAce Team 👋, I’m interested in your laundry management software. Could you please share more details?"
    );
    window.open(`https://wa.me/7012212199?text=${message}`, "_blank");
  };
  return (
    <motion.footer
      className="footer"
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={
        isInView
          ? {
              opacity: 1,
              y: 0,
              transition: { duration: 0.6, ease: "easeOut" },
            }
          : {}
      }
    >
      {/* Sections */}
      <motion.div
        className="sections"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.15, delayChildren: 0.2 },
          },
        }}
      >
        {/* 1️⃣ Company Info */}
        <motion.div
          className="first-section"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <div className="logo-section">
            <img src={Logo} alt="LaundryAce Logo" />
            <p>LaundryAce </p>
          </div>
          <div className="footer-about">
            Have questions or want to see a live demo? 
Our product experts are happy to walk you through LaundryAce and help you choose the right plan.
          </div>
        
        </motion.div>

        {/* 2️⃣ Contact */}
        <motion.div
          className="secount-section"
          variants={{
            hidden: { opacity: 0, x: -20 },
            visible: { opacity: 1, x: 0 },
          }}
        >  <div className="contact-info">
            <p className="heading">CALL US</p>
            <a href="tel:+917012212199" className="value">+91 7012212199</a>
          </div>
          <p className="heading">MAIL US</p>
          <a href="mailto:info@ivorytechnologies.com" className="value">info@ivorytechnologies.com</a>
        </motion.div>

        {/* 3️⃣ Navigation */}
        <motion.div
          className="thrird-section"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policy</p>
          <p>Terms & Conditions</p>
        </motion.div>

        {/* 4️⃣ App Download */}
        <motion.div
          className="last-section"
          variants={{
            hidden: { opacity: 0, y: 20 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <p className="demo" onClick={handleWhatsAppClick}>
            Request for Demo <span>+91 7012212199</span>
          </p>
          <p className="download">Download Our App</p>
          <motion.img
            src={Store}
            alt="Store Button"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
        </motion.div>
      </motion.div>

      {/* Bottom Section */}
      <motion.div
        className="footer-section"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.6 },
              }
            : {}
        }
      >
        <p>© {new Date().getFullYear()} Ivory LaundryAce. All Rights Reserved.</p>

        {/* <div className="social-media">
          <p>Follow Us</p>
          {[Facebook, LinkedIn, Instagram].map((icon, i) => (
            <motion.img
              key={i}
              src={icon}
              alt={`social-${i}`}
              whileHover={{ scale: 1.1 }}
              transition={{ type: "spring", stiffness: 400 }}
            />
          ))}
        </div> */}
      </motion.div>
    </motion.footer>
  );
};

export default Footer;
