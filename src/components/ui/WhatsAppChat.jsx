import React, { useEffect, useState } from "react";
import { FaWhatsapp } from "react-icons/fa";
import "./WhatsAppChat.scss";

const WhatsAppButton = () => {
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setAnimate(false), 700);
    return () => clearTimeout(timer);
  }, []);

  const handleWhatsAppClick = () => {
    const message = encodeURIComponent(
      "Hello LaundryAce Team 👋, I’m interested in your laundry management software. Could you please share more details?"
    );
    window.open(`https://wa.me/7012212199?text=${message}`, "_blank");
  };

  return (
    <div
      onClick={handleWhatsAppClick}
      className={`whatsapp-chat-btn${animate ? " animate" : ""}`}
    >
      <div className="whatsapp-chat-icon">
        <FaWhatsapp />
      </div>
    </div>
  );
};

export default WhatsAppButton;
