import React from 'react';
import { motion } from 'framer-motion';
import dataImg from "../../assets/images/data.svg";
import VerifcationImg from "../../assets/images/verification.svg";
import Bubble from "../../assets/images/bubbles/One1.png";
import "./Features.scss"

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

const Features = () => {
  return (
    <section className="features-section">
      <motion.div
        className="features-bubble"
        variants={bubbleVariants}
        animate="float"
        whileHover="hover"
        drag
        dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
        dragElastic={0.2}
      >
        <img src={Bubble} alt="Decorative bubble" />
      </motion.div>

      <motion.div
        className="features-container"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="features-item" variants={itemVariants}>
          <motion.img
            src={dataImg}
            alt="Data Icon"
            className="features-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <h3>Smart Data Management</h3>
        </motion.div>

        <motion.div className="features-item" variants={itemVariants}>
          <motion.img
            src={VerifcationImg}
            alt="Verification Icon"
            className="features-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <h3>Automated Workflows</h3>
        </motion.div>

        <motion.div className="features-item" variants={itemVariants}>
          <motion.img
            src={dataImg}
            alt="Insight Icon"
            className="features-icon"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          />
          <h3>Actionable Insights</h3>
        </motion.div>
      </motion.div>
      <div className='divider'></div>
    </section>
  );
};

export default Features;
