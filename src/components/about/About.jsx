import React from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import "./About.scss";
import AboutImg from "../../assets/images/aboutImage.png";
import dataImg from "../../assets/images/data.svg";
import VerifcationImg from "../../assets/images/verification.svg";
import Bubble from "../../assets/images/bubbles/One1.png";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2,
      when: "beforeChildren",
    },
  },
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const bubbleVariants = {
  float: {
    y: [0, -15, 0, 15, 0],
    rotate: [0, 5, 0, -5, 0],
    transition: {
      duration: 8,
      repeat: Infinity,
      ease: "easeInOut",
    },
  },
  hover: {
    scale: 1.1,
    transition: { duration: 0.3 },
  },
};

const About = () => {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: true, threshold: 0.2 });

  // Start animation when section comes into view
  useEffect(() => {
    if (inView) {
      controls.start("visible");
    }
  }, [controls, inView]);

  return (
    <motion.div
      ref={ref}
      className="about-features"
      initial="hidden"
      animate={controls}
      variants={containerVariants}
    >
      <section className="about">
  <motion.div className="about-content" variants={containerVariants}>
    {/* Main Heading and Description */}
    <motion.h2 variants={itemVariants}>
      Laundry Made Effortless with Wash Hub
    </motion.h2>

    <motion.p variants={itemVariants}>
      Whether you're a customer wanting clean clothes at your doorstep or a business owner managing operations—Wash Hub makes laundry smarter and simpler.
    </motion.p>

    {/* For Customers */}
    <motion.div className="about-point" variants={itemVariants}>
      <h3>For Laundry Customers</h3>
      <p>
        Schedule pickups in seconds, track your laundry in real time, and enjoy fast doorstep delivery. Laundry day has never been this easy.
      </p>
    </motion.div>

    {/* For Business Owners */}
    <motion.div className="about-point" variants={itemVariants}>
      <h3>For Laundry Businesses</h3>
      <p>
        Manage orders, staff, and machines all from one dashboard. Automate your workflow, streamline operations, and improve customer satisfaction with ease.
      </p>
    </motion.div>
  </motion.div>

  <motion.div
    className="about-image"
    initial={{ opacity: 0, x: 50 }}
    animate={{ opacity: 1, x: 0 }}
    transition={{ duration: 0.8, delay: 0.4 }}
  >
    <img src={AboutImg} alt="About LDC Software" />
  </motion.div>
</section>

    </motion.div>
  );
};

export default About;
