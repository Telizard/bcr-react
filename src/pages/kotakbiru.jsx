import { Link } from "react-router-dom";

function Kotakbiru() {
  return (
    <div className="container text-center mt-3 pt-5">
      <div className="row">
        <div className="col rounded-3" style={{ backgroundColor: "#0D28A6" }}>
          <h1 className="text-white pt-5 mt-4">Sewa Mobil di (Lokasimu) Sekarang</h1>
          <div></div>
          <h6 className="text-white text-wrap pt-3 mt-3">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </h6>
          <div className="mt-5 pt-5">
            <Link to={"/searchform"}>
              <button type="button" className="btn text-white" style={{ backgroundColor: "#5CB85F" }}>
                Mulai Sewa Mobil
              </button>
            </Link>
          </div>
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>
  );
}

export default Kotakbiru;
