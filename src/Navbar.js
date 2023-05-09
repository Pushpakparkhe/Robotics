import React, { useState } from "react";
import { Link } from 'react-router-dom';

function Navbar() {
  const [slider, setslider] = useState(false);

  return (
    <>
      <section className="navbar-bg">
        <nav class="navbar navbar-expand-lg navbar-dark bg-trans">
          <div class="container-fluid">
            <div>
              <img
                src={require("./images/logo.png")}
                style={{ width: "50px" }}
              />
              <a class="navbar-brand" href="#">
                ROBOTICS
              </a>
            </div>
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
              onClick={() => setslider(!slider)}
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div class={`collapse navbar-collapse ${slider ? "show" : ""}`}>
              <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                <li class="nav-item">
                  <Link to="/" class="nav-link active" aria-current="page">
                    Home
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Services" class="nav-link" >
                    Services
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/about" class="nav-link" >
                    About
                  </Link>
                </li>
                <li class="nav-item">
                  <Link to="/Contact" class="nav-link" >
                    Contact
                  </Link>
                </li>
              </ul>
              <form class="d-flex">
                <input
                  class="form-control me-2"
                  type="search"
                  placeholder="Search"
                  aria-label="Search"
                />
                <button class="btn btn-outline-success" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </nav>
      </section>
    </>
  );
}

export default Navbar;
