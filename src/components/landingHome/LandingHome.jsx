import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LandingHome.scss";
import logo from "../../assets/images/LOOG 1.png";
import Maskgroup from "../../assets/images/Mask group.png";
import DashbordLogo from "../../assets/images/logodash.png";
import Bubble from "../../assets/images/bubbles/One1.png";
import NavBar from "../navBar/NavBar";
import Dashboard from "../dashboard/Dashboard";
import About from "../about/About";

const LandingHome = () => {
  const [isOpen, setIsOpen] = useState(false);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.5,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div>
      <div className="bg-colour">
        <div>
          <NavBar />
        </div>
        <div>
          <section className="hero">
            <div className="hero-left">
              {/* Floating Bubble */}
              <motion.div
                className="bubble"
                animate={{
                  y: [0, 30, 0, 30, 0],
                  rotate: [0, 9, 0, -8, 0],
                  scale: [1, 1.2, 1],
                }}
                transition={{
                  duration: 12,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                }}
                whileHover={{ scale: 1.3, rotate: 20 }}
              >
                <img src={Bubble} alt="bubble" />
              </motion.div>

              {/* Hero Content */}
              <motion.div
                className="hero-content"
                initial={{ x: -100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ type: "spring", stiffness: 60 }}
              >
                <h2>
                  Effortless Laundry Management with{" "}
                  <span className="highlight">LDC Software</span>
                </h2>
                <p>
                  Running a laundry business can be complex. From managing
                  orders to scheduling pickups, keeping track of inventory, and
                  handling customer requests.
                </p>

                <div className="bubble-last">
                  <motion.img
                    src={Bubble}
                    alt="bubble last"
                    animate={{
                      y: [0, -25, 0, 25, 0],
                      scale: [1, 1.1, 1],
                      rotate: [0, 5, 0, -5, 0],
                    }}
                    transition={{
                      duration: 6,
                      repeat: Infinity,
                      ease: "easeInOut",
                    }}
                    drag
                    dragConstraints={{
                      top: -50,
                      left: -50,
                      right: 50,
                      bottom: 50,
                    }}
                    dragElastic={0.4}
                    whileDrag={{ scale: 1.3 }}
                    whileHover={{ scale: 1.2, rotate: 8 }}
                    whileTap={{ scale: 0.95, opacity: 0.8 }}
                  />
                </div>

                <h3>Request for Demo 1028 101 3030</h3>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="cta-button"
                >
                  Schedule a Pickup
                </motion.button>
              </motion.div>

              {/* Floating Bubbles */}
              <div className="bubble-three">
                <motion.img
                  src={Bubble}
                  alt="bubble"
                  whileHover={{ scale: 1.3, rotate: 10 }}
                  drag
                  dragConstraints={{
                    top: -60,
                    left: -60,
                    right: 60,
                    bottom: 60,
                  }}
                  whileDrag={{ scale: 1.2 }}
                  dragElastic={0.3}
                  animate={{
                    x: [0, 20, 0, -20, 0],
                    y: [0, -25, 0, 25, 0],
                    rotate: [0, 10, 0, -10, 0],
                  }}
                  transition={{
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                />

                <motion.img
                  src={Bubble}
                  alt="bubble"
                  whileHover={{ scale: 1.3, rotate: -10 }}
                  drag
                  dragConstraints={{
                    top: -60,
                    left: -60,
                    right: 60,
                    bottom: 60,
                  }}
                  whileDrag={{ scale: 1.2 }}
                  dragElastic={0.3}
                  animate={{
                    x: [0, -25, 0, 25, 0],
                    y: [0, 20, 0, -20, 0],
                    rotate: [0, -10, 0, 10, 0],
                  }}
                  transition={{
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  }}
                />
              </div>
            </div>

            {/* Right Section */}
            <motion.div
              className="hero-image"
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            >
              <div className="hero-images">
                <img
                  className="hero-imageone"
                  src={Maskgroup}
                  alt="Illustration Left"
                />
                <img
                  className="hero-imagetwo"
                  src={Maskgroup}
                  alt="Illustration Right"
                />
              </div>
            </motion.div>
          </section>
        </div>
        <div class="dashboard" style={{position:'absolute'}}>
          <Dashboard />
        </div>
      </div>
      <div className="about-colour">
      <About/>
      </div>
    </div>
  );
};

export default LandingHome;
