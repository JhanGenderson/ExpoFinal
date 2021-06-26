import React, { useRef } from "react";
import ArrozConPato from "../Assets/Img/ArrozConPato.jpg";
import Ceviche from "../Assets/Img/Ceviche.jpeg";
import Chicha from "../Assets/Img/Chicha.jpg";
import postre from "../Assets/Img/postre.jpg";
import { Carousel } from "bootstrap";


export default function CarouselPlato() {
  let refCarouselPlato = useRef();

  // let myCarouselPlato = refCarouselPlato.current;
  // let bsCarousel = new Carousel(myCarouselPlato)

  // const avanzarCarousel = () =>{
  //   bsCarousel.next()
  // }

  // const regresarCarousel=()=>{
  //   bsCarousel.prev()
  // }
  return (
    <div className="border border-2 border-success">
      <div
        ref={refCarouselPlato}
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              src={ArrozConPato}
              className="d-block w-100"
              alt="..."
              style={{ height: "350px" }}
            />
          </div>
          <div className="carousel-item">
            <img
              src={Ceviche}
              className="d-block w-100"
              alt="..."
              style={{ height: "350px" }}
            />
          </div>
          <div className="carousel-item">
            
            <img
              src={Chicha}
              className="d-block w-100"
              alt="..."
              style={{ height: "350px" }}
            />
          </div>
          <div className="carousel-item">
            
            <img
              src={postre}
              className="d-block w-100"
              alt="..."
              style={{ height: "350px" }}
            />
            
          </div>
          {/* <button
            className="carousel-control-prev"
            type="button"
            onClick={regresarCarousel}
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            onClick={avanzarCarousel}
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button> */}
        </div>
      </div>
    </div>
  );
}
