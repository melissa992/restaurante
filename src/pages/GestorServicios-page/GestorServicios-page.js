import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useHistory } from 'react-router';
import pageStyles from "../GestorServicios-page/GestorServicios.module.css";
import Swal from "sweetalert2";

export const Servicios = () => {

  let history = useHistory();
  const [info, setInfo] = useState();
  const [servicioEliminado, setServicioEliminado] = useState(false)
  
  useEffect(() => {
    fetchData();
  },[servicioEliminado]);


  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/servicios/ver-servicios';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
        setServicioEliminado(false);
      })
      .catch( () => {})
  }

  const EliminarPlato = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/servicios/eliminar-servicio/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'Servicio eliminado correctamente',
          timer:1500
        });
        setServicioEliminado(true);
      })
      .catch( () => Swal.fire({
        icon:'error',
        text:'Error al actualizar servicio',
        timer:1500
      }))
  } 

  return (
    <div  className={pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Servicios
      </h1>
      <button className={pageStyles.addBtn}>
        <Link to="/AgregarServicio">
          <i className="fa fa-plus" aria-hidden="true">
          </i>
        </Link>
      </button>
      <div  className={pageStyles.services__container}>
      {
        info?.map((value,index)=> {
          return <div key={index} 
                      className={pageStyles.service}>
            <img src={value.image} alt={value.name}></img>
            <div  className={pageStyles.service__content}>
              <h2>{value.name}</h2>
              <small>{value.description}</small>
              <div  className={pageStyles.container__btns}>
                <button className={pageStyles.btn__edit}
                        onClick={()=>history.push(`/EditarServicio/${value?.id}`)}>Editar</button>
                <button className={pageStyles.btn__del}
                        onClick={()=>EliminarPlato(value?.id)}>Eliminar</button>
              </div>
            </div>
          </div>
        })
      }
      </div>
    </div>
  )
}
