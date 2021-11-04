import React from "react";
import { EventsInfo} from "../Events-component/EventsInfo.js";
import events from "../Events-component/Events-component.module.css";
import icono1 from "../../assets/img/icono1@2x.png";
import icono2 from "../../assets/img/icono2@2x.png";
import icono3 from "../../assets/img/icono3@2x.png";
import icono4 from "../../assets/img/icono4@2x.png";
import { Link } from "react-router-dom";

export const EventsComponent = ()=>{

  let icons = [icono1,icono2,icono3,icono4];

  return (
  <section id="EVENTOS" className={ events.events__container }>
    <h2 className={ events.event__title}>
      Organizamos tu evento
    </h2>
    <div className={ events.events}>
      {
        EventsInfo.map( (item, index) => {

          return (
            <article className={ events.event } key={index}>
              <img  src={ icons[index] }
                    alt={ item.title }/>
              <h3>{item.title}</h3>
              <p> {item.description}</p>
              <Link to="/servicios">
                <i className="fas fa-plus"></i>
              </Link>
            </article>
          )
        })
      }
    </div>
  </section>

  )
}