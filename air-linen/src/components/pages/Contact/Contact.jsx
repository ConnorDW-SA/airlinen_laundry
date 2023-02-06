import Navbar from "../../navbar/Navbar";
import Footer from "../../navbar/Footer";
import React from "react";
import "./Contact.css";

export default function About() {
  return (
    <div className="d-flex flex-column align-items-center ">
      <Navbar />
      <div class=" container my-5 py-5">
        <div class="text-left content-div">
          <div class="mt-5 mb-4 pb-2">
            <h1>Contact us</h1>
          </div>
          <p>
            Unit 3, 22 Bermuda Street <br /> Paarden Eiland, Cape Town, 7405
          </p>
          <a href="mailto:airlinenlaundry@gmail.com">
            <p className="text-primary">@airlinenlaundry@gmail.com</p>
          </a>
        </div>
        <iframe
          title="map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.1240985762674!2d18.475186300000004!3d-33.9122055!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1dcc5c4b515cc7cf%3A0xed8ac8a487854463!2s3%2C%2022%20Bermuda%20St%2C%20Paarden%20Eiland%2C%20Cape%20Town%2C%207405!5e0!3m2!1sen!2sza!4v1675677161737!5m2!1sen!2sza"
          width="600"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>

      <Footer />
    </div>
  );
}
