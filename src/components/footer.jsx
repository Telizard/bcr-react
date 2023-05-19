import React from "react";
import { Container, Row } from "react-bootstrap";

function Footer() {
  return (
    <div className="container text-start mt-5 pt-5">
      <div className="row">
        <div className="col">
          <h6 className="fw-bold">Jalan Suroyo No. 161 Mayangan Kota Probolonggo 672000</h6>
          <h6 className="fw-bold pt-3">binarcarrental@gmail.com</h6>
          <h6 className="fw-bold pt-3">081-233-334-808</h6>
        </div>
        <div className="col">
          <h6 className>Our services</h6>
          <h6 className="pt-3">Why Us</h6>
          <h6 className="pt-3">Testimonial</h6>
          <h6 className="pt-3">FAQ</h6>
        </div>
        <div className="col">
          <h6 className="fw-bold">Connect with us</h6>
          <img className="m-1 pt-2" src={require("../aset/facebook.png")} alt="" />
          <img className="m-1 pt-2" src={require("../aset/ig3.png")} alt="" />
          <img className="m-1 pt-2" src={require("../aset/twitter3.png")} alt="" />
          <img className="m-1 pt-2" src={require("../aset/mail.png")} alt="" />
          <img className="m-1 pt-2" src={require("../aset/twitch.png")} alt="" />
        </div>
        <div className="col">
          <h6 className="fw-bold">Copyright Binar 2022</h6>
          <img className="mt-2 pt-2" src={require("../aset/logo.png")} alt="" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
