import React, { useState } from "react";
import { motion } from "framer-motion";
import "./LandingPage.scss";
import logo from "../../assets/images/LOOG 1.png";
import Maskgroup from "../../assets/images/Mask group.png";
import DashbordLogo from "../../assets/images/logodash.png";
import Bubble from "../../assets/images/bubbles/One1.png";

const LandingPage = () => {
  const [isOpen,setIsOpen]=useState(false)
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, 
      },
    },
  };
  
  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };
  return (
    <div className="landing-page">
      <div className="container">
        {/* Header Section */}
        <motion.header
          className="header"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <motion.img
            className="logo"
            src={logo}
            alt="LDC Software Logo"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3 }}
          />
          <motion.h1
            className="header-title"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            Laundry Made Simple and Swift
          </motion.h1>
          <motion.div
            className="menu-icon"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.7 }}
            onClick={()=>setIsOpen(!isOpen)}
          >
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            {isOpen&&(
             <motion.div
             className="menu"
             initial={{ x: "-100%", opacity: 0 }}
             animate={{ x: 0, opacity: 1 }}
             exit={{ x: "-100%", opacity: 0 }}
             transition={{ duration: 0.4, ease: "easeInOut" }}
           >
             <button className="close-btn" onClick={() => setIsOpen(!isOpen)}>×</button>
   
             <motion.ul
               variants={containerVariants}
               initial="hidden"
               animate="visible"
             >
               {["Home", "About", "Services", "Contact"].map((text, index) => (
                 <motion.li key={index} variants={itemVariants}>
                   {text}
                 </motion.li>
               ))}
             </motion.ul>
           </motion.div>
        )}
          </motion.div>
        </motion.header>

        {/* Hero Section */}
        <section className="hero">
          <div className="hero-left">
            <motion.div
              className="bubble"
              animate={{ y: [0, -10, 0] }} // up and back down
              transition={{
                duration: 52,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1, rotate: 8 }}
            >
              <img src={Bubble} alt="bubble" />
            </motion.div>

            <motion.div
              className="hero-content"
              initial={{ x: -100, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ type: "spring", stiffness: 50 }}
            >
              <h2>
                Effortless Laundry Management with{" "}
                <span className="highlight">LDC Software</span>
              </h2>
              <p>
                Running a laundry business can be complex. From managing orders
                to scheduling pickups, keeping track of inventory, and handling
                customer requests.
              </p>

              <div className="bubble-last">
                <motion.img
                  src={Bubble}
                  alt="bubble last"
                  // Floating animation (gentle up/down sway)
                  animate={{
                    y: [0, -15, 0, 15, 0],
                    scale: [1, 1.05, 1, 0.98, 1],
                    rotate: [0, 2, 0, -2, 0],
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                  }}
                  // Drag interaction (follows mouse direction)
                  drag
                  dragConstraints={{
                    top: -30,
                    left: -30,
                    right: 30,
                    bottom: 30,
                  }}
                  dragElastic={0.3}
                  whileDrag={{
                    scale: 1.2,
                    transition: { type: "spring", damping: 10 },
                  }}
                  // Hover effects
                  whileHover={{
                    scale: 1.1,
                    transition: { duration: 0.3 },
                  }}
                  // Subtle pulse effect
                  whileTap={{
                    scale: 0.95,
                    opacity: 0.8,
                  }}
                />
              </div>

              <h3>Request for Demo 1028 101 3030</h3>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cta-button"
              >
                Schedule a Pickup
              </motion.button>
            </motion.div>

            <div className="bubble-three">
              <motion.img
                src={Bubble}
                alt="bubble"
                whileHover={{ scale: 1.2 }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.2}
                animate={{
                  x: [0, 10, 0, -10, 0],
                  y: [0, -15, 0, 15, 0],
                  rotate: [0, 5, 0, -5, 0],
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
                whileHover={{ scale: 1.2 }}
                drag
                dragConstraints={{
                  top: -50,
                  left: -50,
                  right: 50,
                  bottom: 50,
                }}
                whileDrag={{ scale: 1.1 }}
                dragElastic={0.2}
                animate={{
                  x: [0, -15, 0, 15, 0],
                  y: [0, 10, 0, -10, 0],
                  rotate: [0, -5, 0, 5, 0],
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

          {/* Right Side: Images and Dashboard */}
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

            {/* Graph Section */}
            <div className="dashboard-container">
              {/* Sidebar */}
              <div className="sidebar">
                <div className="logodash">
                  <img src={DashbordLogo} alt="Dashboard Logo" />
                </div>
                {[...Array(6)].map((_, index) => (
                  <div className="menu-item" key={index}></div>
                ))}
              </div>

              {/* Main Content */}
              <div className="main-content">
                <div className="header-cards">
                  {[...Array(4)].map((_, index) => (
                    <div className="header-card" key={index}></div>
                  ))}
                </div>

                <div className="main-body">
                  {/* Left Column */}
                  <div className="left-section">
                    <div className="graph"></div>
                    <div className="donut-section">
                      <div className="donut-placeholder"></div>
                      <div className="donut-info">
                        {[...Array(3)].map((_, index) => (
                          <div className="donut-line" key={index}></div>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right Column Cards */}
                  <div className="right-section">
                    {[...Array(4)].map((_, index) => (
                      <div className="right-card" key={index}></div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>
      </div>
    </div>
  );
};

export default LandingPage;
