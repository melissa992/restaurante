import React, { useEffect, useState } from "react";
import restaurant from "../../assets/img/foto4@2x.png";
import { Collaborator } from "../../components/Collaborator-component/Collaborator-component";
import { Testimonials } from "../../components/Testimonials-component/Testimonials-component";
import nosotros from "../Nosotros-page/Nosotros-page.module.css";

export const NosotrosPage = () => {

  useEffect(() => {
    fetchData();
    fetchDataEmpleados();
  }, []);

  const [info, setInfo] = useState();
  const [empleados, setEmpleados] = useState();

  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/restaurante/informacion-restaurante';
    await fetch(url)
      .then(res => res.json())
      .then(data => setInfo(data.info[0]))
      .catch( e => console.log(e))
  }

  const fetchDataEmpleados = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/empleados/ver-empleados';
    await fetch(url)
      .then(res => res.json())
      .then(data => setEmpleados(data.empleados))
      .catch( e => console.log(e))
  }

  return (
    <div className={ nosotros.historia_contenedor }>
      <div className={ nosotros.historia}>
        <img  src={ restaurant } 
              className={ nosotros.historia_imagen} alt="..."/>
          <div className={ nosotros.margenes_history}>
            <div  className={ nosotros.title} id="HISTORIA">
              
              <h2 className={ nosotros.subtitle}>Nosotros</h2>
            </div>
            <p>{info?.history}</p>
          </div>
      </div>
      <div className={ nosotros.empleados } id="COLABORADORES">
        {
          empleados?.map( (info, index) => {
            return <Collaborator key={index} value={info}/>
          })
        }
      </div>
      <Testimonials />
  </div>
  )
}