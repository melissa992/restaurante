import React from "react";
import carousel from "../Carousel-component/Carousel-component.module.css"
import slide1 from "../../assets/img/foto1@2x.png";
import slide2 from "../../assets/img/foto4@2x.png";
import slide3 from "../../assets/img/foto3@2x.png";
import logo from "../../assets/img/logo@2x.png"
import { Link } from "react-router-dom";


export const Carousel = ()=>{

  return (
    <div id="INICIO" className={carousel.carousel__container}>
      <div  id="carouselExampleIndicators"
            className="carousel slide" 
            data-bs-ride="carousel">

        <div  className="carousel-inner">

          <div  className="carousel-item active">
            <img  src={ slide1 }
                  className="d-block w-100 carousel_img" 
                  alt="IMG1" />
            <div className={ carousel.slide__content}>
              <img src={ logo } alt="logo restaurante"/>
              
            </div>
          </div>

          <div className="carousel-item">
            <img  src={ slide2 }
                  className="d-block w-100 carousel_img" 
                  alt="slide 2" />
            <div className={ carousel.slide__content}>
              <img src={ logo } alt="logo restaurante" />
             
              <Link to="/menu">
                menu
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img  src={ slide3 }
                  className="d-block w-100 carousel_img" alt="..."/>
            <div className={ carousel.slide__content}>
              <img src={ logo } alt="logo restaurante" />
              
              <small>Realiza tu reserva </small>
              <Link to="/Contactanos">
                Reservar ya <i className="fas fa-arrow-right"></i>
              </Link>
            </div>
          </div>

        </div>

      <button className="carousel-control-prev" 
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="prev">

        <span className="carousel-control-prev-icon"
              aria-hidden="true"></span>
        <span className="visually-hidden">Anterior</span>
      </button>

      <button className="carousel-control-next" 
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
        <span className="carousel-control-next-icon"
              aria-hidden="true"></span>
        <span className="visually-hidden">Siguiente</span>
      </button>

      </div>
    </div>
  )
}