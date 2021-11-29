import React from "react";
import nosotros from "../../pages/Nosotros-page/Nosotros-page.module.css";

export const Collaborator = ( { value } ) => {

  return (
    <div className={ nosotros.empleado}>
      <img className={ nosotros.imagen_empleados } src={ value.image } />
      <h4 className={ nosotros.caption }>{value.name}</h4>
      <span className={ nosotros.caption}>{value.description}</span>
    </div>
  )
}