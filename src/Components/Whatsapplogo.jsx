// import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsApplogo.css'; // Import your CSS file

const WhatsApplogo = () => {
  const handleClick = () => {
    // Replace with your WhatsApp link
    window.open('https://wa.me/+918766912880', '_blank');
  };

  return (
    <div className="whatsapp-logo" onClick={handleClick}>
      <FaWhatsapp />
    </div>
  );
};

export default WhatsApplogo;
