import React from "react";

import Pricing from "./pricing";
import Contact from "./contact";
import Login from "./login";
import Nav from "./nav";
import About from "./about";
import Footer from "./footer";

const Home = () => {
  return (
    <div>
      <Nav />
      <div id="home">
        <div style={{ width: "75%" }}>
          <p style={{ fontWeight: 900, fontSize: 40, textAlign: "left" }}>
            Manage Your Goods And Improve Your Profit
          </p>
          <p>
            Manage all of your <b>Incoming Goods</b> and <b>Outcoming Goods</b>{" "}
            and Analys your <b>Profit</b> using our best system. It is easy to
            use and very user friendly
          </p>
        </div>
      </div>
      <div id="about">
        <About />
      </div>
      <div id="pricing">
        <Pricing />
      </div>
      <div id="contact">
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
