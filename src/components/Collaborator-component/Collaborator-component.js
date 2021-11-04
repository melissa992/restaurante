import React from "react";
import nosotros from "../../pages/Nosotros-page/Nosotros-page.module.css";
import img1 from "../../assets/img/personal1@2x.png";
import img2 from "../../assets/img/personal2@2x.png";
import img3 from "../../assets/img/personal3@2x.png";
import img4 from "../../assets/img/personal4@2x.jpg";
import img5 from "../../assets/img/personal5@2x.jpg";
import img6 from "../../assets/img/personal6@2x.jpg";

export const Collaborator = ( { value } ) => {

  const imgs = [ img1, img2, img3, img4, img5, img6];

  return (
    <div className={ nosotros.empleado}>
      <img className={ nosotros.imagen_empleados } src={ imgs[value.id]} />
      <h4 className={ nosotros.caption }>{value.name}</h4>
      <span className={ nosotros.caption}>{value.job}</span>
    </div>
  )
}