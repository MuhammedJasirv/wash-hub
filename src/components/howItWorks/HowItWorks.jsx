import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './HowItWorks.scss';
import WorkOne from '../../assets/images/work/work1.png';
import WorkOneHand from '../../assets/images/work/workhand1.png';
import WorkTwo from '../../assets/images/work/work2.png';
import WorkTwoHand from '../../assets/images/work/workhand2.png';
import WorkThree from '../../assets/images/work/work3.png';
import WorkThreeHand from '../../assets/images/work/workhand3.png';
import WorkFour from '../../assets/images/work/work4.png';
import WorkFourHand from '../../assets/images/work/workhand4.png';
import BlueLightOne from '../../assets/images/desing/blue crile.png';
import BlueLightTwo from '../../assets/images/desing/bleeCrileTwo.png';
import Bubble from '../../assets/images/bubbles/One1.png';
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className='how-it-work' ref={ref}>
      <motion.div className="blue-circle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={isInView ? { 
          opacity: 1, 
          scale: 1,
          transition: { duration: 0.8 }
        } : {}}
      >
        <img src={BlueLightOne} alt="" />
      </motion.div>
      <div className="blue-circle-center">
        <img src={BlueLightTwo} alt="" />
      </div>
           {/* Floating Bubbles */}
           <motion.div 
        className="bubble"
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.6 }
        } : {}}
      >
        <motion.img 
          src={Bubble} 
          alt=""
          animate={isInView ? {
            y: [0, -10, 0],
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1
            }
          } : {}}
        />
        <motion.img 
          src={Bubble} 
          alt=""
          animate={isInView ? {
            y: [0, 10, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          } : {}}
        />
      </motion.div>
        <motion.div className='hero'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.8, delay: 0.4 }
        } : {}}
      >
            <h2>How Its work ?</h2>
            <p>Running a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, </p>
        </motion.div>
        <motion.div className='content'
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.6
            }
          }
        }}
      >
            <Card Img1={WorkOne} Img2={WorkOneHand}/>
            <Card Img1={WorkTwo} Img2={WorkTwoHand}/>
            <Card Img1={WorkThree} Img2={WorkThreeHand}/>
            <Card Img1={WorkFour} Img2={WorkFourHand}/>
        </motion.div>
    </div>
  )
}

export default HowItWorks

const Card = ({Img1,Img2}) => {
  return (
    
    <motion.div className="custom-card"
    variants={{
      hidden: { opacity: 0, y: 20 },
      visible: { 
        opacity: 1, 
        y: 0,
        transition: { duration: 0.6 }
      }
    }}
  >
      <motion.div 
        className="custom-icon"
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      >
        <motion.img 
          src={Img1} 
          alt=""
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6 }}
        />
        <motion.img 
          src={Img2} 
          alt=""
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        />
      </motion.div>
      <h3 className="custom-title">
      Drivers use pickup & delivery mobile apps
      </h3>
      <p className="custom-description">
      Running a laundry business can be tcomplex. From managing scheduling is not pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, s ul ah keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pi jkasnsdnsa ajahj jajsacenaj . aj nsnanak ncsnc nacna ackups, keeping track of inventory, 
      </p>
    </motion.div>
  );
};