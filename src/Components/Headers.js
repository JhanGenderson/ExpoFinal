import React from "react";
import CarouselPlato from "./CarouselPlato";
import Mapa from "./Mapa";
import Nosotros from "./Nosotros";
import InicioView from "../Views/InicioView";

export default function Headers() {
  return (
    <div className="container-fluid">
      <div className="row justify-content-around" style={{height:'640px',backgroundColor:'#5EAE53'}}>
        <div className="col-12 col-lg-12 col-md-12 col-sm-10 align-self-center mt-3">
          <h1 className="fw-bold text-center" style={{ fontSize: "40px",color:'white' }}>
            Bienvenidos a Sazón y Canela
          </h1>
        </div>
        <div className="col-11 col-lg-4 col-md-5 col-sm-10 mt-1">
          <CarouselPlato />
        </div>
          
        
      </div>
      
        <div className="col-12 col-lg-12 col-md-12 col-sm-10">
          <InicioView />
        </div>

      <h1
        className="fw-bold mt-2 text-center mt-3"
        style={{ fontSize: "40px"}}
      >
        Visitanos:
      </h1>
      <div className="mt-2 row justify-content-center align-self-center">
        <div className="col-12 col-lg-12 col-md-6 col-sm-10 ">
          <p className="fw-bold text-center" style={{ fontSize: "30px" }}>
            Av. Las Palmeras 5200 - Los Olivos
          </p>
        </div>
        <div className="container justify-content-center">
          <Mapa />
        </div>
        <footer>
          <Nosotros />
        </footer>
      </div>
    </div>
  );
}
