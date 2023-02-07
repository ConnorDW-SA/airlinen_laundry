import Navbar from "../../navbar/Navbar";
import Footer from "../../navbar/Footer";
import React from "react";
import "./Contact.css";
import phone from "../../../assets/phone.png";

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center ">
      <Navbar />
      <div class=" container my-5 pt-5 footer-fix">
        <div class="text-left content-div">
          <div class="mt-5 mb-4 pb-2">
            <h1>Contact us</h1>
          </div>
          <p>
            <p>
              <a href="tel:+27791116858">
                <img src={phone} alt="phone" className="phone"></img> | +(27)
                079 111 6858
              </a>
            </p>
            Unit 3, 22 Bermuda Street <br /> Paarden Eiland, Cape Town, 7405
          </p>
          <a href="mailto:airlinenlaundry@gmail.com">
            <p className="text-primary">@airlinenlaundry@gmail.com</p>
          </a>
        </div>
        <div className="map-container">
          <iframe
            title="map"
            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14031.840579818683!2d18.4751863!3d-33.9122055!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x18e2d5641d79fceb!2sUnit+3%2C+AirLinen+Laundry%2C+22+Bermuda+St%2C+Paarden+Eiland%2C+Cape+Town%2C+7405!5e0!3m2!1sen!2sza!4v1675677161737"
            width="600"
            height="450"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
            className="map-iframe"
          ></iframe>
        </div>
      </div>

      <Footer />
    </div>
  );
}
