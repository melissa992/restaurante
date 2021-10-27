import React from "react";
import carousel from "../Carousel-component/Carousel-component.module.css"
import slide1 from "../../assets/img/foto1@2x.png";
import slide2 from "../../assets/img/foto4@2x.png";
import slide3 from "../../assets/img/foto3@2x.png";
import logo from "../../assets/img/logo@2x.png"
import { Link } from "react-router-dom";


export const Carousel = ()=>{

  return (
    <div  className={carousel.carousel__container}>
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
              <p>Sabores que <span>exaltan</span> tus sentidos</p>
            </div>
          </div>

          <div className="carousel-item">
            <img  src={ slide2 }
                  className="d-block w-100 carousel_img" 
                  alt="slide 2" />
            <div className={ carousel.slide__content}>
              <img src={ logo } alt="logo restaurante" />
              <p>Un <span>mundo</span> de posibilidades</p>
              <Link to="/menu">
                Ir al menu
              </Link>
            </div>
          </div>

          <div className="carousel-item">
            <img  src={ slide3 }
                  className="d-block w-100 carousel_img" alt="..."/>
            <div className={ carousel.slide__content}>
              <img src={ logo } alt="logo restaurante" />
              <p>Viernes descuento del <span>50%</span> en recomendaciones del chef</p>
              <small>Realiza tu reserva ya</small>
              <Link to="/reservas">
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
        <span className="visually-hidden">Previous</span>
      </button>

      <button className="carousel-control-next" 
              type="button"
              data-bs-target="#carouselExampleIndicators"
              data-bs-slide="next">
        <span className="carousel-control-next-icon"
              aria-hidden="true"></span>
        <span className="visually-hidden">Next</span>
      </button>

      </div>
    </div>
  )
}