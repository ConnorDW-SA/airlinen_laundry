import Navbar from "../../navbar/Navbar";
import Footer from "../../navbar/Footer";
import React from "react";
import "./Privacy.css";

export default function Privacy() {
  return (
    <div className="d-flex flex-column h-100">
      <Navbar />
      <div className="privacy-content w-50 mx-auto my-5 mx-5 px-5">
        <h1 className="mt-5 pt-5">PRIVACY POLICY</h1>{" "}
        <p className="text-muted pt-2">
          It is of the utmost importance for us to protect the privacy and
          personal information of our site visitors and users.
        </p>
        <br />
        <h4>Data Collection, Use, and Sharing</h4> <br />
        <p className="text-muted">
          {" "}
          We are the sole proprietors of the information collected on this site.
          We only collect data that are voluntarily provided by site visitors,
          and we never sell this information to any third parties without
          informed consent. Unless you indicate otherwise, we may contact you to
          tell you about AirLinen Laundry updates or changes to this privacy
          policy.
        </p>
        <br />
        <h4>Control Over Data</h4> <br />{" "}
        <p className="text-muted">
          You are free to contact us at any time to inquire about what
          information we hold about you, to change any of your details which
          need to be corrected or updated, or to express any concerns you have
          regarding our use of your data.
        </p>{" "}
        <br />
        <h4>Information Security</h4> <br />
        <p className="text-muted mb-5 pb-3">
          We take comprehensive steps to protect your information. Sensitive
          data is always encrypted, stored on our secure servers, and
          transmitted using the safest methods.
        </p>
      </div>
      <Footer />
    </div>
  );
}
