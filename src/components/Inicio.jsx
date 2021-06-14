import React from "react";
import { withRouter } from "react-router-dom";
//import { Carousel } from "./Carousel";
//import { Footer } from "./Footer";
import { Informacion } from "./Informacion";
//import { NavbarInicio } from "./NavbarInicio";

const Inicio = () => {
  return (
    <div className="container">
      {/* <div className="row">
        <div className="col-12 col-lg-3">1</div>
        <div className="col-12 col-lg-9">2</div>
      </div> */}
      {/* <NavbarInicio /> */}
      {/* <Carousel />  */}
      <Informacion />
      {/* <Footer /> */}
    </div>
  );
};

export default withRouter(Inicio);
