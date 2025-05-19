import React, { useState } from 'react'
import './NavBar.scss'
import { motion } from "framer-motion";
import logo from "../../assets/images/LOOG 1.png";
const NavBar = () => {
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
    <div>
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
    </div>
  )
}

export default NavBar