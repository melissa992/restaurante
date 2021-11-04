import React from "react";
import { services } from "../../assets/data/services";
import { ServiceCard } from "../../components/Service-card-component/Service-card-component";
import menuImg from "../../assets/img/menu2@2x.png";

export const ServiciosPage = () => {

  return (
    <div className="container mt-5" >
      <h1 className="display-1 mb-5 fw-bold color-title">
        Servicios
      </h1>

      <div class="row">
        <div class="col-md-6">
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
          Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
          Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?</p>

        </div>

        <div class="col-md-6">
          
          <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?
            <br/><br/>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus? Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis fuga nam sit ad quasi facilis cum.
            Eligendi, fuga assumenda. Illum obcaecati natus qui vero commodi pariatur et incidunt soluta ducimus?</p>
        </div>
      </div>

      <div class="row" id="LISTA_SERVICIOS">
        
        {
          services.map( (value, index) => {
            return <ServiceCard key={index} info={value} img={menuImg}/>
          })
        }
      </div>  
    </div>
  )
}