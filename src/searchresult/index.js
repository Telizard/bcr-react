import Footer from "../components/footer";
import Hero2 from "../components/hero2";
import Navbarc from "../components/navbar";
import Heroku from "../pages/heroku";
import Form from "../searchform/form";
import Result from "./result";

function SearchResult() {
  return (
    <>
      <Navbarc />
      <Hero2 />
      <Form />
      <Result />
      <Footer />
    </>
  );
}

export default SearchResult;
