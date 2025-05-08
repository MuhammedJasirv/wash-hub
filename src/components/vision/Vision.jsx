import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Vision.scss";
import MessageIcon from "../../assets/images/message.png";
import BoxIcon from "../../assets/images/box.png";
import VisionPoints from "../../assets/images/visionpoints.png";
import LeftBuble from "../../assets/images/desing/leftBubules.png";
import RigthBuble from "../../assets/images/desing/rigthBubules.png";
import Bubble from '../../assets/images/bubbles/One1.png';
const Vision = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Animation variants
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 }
  };

  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  // Bubble float animation
  const bubbleFloat = {
    float: {
      y: [0, -5, 0],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut"
      }
    }
  };
  return (
    <div className="vision" ref={ref}>
      <div className="desing-bubles">
        <img src={LeftBuble} alt="" />
        <img src={RigthBuble} alt="" />
      </div>
      <motion.div 
        className="bubble"
        initial={{ opacity: 0 }}
        animate={isInView ? { 
          opacity: 1,
          transition: { duration: 0.8 }
        } : {}}
      >
        <motion.img 
          src={Bubble} 
          alt=""
          animate={isInView ? {
            y: [0, -8, 0],
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
            y: [0, 8, 0],
            transition: {
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.5
            }
          } : {}}
        />
      </motion.div>
      <motion.div 
        className="vision-head"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideUp}
        transition={{ duration: 0.8, delay: 0.2 }}
      >
        <h2 className="titile">
          We provide Transforming <br />
          Visions into  All the Digital Reality
        </h2>
        <p className="desictiption">
        Managing a laundry business involves countless tasks. Simplify operations, streamline workflows, and improve {" "}
          <br /> efficiency all while providing excellent customer service with our all-in-one platform
        </p>
      </motion.div>
      <motion.div  className="vision-contents"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="left">
          <div className="hero">
            <div className="leftt">
            <motion.div 
                className="graph-one"
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, delay: 0.6 }
                } : {}}
              />
            </div>
            <div className="right">
            <motion.div 
                className="graph-one"
                initial={{ opacity: 0, x: 20 }}
                animate={isInView ? { 
                  opacity: 1, 
                  x: 0,
                  transition: { duration: 0.6, delay: 0.8 }
                } : {}}
              />
            </div>
          </div>
          <motion.div className="content"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { duration: 0.8, delay: 1.0 }
            } : {}}
            >
            <h2>Transforming Laundry Management</h2>
  <p>
    Running a laundry business can be complex. From managing orders to
    scheduling all the pickups, keeping track of inventory, and handling requests—our platform makes it all seamless. 
    With smart solutions and digital tools, you’ll be able to streamline operations and boost productivity.
  </p>
  <p>
    Whether it’s real-time tracking or automated pickup scheduling, we bring everything together in a single, user-friendly platform.
  </p>
  <p>
    Join us as we revolutionize the way you handle your laundry business, bringing technology and efficiency right at your fingertips.
  </p>
          </motion.div>
        </div>
        <div className="right">
          <motion.div className="top"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.6 }
            } : {}}
            >
            <div className="hero">
              <h2> Effortless Order Management </h2>
              <motion.img 
                src={MessageIcon} 
                alt=""
                initial={{ scale: 0.8 }}
                animate={isInView ? { 
                  scale: 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 200,
                    delay: 0.8
                  }
                } : {}}
              />
            </div>
            <p>
      Running a laundry business can be complex. From managing orders to
      scheduling all the pickups, keeping track of inventory, and handling requests—our platform simplifies everything.
    </p>
    <p>
      Efficient order management ensures that all your tasks are automated, and you stay in control at all times.
    </p>
          </motion.div>
          <motion.div className="down"
            initial={{ opacity: 0 }}
            animate={isInView ? { 
              opacity: 1,
              transition: { duration: 0.6, delay: 0.8 }
            } : {}}
          >
            <div className="hero">
              <h2> Smart Inventory Tracking </h2>
              <motion.img 
                src={BoxIcon} 
                alt=""
                initial={{ scale: 0.8 }}
                animate={isInView ? { 
                  scale: 1,
                  transition: { 
                    type: "spring", 
                    stiffness: 200,
                    delay: 1.0
                  }
                } : {}}
              />
            </div>
            <p>
      Keeping track of inventory can be time-consuming. With our tool, you’ll have real-time access to stock levels, upcoming deliveries, and better management of laundry items.
    </p>
    <p>
      Our platform provides insights on when to reorder and keeps everything in stock, making your operations run smoothly.
    </p>
          </motion.div>
        </div>
      </motion.div>
      <motion.div className="vision-footer-hero"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideUp}
        transition={{ duration: 0.8, delay: 1.2 }}
      >
      <motion.div className="bubble-footer"
          initial={{ opacity: 0 }}
          animate={isInView ? { 
            opacity: 1,
            transition: { duration: 0.8 }
          } : {}}
        >
        <motion.img 
            src={Bubble} 
            alt=""
            animate={isInView ? {
              y: [0, -6, 0],
              transition: {
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 1.5
              }
            } : {}}
          />
          <motion.img 
            src={Bubble} 
            alt=""
            animate={isInView ? {
              y: [0, 6, 0],
              transition: {
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
                delay: 2.0
              }
            } : {}}
          />
      </motion.div>
        <h2 className="titile">
          Laundry Management System that <br /> works on any device & from
          anywhere
        </h2>
        <p className="desictiption">
          Running a laundry business can be complex. From managing scheduling{" "}
          <br /> pickups, keeping track of inventory, and handling requests
        </p>
      </motion.div>
      <motion.div className="vision-footer"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8, delay: 1.4 }}
      >
        <motion.div className="items" 
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 1.6 + 0 * 0.2 
              }
            } : {}}
          >
          <img src={VisionPoints} alt="" />
          <p>Staff can use either Computer, PAD (or) Mobile</p>
        </motion.div>
        <motion.div className="items"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 1.6 + 1 * 0.2 
              }
            } : {}}
          >
          <img src={VisionPoints} alt="" />
          <p>Customers use Fabklean app to raise requests</p>
        </motion.div>
        <motion.div className="items"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 1.6 + 2 * 0.2 
              }
            } : {}}
          >
          <img src={VisionPoints} alt="" />
          <p>Drivers use pickup & delivery mobile apps</p>
        </motion.div>
        <motion.div className="items"
            initial={{ opacity: 0, y: 10 }}
            animate={isInView ? { 
              opacity: 1, 
              y: 0,
              transition: { 
                duration: 0.6, 
                delay: 1.6 + 3 * 0.2 
              }
            } : {}}
          >
          <img src={VisionPoints} alt="" />
          <p>Owners can use Fabklean Business app</p>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Vision;
