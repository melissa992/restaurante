import React, { useEffect, useState } from "react";
import { employees } from "../../assets/data/employees";
import restaurant from "../../assets/img/foto4@2x.png";
import { Collaborator } from "../../components/Collaborator-component/Collaborator-component";
import { Testimonials } from "../../components/Testimonials-component/Testimonials-component";
import nosotros from "../Nosotros-page/Nosotros-page.module.css";

export const NosotrosPage = () => {

  useEffect(() => {
    fetchData();
  }, []);

  const [info, setInfo] = useState();

  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/restaurante/informacion-restaurante';
    await fetch(url)
      .then(res => res.json())
      .then(data => setInfo(data.info[0]))
      .catch( e => console.log(e))
  }



  return (
    <div className={ nosotros.historia_contenedor }>
      <div className={ nosotros.historia}>
        <img  src={ restaurant } 
              className={ nosotros.historia_imagen} alt="..."/>
          <div className={ nosotros.margenes_history}>
            <div  className={ nosotros.title} id="HISTORIA">
              <h4 >Nuestra</h4>
              <h2 className={ nosotros.subtitle}>Historia</h2>
            </div>
            <p>{info?.history}</p>
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