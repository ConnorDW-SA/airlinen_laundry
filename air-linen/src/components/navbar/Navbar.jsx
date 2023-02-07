import React, { useState } from "react";
import "./Navbar.css";
import { Navbar } from "react-bootstrap";
import phone from "../../assets/phone.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function MyNavbar() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <Navbar bg="white" className="w-100 fixed-top">
      <div className="d-flex justify-content-between w-100 mx-5 ">
        <div className="container-logo">
          <a href="/">
            <h1 className="logo">AirLinen.</h1>
          </a>
        </div>
        <div
          role="navigation"
          className="d-none d-lg-flex w-50 justify-content-between pt-3"
        >
          <a className="" href="/contact">
            Contact
          </a>
          <a href="/privacy-policy">Privacy Policy</a>
          <a href="tel:+27791116858">
            <img src={phone} alt="phone" className="phone"></img> | +(27) 079
            111 6858
          </a>
        </div>
        <button
          className="button d-lg-none"
          onClick={() => setShowDropdown(!showDropdown)}
        >
          <FontAwesomeIcon icon={faBars} />
        </button>
        {showDropdown && (
          <div
            className="dropdown-container d-flex flex-column"
            style={{ top: "100%", left: 0 }}
          >
            <a className="p-3" href="/contact">
              Contact
            </a>
            <a className="p-3" href="/privacy-policy">
              Privacy Policy
            </a>
            <a className="p-3" href="tel:+27791116858">
              +(27) 079 111 6858
            </a>
          </div>
        )}
      </div>
    </Navbar>
  );
}
