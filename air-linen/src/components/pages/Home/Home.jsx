import React from "react";
import Navbar from "../../navbar/Navbar";
import mainpic from "../../../assets/mainpic.jpg";
import "./Home.css";
import secondpic from "../../../assets/secondmain.jpg";
import ironpic from "../../../assets/irontowels.jpg";
import Footer from "../../navbar/Footer";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="hero-section mx-5">
        <img src={secondpic} alt="main" className="main-pic" />
        <h1 className="display-5 ml-5">We take care of your laundry</h1>
      </div>
      <div className="enquire container-fluid ml-5 pl-4 mt-5">
        <p className="enquire-text">
          AirLinen is a growing laundry service that aims to provide only the
          best service for our clients. <br /> Focused mainly on Airbnb's and
          hotels, we have quickly expanded to cater to personal laundry needs
          too.
        </p>
        <a href="/contact">
          <button className="enquire-button">Enquire Now</button>
        </a>
      </div>
      <div className="services container-fluid my-5">
        <h1 className="text-center mb-5">Services we offer</h1>
        <div className="d-flex w-75 m-auto backgroundpic">
          <img src={mainpic} alt="second" className="pic-dim" />
          <p className="text-center mt-5 pt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            delectus temporibus, sunt perspiciatis expedita dignissimos labore
            veniam eum natus quam quidem eaque? Ex esse autem libero iste illo
            pariatur sit.
          </p>
        </div>
        <div className="d-flex w-75 m-auto backgroundpic">
          <p className="text-center mt-5 pt-5">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil
            delectus temporibus, sunt perspiciatis expedita dignissimos labore
            veniam eum natus quam quidem eaque? Ex esse autem libero iste illo
            pariatur sit.
          </p>
          <img src={ironpic} alt="second" className="pic-dim" />
        </div>
        <div className="fourthPic pic-dim"></div>
      </div>
      <Footer />
    </div>
  );
}
