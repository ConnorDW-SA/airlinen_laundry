import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";

export default function Navbar() {
  return (
    <div className="navbar d-flex justify-content-around mx-5">
      <img src={logo} alt="logo" className="logo mt-4"></img>
      <div className="d-flex w-50 justify-content-around my-5">
        <Link className="links" to="/">
          Home
        </Link>
        <Link to="/about">About</Link>
        <Link to="/quote">Get a Quote</Link>
        <Link to="/services">Services</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/meet-the-team">Meet the Team</Link>
        <Link to="/privacy-policy">Privacy Policy</Link>
      </div>
    </div>
  );
}
