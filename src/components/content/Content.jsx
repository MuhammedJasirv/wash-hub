import React from 'react'
import { motion } from 'framer-motion'
import "./Content.scss"
import Bubble from "../../assets/images/bubbles/One1.png";
const Content = () => {
  return (
    <div className="hero-content">
      <h2>
        Smart Laundry Management Made Simple with{" "}
        <span className="highlight">LDC Software</span>
      </h2>
      <p>
        Streamline your laundry operations effortlessly. From order tracking and pickup scheduling to inventory management and customer engagement — manage it all in one place with LDC Software.
      </p>
      <h3 className="subheading">Book a Free Demo: <span className="phone-number">1028 101 3030</span></h3>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cta-button"
      >
        Schedule a Pickup
      </motion.button>
    </div>
  )
}

export default Content
