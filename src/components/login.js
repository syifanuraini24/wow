import React, { useState } from "react";
import ContactVector from "../assets/vector/vector-contact.png";
import logo from "../assets/icons/logo-blue.png";

const Login = () => {
  return (
    <div
      className="row m-0 vh-100 justify-content-center"
      style={{ backgroundColor: "#f3f3f3" }}
    >
      <div className="col-12 col-lg-8 d-none d-lg-block login-side">
        <div
          className="row justify-content-center align-items-center"
          style={{ height: "100%" }}
        >
          <div className="col-6">
            <p style={{ fontWeight: 500, fontSize: 30, textAlign: "center" }}>
              Manage your Goods now, and start to increase your profit using our
              AI System
            </p>
            <p>
              Most our clients satisfied with the result they've got, many of
              our client get increase their profit up to 65%, and our Artifical
              Intelligence have only 1.3% error rate from mean value and 99%
              percent accuracy
            </p>
          </div>
        </div>
      </div>
      <div className="col-10 col-lg-4 align-self-center">
        <form>
          <div className="text-center">
            <a href="/">
              <img src={logo} width={40} className="text-center mb-5" />
            </a>
          </div>
          <p style={{ fontWeight: 900, fontSize: 30, textAlign: "center" }}>
            LOGIN
          </p>
          <div class="form-group">
            <label for="email">Email address</label>
            <input type="email" class="form-control" placeholder="Email" />
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              type="password"
              class="form-control"
              placeholder="Password"
            />
          </div>
          <div className="text-center">
            <button type="submit" class="btn btn-outline-main mt-5 pl-5 pr-5">
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
