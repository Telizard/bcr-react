function FAQ() {
  return (
    <div className="container text-start">
      <div className="row">
        <div className="col mt-5 pt-5">
          <h1 className="fw-bold">Frequently Asked Question</h1>
          <h5 className=" pt-4 fw-bold">Lorem ipsum dolor sit amet, consectetur adipiscing elit</h5>
        </div>
        <div className="col mt-5 pt-5 fw-bold">
          <ul>
            <li>
              <select className="form-select m-3 p-3" aria-label="Default select example" disabled style={{ backgroundColor: "#FFFFFF" }}>
                <option selected>Apa saja syarat yang dibutuhkan?</option>
              </select>
            </li>
            <ul>
              <li>
                <select className="form-select m-3 p-3" aria-label="Default select example" disabled style={{ backgroundColor: "#FFFFFF" }}>
                  <option selected>Berapa hari minimal sewa mobil lepas kunci?</option>
                </select>
              </li>
              <ul>
                <li>
                  <select className="form-select m-3 p-3" aria-label="Default select example" disabled style={{ backgroundColor: "#FFFFFF" }}>
                    <option selected>Berapa hari sebelumnya sabaiknya booking sewa mobil?</option>
                  </select>
                </li>
                <ul>
                  <li>
                    <select className="form-select m-3 p-3" aria-label="Default select example" disabled style={{ backgroundColor: "#FFFFFF" }}>
                      <option selected>Apakah Ada biaya antar-jemput?</option>
                    </select>
                  </li>
                  <ul>
                    <li>
                      <select className="form-select m-3 p-3" aria-label="Default select example" disabled style={{ backgroundColor: "#FFFFFF" }}>
                        <option selected>Bagaimana jika terjadi kecelakaan</option>
                      </select>
                    </li>
                  </ul>
                </ul>
              </ul>
            </ul>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default FAQ;
