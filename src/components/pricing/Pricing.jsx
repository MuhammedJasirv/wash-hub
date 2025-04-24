import React, { useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import './Pricing.scss';
import PricePoint from '../../assets/images/pricePoint.png';
import PlayStore from '../../assets/images/playstoreprice.png';
import AppStore from '../../assets/images/appstoreprice.png';
import Qa from '../qa/Qa';

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <motion.div 
      className='pricing'
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div 
        className='hero'
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: 0.2 }
        } : {}}
      >
        <h2>Pricing Plans</h2>
        <p>Running a laundry business can be complex...</p>
      </motion.div>

      {/* Toggle Switch */}
      <motion.div 
        className="pricing-toggle-container"
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.6, delay: 0.4 }
        } : {}}
      >
        <p>Yearly Pricing</p>
        <div>
          <ToggleSwitch />
        </div>
        <span>Monthly Pricing</span>
      </motion.div>

      {/* Price Details */}
      <motion.div className="price-details"
        initial={{ opacity: 0, y: 20 }}
        animate={isInView ? { 
          opacity: 1, 
          y: 0,
          transition: { duration: 0.6, delay: 0.6 }
        } : {}}
      >
        <p className='price'><span>₹</span>999</p>
        <p className='month'>/month</p>
        <p className='description'>Running a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, and handling  requestsRunning a laundry business can be complex. From managing scheduling pickups, keeping track of inventory, </p>
        <motion.div className='points'
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.1,
                delayChildren: 0.8
              }
            }
          }}
        >
            <motion.div  className="items"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            ><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></motion.div>
            <motion.div  className="items"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            ><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></motion.div>
            <motion.div  className="items"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            ><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></motion.div>
            <motion.div  className="items"
              variants={{
                hidden: { opacity: 0, x: -10 },
                visible: { opacity: 1, x: 0 }
              }}
            ><img src={PricePoint} alt="" /> <p>Running a laundry business can be complex. From managing scheduling pickups, </p></motion.div>
        </motion.div>
        <button className="choose-plan-button">Choose Plan</button>
    </motion.div>

      {/* Pricing Footer */}
      <motion.div 
        className='pricing-footer'
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.6, delay: 1.4 }
        } : {}}
      >
        <div className='left'>
          <h2>Download The App Now</h2>
          <motion.div 
            className='images-download'
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { duration: 0.6, delay: 1.6 }
            } : {}}
          >
            <motion.img 
              src={PlayStore} 
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
            <motion.img 
              src={AppStore} 
              alt=""
              whileHover={{ scale: 1.05 }}
              transition={{ type: "spring", stiffness: 300 }}
            />
          </motion.div>
        </div>
        <div className='rigth'>
          <h2>We provide Transforming <br />
          Visions into All the Digital Reality</h2>
        </div>
      </motion.div>

      <Qa/>
    </motion.div>
  );
};

export default Pricing;

const ToggleSwitch = () => {
  const [isOn, setIsOn] = useState(true);

  return (
    <motion.div
      className={`pricing-toggle ${isOn ? "on" : "off"}`}
      onClick={() => setIsOn(!isOn)}
      whileTap={{ scale: 0.95 }}
    >
      <motion.div 
        className="toggle-thumb"
        // animate={isOn ? { x: "100%" } : { x: 0 }}  
        transition={{ type: "spring", stiffness: 500, damping: 30 }}
      />
    </motion.div>
  );
};