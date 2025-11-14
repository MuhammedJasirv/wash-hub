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
            text="What is LaundryAce?"
            content="LaundryAce is a cloud-based laundry management software designed for laundry shops, dry cleaners, and new startup owners. It helps manage orders, customers, billing, pickup & delivery, and operations from one platform. "
          />
          <List
            text="Who can use LaundryAce?"
            content={`LaundryAce is suitable for:
- Laundry shop owners
- Dry cleaning businesses
- On-demand pickup & delivery services
- New entrepreneurs starting a laundry business
- Multi-branch laundry chains`}
          />
          <List
            text=" Do I need technical knowledge to use the software? "
            content="No. The system is very user-friendly and requires zero technical skills. "
          />
          <List
            text=" Can I manage pickup and delivery with LaundryAce?"
            content="Yes. LaundryAce supports complete pickup & delivery operations including route tracking, delivery updates, and customer notifications.  "
          />
          <List
            text="Does LaundryAce support multiple branches?"
            content="Yes. You can manage unlimited branches with separate reports and role-based staff access.  "
          />
          <List
            text="Can customers place orders online?"
            content="Yes. Customers can place orders via a web portal or mobile app (optional). "
          />
          <List
            text="Is there a delivery agent/driver app?"
            content="Yes. Delivery staff can update pickup, delivery, and payment status using the driver app "
          />
        </div>
        <div className="right">
          <List
            text="Can I customize my pricing?"
            content="Yes. You can configure per-item price, per-kg weight price, express charges, add-ons, and GST"
          />
          <List
            text="Does the system generate invoices?"
            content="Yes. LaundryAce provides automatic GST invoices, receipts, payment tracking, and downloadable PDFs."
          />
          <List
            text="Is my data secure?"
            content="Yes. LaundryAce uses secure cloud servers, SSL protection, and daily backups. "
          />
          <List
            text="Can I access LaundryAce on mobile devices?"
            content="Yes. The system works on phones, tablets, laptops, and desktops"
          />
          <List
            text="Do you provide training or onboarding?"
            content="Yes. Training, setup support, and tutorials are provided."
          />
          <List
            text="How do I get started?"
            content="Just sign up on the website and our team will help set up your account"
          />
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
            <p>
              {content.split("\n").map((line, index) => (
                <React.Fragment key={index}>
                  {line}
                  <br />
                </React.Fragment>
              ))}
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
