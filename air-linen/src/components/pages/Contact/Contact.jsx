import Navbar from "../../navbar/Navbar";
import Footer from "../../navbar/Footer";
import React from "react";

export default function About() {
  return (
    <div>
      <Navbar />

      <div className="mt-5 pt-5">Contact us</div>
      <p>Unit 3, 22 Bermuda Street, Paarden Eiland, Cape Town, 7405</p>
      <p>airlinenlaundry@gmail.com</p>
      <Footer />
    </div>
  );
}
