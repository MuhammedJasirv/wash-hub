import React, { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import logo from "../../assets/images/LOOG 2.png";
import FaceBook from "../../assets/images/FaceBook.png";
import Instagram from "../../assets/images/Insatgram.png";
import LinkedIn from "../../assets/images/LinkedIn.png";
import "./NavBar.scss";
import { Link } from "react-scroll";

const NavBar = ({ isOpen, setIsOpen, setWidthScreen, widthScreen }) => {
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
  const handleChange = () => {
    setIsOpen(!isOpen);
    if (widthScreen == "100%") {
      setWidthScreen("85%");
    } else {
      setWidthScreen("100%");
    }
  };
  useEffect(() => {
    const handleScroll = () => {
      if (isOpen) {
        setIsOpen(false);
        setWidthScreen("100%");
      }
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isOpen, setIsOpen, setWidthScreen]);

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-50px" });
  return (
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
        onClick={handleChange}
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7 }}
      >
        {isOpen ? (
          <motion.div
            key="close"
            className="menu-close"
            initial={{ opacity: 0, rotate: -90, scale: 0.5 }}
            animate={{ opacity: 1, rotate: 0, scale: 1 }}
            exit={{ opacity: 0, rotate: 90, scale: 0.5 }}
            transition={{ duration: 0.3 }}
          >
            X
          </motion.div>
        ) : (
          <>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
            <div className="menu-line"></div>
          </>
        )}
      </motion.div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="sidebarr"
            initial={{ x: 0, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ duration: 0.6, ease: "easeInOut" }}
          >
            <button className="mobile-close-btn" onClick={handleChange}>
              ✕
            </button>
            <div className="logosidebar">
              <motion.img
                src={logo}
                alt="LDC Software Logo"
                initial={{ opacity: 0, x: -30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.3 }}
              />
              <p>Welcome to Launday Management</p>
            </div>
            <motion.ul
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {["Home", "About", "Services", "Contact"].map((text, index) => (
                <motion.li key={index} variants={itemVariants}>
                  <Link
                    to={text.toLowerCase()}
                    smooth={true}
                    duration={600}
                    offset={-50} // adjust for fixed navbar
                    style={{
                      color: "white",
                      textDecoration: "none",
                      cursor: "pointer",
                    }}
                  >
                    {text}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
            {/* <motion.div
              className="social-mediaa"
              ref={ref}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.15,
                    delayChildren: 0.3,
                  },
                },
              }}
              initial="hidden"
              animate="visible"
            >
              {[FaceBook, LinkedIn, Instagram].map((icon, idx) => (
                <motion.img
                  key={idx}
                  src={icon}
                  alt={`icon-${idx}`}
                  variants={{
                    hidden: { opacity: 0, y: 20, scale: 0.8 },
                    visible: { opacity: 1, y: 0, scale: 1 },
                  }}
                  whileHover={{ scale: 1.15 }}
                  transition={{ type: "spring", stiffness: 400, damping: 20 }}
                />
              ))}
            </motion.div> */}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default NavBar;
