import React from "react";
import Navbar from "../../navbar/Navbar";
import mainpic from "../../../assets/mainpic.jpg";
import "./Home.css";
import secondpic from "../../../assets/secondmain.jpg";
import ironpic from "../../../assets/irontowels.jpg";
import Footer from "../../navbar/Footer";

export default function Home() {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <div className="hero-section mx-5">
        <img src={secondpic} alt="main" className="main-pic" />
        <h1 className="display-5 ml-5 word-wrap w-50">
          We take care of your laundry
        </h1>
      </div>
      <div className="enquire container-fluid ml-5 pl-4 mt-5">
        <p className="enquire-text word-wrap w-75 ">
          AirLinen is a growing laundry service that aims to provide only the
          best service for our clients. <br /> Focused mainly on Short term
          lets, airbnb's, guest houses, hotels, spas and salons, we have quickly
          expanded to cater for personal laundry needs too.
        </p>
        <a href="/contact">
          <button className="enquire-button">Enquire Now</button>
        </a>
      </div>
      <div className="services container-fluid my-5">
        <h1 className="text-center mb-5">Services we offer</h1>
        <div className="d-lg-flex d-md-block w-75 m-auto backgroundpic">
          <img src={mainpic} alt="second" className="pic-dim" />
          <div>
            <h1 className="text-left pt-5 ml-5">Daily Collection Services</h1>
            <p className="text-left mt-2 pt-5 mx-5 pb-4">
              We provide daily collection and dropoff services for all your
              laundry needs. We operate in and around the City of Cape Town.
              Simply let us know which location and time suits you!
            </p>
          </div>
        </div>
        <div className="d-lg-flex d-md-block w-75 m-auto backgroundpic">
          <div>
            <h1 className="text-left pt-5 ml-5">Our Laundry guarantee</h1>
            <p className="text-left mt-2 pt-5 mx-5">
              We strive to achieve the best quality results for commercial
              businesses, or for individual customers.
            </p>
          </div>
          <img src={ironpic} alt="second" className="pic-dim" />
        </div>
        <div className="fourthPic pic-dim"></div>
      </div>
      <Footer />
    </div>
  );
}
