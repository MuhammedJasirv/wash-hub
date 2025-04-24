import React, { useRef } from 'react'
import { motion, useInView } from 'framer-motion'
import Logo from '../../assets/images/LOOG 1.png'
import Store from '../../assets/images/footerStores.png'
import FaceBook from '../../assets/images/FaceBook.png'
import Instagram from '../../assets/images/Insatgram.png'
import LinkedIn from '../../assets/images/LinkedIn.png'
import './Footer.scss'

const Footer = () => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true, margin: "-50px" })

  return (
    <motion.footer 
      className="footer"
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 } 
      } : {}}
    >
      <motion.div 
        className='sections'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.1,
              delayChildren: 0.3
            }
          }
        }}
      >
        <motion.div 
          className='first-section'
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img src={Logo} style={{maxWidth:'105px'}} alt="" />
          <p>CALL US</p>
          <p>+91 9099 990 999</p>
        </motion.div>

        <motion.div 
          className='secount-section'
          variants={{
            hidden: { opacity: 0, x: -10 },
            visible: { opacity: 1, x: 0 }
          }}
        >
          <img src={Logo} alt="" />
          <p>MAIL US</p>
          <p>laundryace@gmail.com</p>
        </motion.div>

        <motion.div 
          className='thrird-section'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p>About</p>
          <p>Contact</p>
          <p>Privacy Policies</p>
        </motion.div>

        <motion.div 
          className='last-section'
          variants={{
            hidden: { opacity: 0, y: 10 },
            visible: { opacity: 1, y: 0 }
          }}
        >
          <p>Request for Demo  1028 101 3030</p>
          <p>Download Our App</p>
          <motion.img 
            src={Store} 
            alt=""
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 400 }}
          />
        </motion.div>
      </motion.div>

      <motion.div 
        className='footer-section'
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.6, delay: 0.5 }
        } : {}}
      >
        <p>© 2024 Ivory technologies</p>
        <motion.div 
          className='social-media'
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.6
              }
            }
          }}
        >
          <p>Follow Us</p>
          <motion.img 
            src={FaceBook} 
            alt=""
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
          <motion.img 
            src={LinkedIn} 
            alt=""
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
          <motion.img 
            src={Instagram} 
            alt=""
            variants={{
              hidden: { opacity: 0, scale: 0.8 },
              visible: { opacity: 1, scale: 1 }
            }}
            whileHover={{ scale: 1.1 }}
            transition={{ type: "spring", stiffness: 500 }}
          />
        </motion.div>
      </motion.div>
    </motion.footer>
  )
}

export default Footer