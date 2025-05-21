import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import "./Service.scss";
import BlurBg from "../../assets/images/Blur.png";
import iconData from "../../assets/images/serviceData.png";
import Bubble from "../../assets/images/bubbles/One1.png";

const Service = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Simple fade-in animation
  const fadeIn = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  // Slide-up animation
  const slideUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section className="service" ref={ref}>
      <motion.div
        className="center-light"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={fadeIn}
        transition={{ duration: 0.8 }}
      >
        <img src={BlurBg} alt="Blur Effect" />
      </motion.div>

      <motion.div
        className="bubble-service" // Keep your existing CSS classes
        initial={{ opacity: 0 }}
        animate={{
          opacity: 1,
          transition: { duration: 0.8, delay: 0.2 },
        }}
      >
        {/* First Bubble - Subtle Float */}
        <motion.img
          src={Bubble}
          alt=""
          style={{ position: "absolute" }} // Preserve original positioning
          animate={{
            y: [0, -3, 0], // Tiny movement (3px up/down)
            transition: {
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            },
          }}
        />

        {/* Second Bubble - Opposite Float */}
        <motion.img
          src={Bubble}
          alt=""
          style={{ position: "absolute" }} // Preserve original positioning
          animate={{
            y: [0, 3, 0], // Opposite movement (3px down/up)
            transition: {
              duration: 5,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1.2,
            },
          }}
        />
      </motion.div>

      <motion.div
        className="service-title"
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        variants={slideUp}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        <h2>
          We provide Transforming
          <br />
          Visions into All the Digital Reality
        </h2>
        <p>
          Running a laundry business can be complex. From managing scheduling{" "}
          <br />
          pickups, keeping track of inventory, and handling requests
        </p>
      </motion.div>

      <div className="service-cards">
        <motion.div
          className="service-card"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <Card  icon={ iconData}
    title= "Automated Pickup Scheduling" description= "Enable customers to schedule pickups with ease through an automated interface. Improve scheduling efficiency while ensuring a smooth and timely customer experience."/>
    <Card  icon=  {iconData} title="Performance Analytics" description= "Analyze business performance with real-time reports. Track revenue, orders, and staff productivity, making data-driven decisions to drive continuous growth and improvement."/>
        </motion.div>

        <motion.div
          className="service-card-two"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <div>
            <Card icon= {iconData} title= "Customer Communication" description="Automate updates, alerts, and promotions via SMS or email. Keep your customers informed and engaged through seamless communication directly from your dashboard."/>
          </div>
        </motion.div>

        <motion.div
          className="service-card"
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
          variants={slideUp}
          transition={{ duration: 0.6, delay: 1.0 }}
        >
          <Card icon={iconData} title="Invoice Management & Payment Tracking" description="Generate invoices automatically, manage payments, and track finances all in one place. Reduce administrative workload while ensuring precise, accurate, and timely billing every time." />
          <Card  icon={iconData} title="Inventory Management" description="Track inventory from check-in to delivery with our smart management system. Reduce errors and optimize tracking, ensuring accurate order fulfillment and fast service."/>

        </motion.div>
      </div>

      <motion.div
        className="bubble-last-service"
        initial="hidden"
        animate={isInView ? ["visible", "float"] : "hidden"}
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { duration: 0.8, delay: 1.2 },
          },
          float: {
            y: [-5, 5, -5], // Up and down movement
            scale: [1, 1.05, 1], // Subtle pulse effect
            transition: {
              y: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              scale: {
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              },
              delay: 2, // Wait until after the initial fade-in
            },
          },
        }}
      >
        <img src={Bubble} alt="" />
      </motion.div>
    </section>
  );
};

export default Service;

const Card = ({ icon, title, description }) => {
  return (
    <motion.div
      className="transform-card"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.5 }}
    >
      <div className="transform-icon">
        <img src={icon} alt={title} />
      </div>
      <h3 className="transform-title">{title}</h3>
      <p className="transform-description">{description}</p>
    </motion.div>
  );
};
