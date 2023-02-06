import React from "react";
import phone from "../../assets/phone.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer container-fluid pt-3 d-flex justify-content-between">
      <a href="/privacy">Privacy Policy</a>
      <p>
        This website and its contents are the copyright of AirLinen - C 2022 All
        rights reserved.
      </p>
      <a href="tel:+27791116858">
        <img src={phone} alt="phone" className="phone"></img> | +(27) 079 111
        6858
      </a>
    </div>
  );
}
