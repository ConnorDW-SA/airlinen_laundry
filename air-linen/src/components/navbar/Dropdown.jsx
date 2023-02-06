import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import "./Dropdown.css";

function CustomDropdown() {
  const [showDropdown, setShowDropdown] = useState(false);

  return (
    <div className="dropdown d-lg-none">
      <button
        className="bg-light"
        onClick={() => setShowDropdown(!showDropdown)}
      >
        <FontAwesomeIcon icon={faBars} />
      </button>
      {showDropdown && (
        <ul className={`dropdown-links ${showDropdown ? "show" : ""}`}>
          <li>1</li>
          <li>2</li>
          <li>3</li>
        </ul>
      )}
    </div>
  );
}

export default CustomDropdown;
