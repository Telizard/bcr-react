import { Outlet, Link } from "react-router-dom";
import "./button.css";

function Buttonx() {
  return (
    <div className="tombol1">
      <></>
      <Link to="./searchform">
        <button type="button" className="btn text-white" style={{ backgroundColor: "#5CB85F" }}>
          Mulai Sewa Mobil
        </button>
      </Link>
    </div>
  );
}

export default Buttonx;
