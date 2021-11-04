import React from "react";
import { employees } from "../../assets/data/employees";
import restaurant from "../../assets/img/foto4@2x.png";
import { Collaborator } from "../../components/Collaborator-component/Collaborator-component";
import { Testimonials } from "../../components/Testimonials-component/Testimonials-component";
import nosotros from "../Nosotros-page/Nosotros-page.module.css";

export const NosotrosPage = () => {


  return (
    <div className={ nosotros.historia_contenedor }>
      <div className={ nosotros.historia}>
        <img  src={ restaurant } 
              className={ nosotros.historia_imagen} />
          <div className={ nosotros.margenes_history}>
            <div  className={ nosotros.title} id="HISTORIA">
              <h4 >Nuestra</h4>
              <h2 className={ nosotros.subtitle}>Historia</h2>
            </div>
            <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam?
              Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. orem,
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem maxime expedita veritatis quis.
              Dignissimos aliquid architecto quasi. Tenetur natus cupiditate vel laboriosam. Dignissimos aliquid magnam
              obcaecati deleniti quis similique? Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi
              excepturi non fugiat laudantium ipsam?
              Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem ipsum
              dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. Lorem
              ipsum dolor sit amet consectetur adipisicing elit. Illo vel, eligendi excepturi non fugiat laudantium
              ipsam? Provident consequuntur ad quo vel placeat id, earum dolores aliquam aperiam laborum rerum quidem. orem,
              ipsum dolor sit amet consectetur adipisicing elit. Mollitia voluptatem maxime expedita veritatis quis.
              Dignissimos aliquid architecto quasi. Tenetur natus cupiditate vel laboriosam. Dignissimos aliquid magnam
              obcaecati deleniti quis similique?</p>
          </div>
      </div>
      <div className={ nosotros.empleados } id="COLABORADORES">
        {
          employees.map( (info, index) => {
            return <Collaborator key={index} value={info}/>
          })
        }
      </div>
      <Testimonials />
  </div>
  )
}