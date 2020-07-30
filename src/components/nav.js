import React, { useEffect, useState } from "react";
import logo from "../assets/icons/logo.png";

const Login = () => {
  const [BG, setBG] = useState("");
  const [currentMenu, setCurrentMenu] = useState("");
  const [menu, setMenu] = useState([
    { name: "about", url: "/#about" },
    { name: "pricing", url: "/#pricing" },
    { name: "contact", url: "/#contact" },
  ]);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const BGNew = window.scrollY < 100 ? "" : "#25c0f5";
      setBG(BGNew);
    });
  }, []);

  return (
    <nav
      class="navbar navbar-expand-lg fixed-top navbar-light "
      style={{
        paddingLeft: "5%",
        marginRight: "5%",
        paddingTop: "3%",
        backgroundColor: BG,
      }}
    >
      <a class="navbar-brand" href="/#home" onClick={() => setCurrentMenu("")}>
        <img
          src={logo}
          width="50"
          height="50"
          class="d-inline-block"
          alt=""
          style={{
            marginRight: 20,
          }}
        />
        <h3 className="d-inline-block align-middle m-0 sm-black nav-menu text-white">
          HOME
        </h3>
      </a>

      <div
        class="modal fade"
        id="exampleModal"
        tabindex="-1"
        role="dialog"
        aria-labelledby="exampleModalLabel"
        aria-hidden="true"
      >
        <div class="modal-dialog" role="document">
          <div class="modal-content">
            <div class="modal-header">
              <h5 class="modal-title" id="exampleModalLabel">
                Modal title
              </h5>
              <button
                type="button"
                class="close"
                data-dismiss="modal"
                aria-label="Close"
              >
                <span aria-hidden="true">&times;</span>
              </button>
            </div>
            <div class="modal-body">...</div>
            <div class="modal-footer">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
              <button type="button" class="btn btn-primary">
                Save changes
              </button>
            </div>
          </div>
        </div>
      </div>
      <button
        onClick={() => {
          setBG("#25c0f5");
        }}
        class="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav ml-auto">
          {menu &&
            menu.map((item, key) => {
              return (
                <li class="nav-item mr-5">
                  <a
                    class="nav-link"
                    href={item.url}
                    onClick={() => setCurrentMenu(item)}
                  >
                    <h3
                      className={`nav-menu ${
                        currentMenu == item ? "text-secondary" : "text-body"
                      } m-0`}
                    >
                      {item.name.toUpperCase()}
                    </h3>
                  </a>
                </li>
              );
            })}

          <a href="/login">
            <button
              type="button"
              class={`btn pl-5 pr-5 ${
                BG ? "btn-outline-white" : "btn-outline-main"
              }`}
            >
              LOGIN
            </button>
          </a>
        </ul>
      </div>
    </nav>
  );
};

export default Login;
