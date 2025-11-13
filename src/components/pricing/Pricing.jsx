import React, { useState, useRef } from "react";
import { AnimatePresence, motion, useInView } from "framer-motion";
import "./Pricing.scss";
import PricePoint from "../../assets/images/pricePoint.png";
import PlayStore from "../../assets/images/playstoreprice.png";
import AppStore from "../../assets/images/appstoreprice.png";
import Qa from "../qa/Qa";

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: { delay: 0.3 },
  },
  visible: {
    transform: "scale(1) rotateX(0deg)",
    opacity: 1,
    transition: { duration: 0.5 },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: { duration: 0.5 },
  },
};

const Pricing = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [isOn, setIsOn] = useState(true);
  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello LaundryAce Team 👋, I’m interested in your laundry management software. Could you please share more details?"
    );
    window.open(`https://wa.me/7012212199?text=${message}`, "_blank");
  };
  return (
    <motion.div
      className="pricing"
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ duration: 0.5 }}
    >
      {/* Hero Section */}
      <motion.div
        className="hero"
        initial={{ opacity: 0, y: 20 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.2 },
              }
            : {}
        }
      >
        <h2>Pricing Plans</h2>
        <p>
          Managing a laundry business involves more than just washing clothes —
          it’s about optimizing pickups, tracking inventory, and meeting
          customer demands efficiently. Our platform simplifies operations
          through smart scheduling, real-time tracking, and seamless customer
          communication, helping you focus on what truly matters: delivering
          quality service.{" "}
        </p>
      </motion.div>

      {/* Toggle Switch */}
      {/* <motion.div
        className="pricing-toggle-container"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 0.4 },
              }
            : {}
        }>
        <p className={isOn ? "inactive-text" : "active-text"}>Yearly Pricing</p>
        <div>
          <ToggleSwitch isOn={isOn} setIsOn={setIsOn} />
        </div>
        <span className={isOn ? "active-text" : "inactive-text"}>
          Monthly Pricing
        </span>
      </motion.div> */}

      {/* Price Details */}
      {/* <AnimatePresence mode="wait">
        {!isOn ? (
          <motion.div
            key="yearly"
            className="price-details"
            initial={{ rotateY: 90, opacity: 0 }}
            animate={{
              rotateY: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            exit={{
              rotateY: -90,
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
            }}
          >
            <motion.p
              className="price"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                  ease: "backOut",
                },
              }}
            >
              <span>₹</span>9999
            </motion.p>


            <motion.p
              className="month"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                },
              }}
            >
              /Year
            </motion.p>

            Description 
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.6,
                },
              }}
            >
              Our affordable plan gives you full access to powerful laundry
              management tools — including order tracking, inventory control,
              driver route optimization, and customer notifications. Whether
              you're running a single outlet or a multi-location setup,
              streamline every aspect of your business and boost customer
              satisfaction.
            </motion.p>
            <motion.div
              className="points"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Automated pickup and delivery scheduling to save you time and
                  effort.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Live inventory tracking ensures no item goes missing or
                  unaccounted for.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Real-time notifications keep your customers updated and
                  engaged.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Smart dashboard for performance insights and business growth.{" "}
                </p>
              </motion.div>
            </motion.div>
            <button className="choose-plan-button">Choose Plan</button>
          </motion.div>
        ) : (
          <motion.div
            key="monthly"
            className="price-details"
            initial={{ rotateY: -90, opacity: 0 }}
            animate={{
              rotateY: 0,
              opacity: 1,
              transition: {
                duration: 0.6,
                ease: "easeOut",
              },
            }}
            exit={{
              rotateY: 90,
              opacity: 0,
              transition: {
                duration: 0.6,
                ease: "easeIn",
              },
            }}
          >
            <motion.p
              className="price"
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: 1,
                y: 0,
                transition: {
                  delay: 0.3,
                  duration: 0.5,
                  ease: "backOut",
                },
              }}
            >
              <span>₹</span>999
            </motion.p>

            Month 
            <motion.p
              className="month"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{
                opacity: 1,
                scale: 1,
                transition: {
                  delay: 0.4,
                  duration: 0.4,
                },
              }}
            >
              /Month
            </motion.p>

             Description 
            <motion.p
              className="description"
              initial={{ opacity: 0 }}
              animate={{
                opacity: 1,
                transition: {
                  delay: 0.5,
                  duration: 0.6,
                },
              }}
            >
              Our affordable plan gives you full access to powerful laundry
              management tools — including order tracking, inventory control,
              driver route optimization, and customer notifications. Whether
              you're running a single outlet or a multi-location setup,
              streamline every aspect of your business and boost customer
              satisfaction.
            </motion.p>
            <motion.div
              className="points"
              initial="hidden"
              animate={isInView ? "visible" : "hidden"}
              variants={{
                hidden: { opacity: 0 },
                visible: {
                  opacity: 1,
                  transition: {
                    staggerChildren: 0.1,
                    delayChildren: 0.8,
                  },
                },
              }}
            >
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Automated pickup and delivery scheduling to save you time and
                  effort.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Live inventory tracking ensures no item goes missing or
                  unaccounted for.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Real-time notifications keep your customers updated and
                  engaged.{" "}
                </p>
              </motion.div>
              <motion.div
                className="items"
                variants={{
                  hidden: { opacity: 0, x: -10 },
                  visible: { opacity: 1, x: 0 },
                }}
              >
                <img src={PricePoint} alt="" />{" "}
                <p>
                  Smart dashboard for performance insights and business growth.{" "}
                </p>
              </motion.div>
            </motion.div>
            <button className="choose-plan-button">Choose Plan</button>
          </motion.div>
        )}
      </AnimatePresence> */}

      {/* WhatsAppButton */}

      <motion.button
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        className="cta-button"
        onClick={handleWhatsAppClick}
      >
        Contact Now
      </motion.button>
      {/* Pricing Footer */}
      <motion.div
        className="pricing-footer"
        initial={{ opacity: 0 }}
        animate={
          isInView
            ? {
                opacity: 1,
                transition: { duration: 0.6, delay: 1.4 },
              }
            : {}
        }
      >
        <div className="left">
          <h2>Download The App Now</h2>
          <motion.div
            className="images-download"
            initial={{ opacity: 0 }}
            animate={
              isInView
                ? {
                    opacity: 1,
                    transition: { duration: 0.6, delay: 1.6 },
                  }
                : {}
            }
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
        <div className="rigth">
          <h2>
            We provide Transforming <br />
            Visions into All the Digital Reality
          </h2>
        </div>
      </motion.div>

      <Qa />
    </motion.div>
  );
};

export default Pricing;

const ToggleSwitch = ({ isOn, setIsOn }) => {
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
