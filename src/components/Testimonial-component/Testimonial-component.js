import React from "react";
import testimonial from "../Testimonials-component/Testimonials-component.module.css";
import persona1 from "../../assets/img/personal1@2x.png";
import persona2 from "../../assets/img/personal2@2x.png";
import persona3 from "../../assets/img/personal3@2x.png";

export const Testimonial = ( { info })=> {

  const img = [persona1, persona2, persona3];
  return (
    <div className={ testimonial.testimonial}>
      <div className={ testimonial.profile }>
        <img src={ img[info.img] } alt={ info.name }/>
      </div>
      <blockquote className={ testimonial.quote }>
        {info.text}
      <cite><b>{ info.name }</b></cite>
      </blockquote>
    </div>
  )
}