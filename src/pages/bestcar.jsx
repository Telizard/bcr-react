import "./style.css";

function Car2() {
  return (
    <section>
      <div className="container ">
        <div className="row m-5 p-5">
          <div className="col">
            <img src={require("../aset/girl1.png")} alt="" />
          </div>
          <div className="col">
            <h3 className="fw-bolder">Best Car Rental for any kind of trip in (Lokasimu)!</h3>
            <br />
            <h6 className="fw-bolder">
              Sewa mobil di (Lokasimu) bersama Binar Car Rental jaminan harga lebih murah dibandingkan yang lain, kondisi mobil baru, serta kualitas pelayanan terbaik untuk perjalanan wisata, bisnis, wedding, meeting, dll.
            </h6>
            <br />
            <div>
              <ul>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../aset/ceklis.png")} alt="" /> Sewa Mobil Dengan Supir di Bali 12 Jam
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../aset/ceklis.png")} alt="" />
                    Sewa Mobil Lepas Kunci di Bali 24 Jam
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../aset/ceklis.png")} alt="" />
                    Sewa Mobil Jangka Panjang Bulanan
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../aset/ceklis.png")} alt="" />
                    Gratis Antar - Jemput Mobil di Bandara
                  </h6>
                </li>
                <li>
                  <h6 className="fw-bolder">
                    {" "}
                    <img className="p-1" src={require("../aset/ceklis.png")} alt="" />
                    Layanan Airport Transfer / Drop In Out
                  </h6>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Car2;
