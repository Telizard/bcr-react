import React, { useState } from "react";
import "./form.css";
import { Link, useNavigate } from "react-router-dom";

function Form() {
  const navigate = useNavigate();
  const [name, setName] = useState();
  const [category, setCategory] = useState();

  const handleSubmit = (evt) => {
    navigate(`/result?name=${name}&category=${category}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="container d-flex justify-content-center">
        <div className="kotak w-75">
          <div className="container text-center m-3">
            <div className="row">
              <div className="col">
                <div>
                  <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label">
                      Nama Mobil
                    </label>
                    <input onChange={(evt) => setName(evt.target.value)} type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Ketik nama/tipe mobil" />
                  </div>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Kategori
                  </label>
                  <select className="form-select" aria-label="Default select example" onChange={(evt) => setCategory(evt.target.value)}>
                    <option selected>Masukan Kapasitas Mobil</option>
                    <option value={1}>2-4 Orang</option>
                    <option value={2}>4-6 Orang</option>
                    <option value={3}>6-8 Orang</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Harga
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Masukan harga sewa perhari</option>
                    <option value={1}> {"<"} Rp 400.000</option>
                    <option value={2}>Rp. 400.000 - Rp. 600.000</option>
                    <option value={3}>{">"} Rp 400.000</option>
                  </select>
                </div>
              </div>
              <div className="col">
                <div className="mb-3">
                  <label htmlFor="exampleInputEmail1" className="form-label">
                    Status
                  </label>
                  <select className="form-select" aria-label="Default select example">
                    <option selected>Disewa</option>
                    <option value={1}>Tersedia</option>
                    <option value={2}>Tidak Ada</option>
                  </select>
                </div>
              </div>
              <div className="col p-4">
                <Link to={"/result"}>
                  {" "}
                  <button type="submit" className="btn text-white" style={{ background: "#5cb85f" }} id="tombol1">
                    Cari Mobil
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}

export default Form;
