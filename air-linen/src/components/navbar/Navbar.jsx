import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import { Navbar, Nav, Button } from "react-bootstrap";
import phone from "../../assets/phone.png";

export default function myNavbar() {
  return (
    <Navbar bg="white" expand="lg" className="w-100 m-0 p-3">
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto d-flex justify-content-between w-50">
          <Nav.Link href="/">Home</Nav.Link>
          <Nav.Link href="/about">About</Nav.Link>
          <Nav.Link href="/quote">Get a Quote</Nav.Link>
          <Nav.Link href="/services">Services</Nav.Link>
          <Nav.Link href="/contact">Contact</Nav.Link>
          <Nav.Link href="/meet-the-team">Meet the Team</Nav.Link>
          <Nav.Link href="/privacy-policy">Privacy Policy</Nav.Link>
        </Nav>
        <Nav>
          <Nav.Link href="tel:+27791116858">
            <img src={phone} alt="phone"></img> | +(27) 079 111 6858
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
