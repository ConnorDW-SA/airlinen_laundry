import React from "react";
import phone from "../../assets/phone.png";
import "./Footer.css";

export default function Footer() {
  return (
    <div className="footer container-fluid pt-4 d-lg-flex justify-content-between">
      <a href="/privacy">
        <p className="pb-2 text-center"> Privacy Policy</p>
      </a>
      <p className="text-wrap text-center">
        This website and its contents are the copyright of AirLinen - C 2022 All
        rights reserved.
      </p>
      <a href="tel:+27791116858">
        <p className="text-wrap text-center">
          <img src={phone} alt="phone" className="phone"></img> | +(27) 079 111
          6858
        </p>
      </a>
    </div>
  );
}
