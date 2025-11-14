import React from "react";
import { motion } from "framer-motion";
import "./Content.scss";
import Bubble from "../../assets/images/bubbles/One1.png";
const Content = () => {
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello LaundryAce Team 👋, I’m interested in your laundry management software. Could you please share more details?"
    );
    window.open(`https://wa.me/7012212199?text=${message}`, "_blank");
  };
  return (
    <div className="hero-content">
      <h2>
        Run Your Laundry Business Smartly — with {" "}
        <span className="highlight">LaundryAce</span>
      </h2>
      {/* <h2>
        Smart Laundry Management Made Simple with{" "}
        <span className="highlight">LDC Software</span>
      </h2> */}
      <p>
        LaundryAce is an all-in-one SaaS platform designed for entrepreneurs who
        want to launch, manage, and scale their laundry or dry-cleaning business
        effortlessly. From POS to mobile apps, CRM to customer tracking — we’ve
        packed everything you need to turn your laundry business into a fully
        automated operation.{" "}
      </p>
      <h3 className="subheading">
        Book a Free Demo:{" "}
        <a href="tel:+917012212199" className="phone-number">
          +91 70 122 121 99
        </a>
      </h3>

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cta-button"
        onClick={handleWhatsAppClick}
      >
        Contact Now
      </motion.button>
    </div>
  );
};

export default Content;
