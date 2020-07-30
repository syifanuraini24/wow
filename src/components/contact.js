import React, { useState } from "react";
import ContactVector from "../assets/vector/vector-contact.png";

const Contact = () => {
  return (
    <div className="row pt-5 pb-5 contact m-0">
      <div className="col-12">
        <p style={{ fontWeight: 900, fontSize: 40, textAlign: "center" }}>
          Contact
        </p>
      </div>
      <div className="col-12">
        <div className="row justify-content-center m-3">
          <div className="col-12 col-lg-5">
            <img src={ContactVector} width={"100%"} />
          </div>
          <div className="col-12 col-lg-4 ">
            <form>
              <p style={{ fontWeight: 900, fontSize: 30, textAlign: "center" }}>
                Send Us Message
              </p>
              <div class="form-group">
                <label for="fullName">Full Name</label>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Full Name"
                />
              </div>
              <div class="form-group">
                <label for="email">Email address</label>
                <input type="email" class="form-control" placeholder="Email" />
              </div>
              <div class="input-group">
                <label for="message">Message</label>
                <div className="w-100"></div>
                <textarea
                  rows="5"
                  class="form-control"
                  aria-label="Message"
                  placeholder="Message"
                ></textarea>
              </div>
              <div className="text-center">
                <button
                  type="submit"
                  class="btn btn-outline-white mt-5 align-self-center"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
