import React from "react";
import Navbar from "../../navbar/Navbar";
import mainpic from "../../../assets/homepage.jpg";
import "./Home.css";
import iconHouse from "../../../assets/iconHouses.svg";
import iconHotel from "../../../assets/iconHotel.svg";
import iconAirbnb from "../../../assets/iconAirbnb.svg";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-100 h-50">
        <img src={mainpic} alt="homepage" className="w-100 mainpic"></img>
        <div className="d-flex justify-content-around text-center my-5 w-75 mx-auto">
          <div className="">
            <img
              className="icons-text w-50 mb-2"
              src={iconHouse}
              alt="iconHouse"
            ></img>
            <h2 className="icons-text">Laundry Guest Houses</h2>
          </div>
          <div>
            <img
              className="icons-text  w-50 mb-2"
              src={iconHotel}
              alt="iconHotel"
            ></img>
            <h2 className="icons-text">Laundry Hotels</h2>
          </div>
          <div>
            <img
              className="icons-text  w-50 mb-2"
              src={iconAirbnb}
              alt="iconAirbnb"
            ></img>
            <h2 className="icons-text">Laundry Airbnb</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
