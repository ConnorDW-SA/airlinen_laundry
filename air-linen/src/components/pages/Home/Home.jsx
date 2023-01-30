import React from "react";
import Navbar from "../../navbar/Navbar";
import mainpic from "../../../assets/mainpic.jpg";
import "./Home.css";
import { Button } from "react-bootstrap";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="picture-div text-light">
        <img src={mainpic} alt="mainpic" className="mainpic" />
        <div className="main-text">
          <h1 className="display-4 header-text">
            Quality laundry service <br /> at your fingertips
          </h1>
          <h2>We take care of your laundry</h2>
          <Button className="w-25">Explore our Services</Button>
        </div>
      </div>
      <div className="container mt-5">
        <h1 className="text-center">How it works</h1>
      </div>
      <div className="d-flex text-center justify-content-around mx-5 mt-5 pt-5">
        <div className="w-25">
          <img src="https://via.placeholder.com/50 " alt="how it works" />
          <h2>We collect your laundry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            vel excepturi, fuga rem aliquam blanditiis dolore quo, omnis nihil
            laborum unde odio vero eos assumenda natus quaerat repudiandae
            voluptatibus voluptatem.
          </p>
        </div>
        <div className="w-25">
          <img src="https://via.placeholder.com/50 " alt="how it works" />
          <h2>We wash your laundry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            vel excepturi, fuga rem aliquam blanditiis dolore quo, omnis nihil
            laborum unde odio vero eos assumenda natus quaerat repudiandae
            voluptatibus voluptatem.
          </p>
        </div>
        <div className="w-25">
          <img src="https://via.placeholder.com/50 " alt="how it works" />
          <h2>We deliver your laundry</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus
            vel excepturi, fuga rem aliquam blanditiis dolore quo, omnis nihil
            laborum unde odio vero eos assumenda natus quaerat repudiandae
            voluptatibus voluptatem.
          </p>
        </div>
      </div>
      <hr></hr>
      <div>
        <h1>Services we offer</h1>
        <div className="picture-squares">
          <div className="square">
            <img src="https://via.placeholder.com/50 " alt="how it works" />
            <h2>Wash and Fold</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vel excepturi, fuga rem aliquam blanditiis dolore quo,
              omnis nihil laborum unde odio vero eos assumenda natus quaerat
              repudiandae voluptatibus voluptatem.
            </p>
          </div>
          <div className="square">
            <img src="https://via.placeholder.com/50 " alt="how it works" />
            <h2>Wash and Fold</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vel excepturi, fuga rem aliquam blanditiis dolore quo,
              omnis nihil laborum unde odio vero eos assumenda natus quaerat
              repudiandae voluptatibus voluptatem.
            </p>
          </div>
          <div className="square">
            <img src="https://via.placeholder.com/50 " alt="how it works" />
            <h2>Wash and Fold</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vel excepturi, fuga rem aliquam blanditiis dolore quo,
              omnis nihil laborum unde odio vero eos assumenda natus quaerat
              repudiandae voluptatibus voluptatem.
            </p>
          </div>
          <div className="square">
            <img src="https://via.placeholder.com/50 " alt="how it works" />
            <h2>Wash and Fold</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Temporibus vel excepturi, fuga rem aliquam blanditiis dolore quo,
              omnis nihil laborum unde odio vero eos assumenda natus quaerat
              repudiandae voluptatibus voluptatem.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
