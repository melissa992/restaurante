import React from "react";
import { Link } from "react-router-dom";

export const ServiceCard = ({info}) => {

  return (
    <div className="col-md-6">
      <div className="card my-3 card-background">
        <div className="row">
          <div className="col-md-5 m-auto">
            <img src={info.image} alt={ info.name} className="img-fluid"/>
          </div>
          <div className="col-md-7 py-3">
            <h3 className="card-tittle mt-3">{info.name}</h3>
            <p>{ info.description }</p>
            <Link to="/Contactanos" className="btn btn-danger c-white text-center"> ¿Preguntas? Contactanos </Link>
          </div>
        </div>
      </div>
    </div>
  )
}