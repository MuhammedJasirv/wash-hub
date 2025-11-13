import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./Qa.scss";

const Qa = () => {
  return (
    <div className="qa">
      <h2>Frequently asked questions</h2>
      <div className="options">
        <div className="left-section">
          <List
            text="Can LaundryAce be used for both laundry and dry-cleaning businesses?"
            content="Yes. Our software supports wash-and-fold, dry-cleaning, ironing, and bulk services with customized pricing"
          />
          <List
            text="Is my data safe?"
            content="Absolutely. We use secure, encrypted cloud servers with daily backups and enterprise-grade protection."
          />
          {/* <List
            text="How to Use this Template?"
            content="Simply install the template, import the necessary components, and adjust the styles and content as needed for your brand."
          />
          <List
            text="Best web design agency ever is?"
            content="We believe our agency delivers top-notch web design services, focusing on user experience, performance, and modern aesthetics."
          />
          <List
            text="How can I order web design services?"
            content="You can order our web design services by contacting us through our website or by filling out the inquiry form on our contact page."
          /> */}
        </div>
        <div className="right">
          <List
            text="Can I get my own branded app?"
            content="Yes — we provide fully white-labeled Android and iOS apps with your logo and business name."
          />
          <List
            text="Do you offer training and support?"
            content="Yes. Our onboarding team helps set up your system, and 24×7 chat support is always available."
          />
          {/* <List
            text="I received the wrong item, what do I do?"
            content="If you received the wrong item, please contact our support team with your order details and we will resolve the issue promptly."
          />
          <List
            text="What are benefits of this template?"
            content="Our template offers a modern design, responsive layout, easy customization, and comprehensive documentation to help you launch quickly."
          />
          <List
            text="How promote the product?"
            content="Promote your product by leveraging social media, creating engaging content, and utilizing our built-in marketing tools for maximum reach."
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Qa;

const List = ({
  text,
  content = "A good design is not only aesthetically pleasing, but also functional. It should be able to solve the problem.",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className={`list-items`} onClick={() => setIsOpen(!isOpen)}>
      <div className="list-titile">
        <p>{text}</p>
        <span>{isOpen ? "-" : "+"}</span>
      </div>

      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            className="items-details"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
          >
            <p>{content}</p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
