import React from "react";
import Navbar from "../../navbar/Navbar";
import mainpic from "../../../assets/homepage.jpg";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="w-100 h-50">
        <img src={mainpic} alt="homepage" className="w-100 mainpic"></img>
      </div>
    </div>
  );
}
