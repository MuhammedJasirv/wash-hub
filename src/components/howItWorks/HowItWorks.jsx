import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./HowItWorks.scss";
import WorkOne from "../../assets/images/work/work1.png";
import WorkOneHand from "../../assets/images/work/workhand1.png";
import WorkTwo from "../../assets/images/work/work2.png";
import WorkTwoHand from "../../assets/images/work/workhand2.png";
import WorkThree from "../../assets/images/work/work3.png";
import WorkThreeHand from "../../assets/images/work/workhand3.png";
import WorkFour from "../../assets/images/work/work4.png";
import WorkFourHand from "../../assets/images/work/workhand4.png";
import BlueLightOne from "../../assets/images/desing/blue crile.png";
import BlueLightTwo from "../../assets/images/desing/bleeCrileTwo.png";
import Bubble from "../../assets/images/bubbles/One1.png";
const HowItWorks = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <div className="how-it-work" ref={ref}>
      <motion.div
        className="blue-circle"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={
          isInView
            ? {
                opacity: 1,
                scale: 1,
                transition: { duration: 0.8 },
              }
            : {}
        }
      >
        <img src={BlueLightOne} alt="" />
      </motion.div>
      <div className="blue-circle-center">
        <img src={BlueLightTwo} alt="" />
      </div>
      {/* Floating Bubbles */}
      <motion.div
        className="howitwork-bubble"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.6 },
              }
            : {}
        }
      >
        <motion.img
          src={Bubble}
          alt=""
          animate={
            isInView
              ? {
                  y: [0, -10, 0],
                  transition: {
                    duration: 5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1,
                  },
                }
              : {}
          }
        />
        <motion.img
          src={Bubble}
          alt=""
          animate={
            isInView
              ? {
                  y: [0, 10, 0],
                  transition: {
                    duration: 6,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: 1.5,
                  },
                }
              : {}
          }
        />
      </motion.div>
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                y: 0,
                transition: { duration: 0.8, delay: 0.4 },
              }
            : {}
        }
      >
        <h2>How Its work ?</h2>
        <p>
          Running a laundry business can be complex. From managing scheduling
          pickups, keeping track of inventory, and handling requestsRunning a
          laundry business can be complex. From managing scheduling pickups,
          keeping track of inventory, and handling requestsRunning a laundry
          business can be complex. From managing scheduling pickups, keeping
          track of inventory,{" "}
        </p>
      </motion.div>
      <motion.div
        className="content"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: {
              staggerChildren: 0.2,
              delayChildren: 0.6,
            },
          },
        }}
      >
        <Card
          Img1={WorkOne}
          Img2={WorkOneHand}
          title="Mobile App for Easy Pickup"
          desc="Our intuitive mobile app simplifies laundry pickup scheduling. Customers can select times, receive real-time updates, and track the progress of their orders with ease. The app also supports driver-side logistics, ensuring each pickup and delivery is timely and accurate. With just a few taps, users can manage all their laundry needs from the comfort of their home."
        />

        <Card
          Img1={WorkTwo}
          Img2={WorkTwoHand}
          title="Efficient Pickup & Delivery"
          desc="Our delivery system ensures quick and dependable service. Drivers use the app to follow optimized routes, reducing delays and improving punctuality. With real-time tracking and updates, customers stay informed every step of the way. We prioritize safety and efficiency, ensuring your clothes are picked up and returned clean, fresh, and on schedule — every single time."
        />

        <Card
          Img1={WorkThree}
          Img2={WorkThreeHand}
          title="High-Quality Washing Process"
          desc="Every garment is handled with care using our industrial-grade washers and high-quality detergents. The process is standardized to maintain consistency and hygiene. Our team inspects all items before and after cleaning to guarantee spotless results. Whether it's everyday wear or delicate fabrics, your clothes return fresh, sanitized, and looking their best — ready for your next wear."
        />

        <Card
          Img1={WorkFour}
          Img2={WorkFourHand}
          title="Track Orders via Dashboard"
          desc="Stay in control with our powerful dashboard designed for both customers and businesses. Track orders, monitor delivery progress, view reports, and gain insights into performance — all from one place. The dashboard offers real-time updates, analytics, and easy access to past orders, helping you manage your laundry operations efficiently and make data-driven decisions for better service."
        />
      </motion.div>
    </div>
  );
};

export default HowItWorks;

const Card = ({ Img1, Img2, title, desc }) => {
  return (
    <motion.div
      className="custom-card"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6 },
        },
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
      <h3 className="custom-title">{title}</h3>
      <p className="custom-description">{desc}</p>
    </motion.div>
  );
};
