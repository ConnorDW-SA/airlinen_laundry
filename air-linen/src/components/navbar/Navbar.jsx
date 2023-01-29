import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Button } from "react-bootstrap";

export default function myNavbar() {
  return (
    <Navbar className="navbar-expand-lg navbar-light p-0 m-0">
      <Link className="navbar-brand" to="/">
        <img className="logo ml-5" src={logo} alt="logo"></img>
      </Link>
      <div className="collapse navbar-collapse d-flex justify-content-between h-100">
        <div className="navbar-nav  mr-auto d-flex w-50 justify-content-between h-100 pt-4">
          <Link className="nav-item nav-link links-links h-100" to="/">
            Home
          </Link>
          <Link className="nav-item nav-link links-links h-100" to="/about">
            About
          </Link>
          <Link className="nav-item nav-link links-links h-100" to="/quote">
            Get a Quote
          </Link>
          <Link className="nav-item nav-link links-links h-100" to="/services">
            Services
          </Link>
          <Link className="nav-item nav-link links-links h-100" to="/contact">
            Contact
          </Link>
          <Link
            className="nav-item nav-link links-links h-100"
            to="/meet-the-team"
          >
            Meet the Team
          </Link>
          <Link
            className="nav-item nav-link links-links h-100"
            to="/privacy-policy"
          >
            Privacy Policy
          </Link>
        </div>
        <div className="navbar-nav">
          <p className="navbar-text">Phone: 0800800080</p>
          <Button className="nav-item nav-link appoint-button">
            Make an Appointment
          </Button>
        </div>
      </div>
    </Navbar>
  );
}
