import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="d-flex w-50 justify-content-around my-5">
      <img src="../../../public/logo.png" alt="laundry" className="logo"></img>
      <Link to="/">Home</Link>
      <Link to="/about">About</Link>
      <Link to="/quote">Get a Quote</Link>
      <Link to="/services">Services</Link>
      <Link to="/contact">Contact</Link>
      <Link to="/meet-the-team">Meet the Team</Link>
      <Link to="privacy-policy">Privacy Policy</Link>
    </div>
  );
}
