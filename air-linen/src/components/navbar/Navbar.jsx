import React from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import phone from "../../assets/phone.png";

export default function myNavbar() {
  return (
    <Navbar bg="white" className="w-100 fixed-top">
      <div className="d-flex justify-content-between w-100 mx-5">
        <div className="container-logo">
          <a href="/">
            <h1 className="logo">AirLinen.</h1>
          </a>
        </div>
        <div
          role="navigation"
          className="d-flex w-50 justify-content-between pt-3"
        >
          <a href="/contact">Contact</a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="tel:+27791116858">
            <img src={phone} alt="phone" className="phone"></img> | +(27) 079
            111 6858
          </a>
        </div>
      </div>
    </Navbar>
  );
}
