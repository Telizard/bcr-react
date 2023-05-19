import React from "react";
import { Container, Row } from "react-bootstrap";
import { Outlet, Link } from "react-router-dom";

function Hero2() {
  return (
    <div className="jumbotron jumbotron-fluid" style={{ backgroundColor: "#f1f3ff" }} container>
      <div className="container">
        <div className="row">
          <div className="col text-start p-5">
            {/* <h2>Sewa &amp; Rental Mobil Terbaik di kawasan (Lokasimu)</h2> */}
            <br />
            {/* <h6 className="fw-bold">Selamat datang di Binar Car Rental. Kami menyediakan mobil kualitas terbaik dengan harga terjangkau. Selalu siap melayani kebutuhanmu untuk sewa mobil selama 24 jam.</h6> */}
            {/* <div className="start-0 pt-2">
              <></>
              <Link to="/searchform">
                <button type="button" className="btn text-white" style={{ backgroundColor: "#5CB85F" }}>
                  Mulai Sewa Mobil
                </button>
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero2;
