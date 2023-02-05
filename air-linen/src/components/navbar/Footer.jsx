import React from "react";
import phone from "../../assets/phone.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer py-4">
      <a href="tel:+27791116858">
        <img src={phone} alt="phone" className="phone"></img> | +(27) 079 111
        6858
      </a>
    </div>
  );
}
