import React, { useState } from "react";

import Pricing from "./pricing";
import Contact from "./contact";
import Login from "./login";
import Nav from "./nav";

const About = () => {
  return (
    <div className="row m-0">
      <div className="col-12 col-lg-6 offset-lg-1">
        <p style={{ fontWeight: 900, fontSize: 40, textAlign: "left" }}>
          We are pioneers in the use Data Analytics and Machine Learning AI
          Prediction
        </p>
        <p>
          Most our clients satisfied with the result they've got, many of our
          client get increase their profit up to 65%, and our Artifical
          Intelligence have only 1.3% error rate from mean value and 99% percent
          accuracy
        </p>
      </div>
      <div className="col-12 col-lg-6 offset-lg-1 mt-5">
        <p style={{ fontWeight: 900, fontSize: 40 }}>Our Clients</p>
        <div className="row">
          <div className="col">
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              Company
            </p>
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              156+
            </p>
          </div>
          <div className="col">
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              Distributor
            </p>
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              789+
            </p>
          </div>
          <div className="col">
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              Online Shop
            </p>
            <p
              style={{
                fontSize: 20,
                color: "gray",
              }}
            >
              1523+
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
