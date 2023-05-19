import React from "react";
import { Outlet, Link } from "react-router-dom";
import { Container, Navbar, Nav } from "react-bootstrap";

const Navbarc = () => {
  return (
    <nav className="navbar navbar-expand-lg" style={{ backgroundColor: "#f1f3ff" }}>
      <div className="container-fluid">
        <a className="navbar-brand " href="#">
          <Link to="/">
            <img src={require("../aset/logo.png")} alt="" className="pt-2 mx-4 img-fluid" id="logo1" />
          </Link>
        </a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse justify-content-evenly" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Our Services
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Why Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                Testimonial
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link active" aria-current="page" href="#">
                FAQ
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbarc;
