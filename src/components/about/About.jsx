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
      <section className="features">
        <motion.div
          className="bubble"
          variants={bubbleVariants}
          animate="float"
          whileHover="hover"
          drag
          dragConstraints={{ top: -20, left: -20, right: 20, bottom: 20 }}
          dragElastic={0.2}
        >
          <img src={Bubble} alt="Decorative bubble" />
        </motion.div>

        <motion.div className="features-center" variants={containerVariants}>
          <motion.div className="feature" variants={itemVariants}>
            <motion.img
              src={dataImg}
              alt="Icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <h3>Experience and expertise</h3>
          </motion.div>

          <motion.div className="feature" variants={itemVariants}>
            <motion.img
              src={VerifcationImg}
              alt="Icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <h3>Experience and expertise</h3>
          </motion.div>

          <motion.div className="feature" variants={itemVariants}>
            <motion.img
              src={dataImg}
              alt="Icon"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            />
            <h3>Experience and expertise</h3>
          </motion.div>
        </motion.div>
      </section>

      <section className="about">
        <motion.div className="about-content" variants={containerVariants}>
          <motion.h2 variants={itemVariants}>
            We provide Transforming Visions into Digital Reality
          </motion.h2>

          <motion.p variants={itemVariants}>
            Running a laundry business can be complex. From managing orders to
            scheduling pickups, keeping track of inventory, and handling
            requests.
          </motion.p>

          <motion.div className="about-point" variants={itemVariants}>
            <h3>Provide Transforming Visions into Digital</h3>
            <p>
              Running a laundry business can be complex. From managing orders to
              scheduling pickups, keeping track of inventory.
            </p>
          </motion.div>

          <motion.div className="about-point" variants={itemVariants}>
            <h3>Provide Transforming Visions into Digital</h3>
            <p>
              Running a laundry business can be complex. From managing
              scheduling pickups, keeping track of inventory, and handling
              requests.
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
