import React, { useState } from "react";
import logo from "../assets/icons/logo.png";

const Footer = () => {
  const [menu, setMenu] = useState([
    { name: "about", url: "/#about" },
    { name: "pricing", url: "/#pricing" },
    { name: "contact", url: "/#contact" },
  ]);
  const [address, setAddress] = useState({
    street: "Jendral Sudirman Street, Kav. 100-102",
    city: "South Jakarta",
    country: "Indonesia",
  });
  const [contactPhone, setContactPhone] = useState([
    "+62 812 0987 6543",
    "+62 812 3456 7890",
  ]);
  return (
    <div className="footer row justify-content-center m-0 align-items-center pt-5">
      <div className="col-12col-lg-3 text-center">
        <p style={{ fontWeight: 900, fontSize: 20, textAlign: "center" }}>
          Address
        </p>
        <p>{address.street}</p>
        <p>
          {address.city}, {address.country}
        </p>
      </div>
      <div className="col-12 col-lg-3 mb-3 text-center">
        <img src={logo} width={50} />
      </div>
      <div className="col-12 col-lg-3 text-center">
        <p style={{ fontWeight: 900, fontSize: 20, textAlign: "center" }}>
          Phone
        </p>
        {contactPhone &&
          contactPhone.map((item, key) => {
            return <p key={key}>{item}</p>;
          })}
      </div>
      <div
        className="col-12 text-center mt-5"
        style={{
          flexDirection: "row",
          display: "flex",
          justifyContent: "center",
        }}
      >
        {menu &&
          menu.map((item, key) => {
            return (
              <a class="nav-link" href={item.url}>
                <p>{item.name.toUpperCase()}</p>
              </a>
            );
          })}
      </div>
    </div>
  );
};

export default Footer;
