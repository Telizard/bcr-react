function Testimonial() {
  return (
    <section>
      <div>
        <h4 className="text-center fw-bold pt-5">Testimonial</h4>
        <h6 className="text-center fw-bold pt-3 ">Berbagai review positif dari para pelanggan kami</h6>
      </div>
      <div className="text-center pt-4">
        <div className="row">
          <div className="col">
            <img src={require("../aset/testi1.png")} alt="" />
            <img src={require("../aset/testi2.png")} alt="" />
            <img src={require("../aset/testi3.png")} alt="" />
          </div>
        </div>
      </div>
      <div className="container text-center">
        <div className="row">
          <div className="col pt-4">
            <img className="p-2" src={require("../aset/leftbutton.png")} alt="" />
            <img className="p-2" src={require("../aset/rightbutton.png")} alt="" />
          </div>
        </div>
      </div>{" "}
    </section>
  );
}

export default Testimonial;
