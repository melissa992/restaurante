import React, { useEffect, useState } from "react";
import { useHistory, useParams } from 'react-router';
import pageStyles from "../EditarServicio-page/EditarServicio.module.css";
import Swal from "sweetalert2";

export const EditarServicio = () => {

  let { id } = useParams();
  const [info, setInfo] = useState();
  let history = useHistory();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async()=>{
    let url = `https://backendapicrud.herokuapp.com/api/servicios/ver-servicio/${id}`;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info[0]);
      })
      .catch( () => {})
  }

  const change =(e, field) => {
    let temp = info;
    temp[field] = e.target.value;
    setInfo(temp)
  }

  const updateInfo = async()=>{
    let url = `https://backendapicrud.herokuapp.com/api/servicios/editar-servicio/${id}`;
    await fetch(url,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'Servicio actualizado correctamente',
          timer: 1500
        });
        history.push("/VerServicios");
      })
      .catch( () => {
        Swal.fire({
        icon:'error',
        text:'Error al actualizar servicio',
        timer: 1500
        });
    })
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
          timer: 1500
        });
        history.push('/VerServicios');
      })
      .catch( () => Swal.fire({
        icon:'error',
        text:'Error al eliminar servicio',
        timer: 1500
      }))
  } 

  return (
    <div  className={pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Servicio: {info?.name}
      </h1>

      <div  className={pageStyles.container__img}>
        <img  className={pageStyles.img} 
              src={info?.image} 
              alt={info?.name}>
        </img>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Nombre:
        </label>
        <input  className={pageStyles.form__input}
                type="text" 
                defaultValue={info?.name} 
                onChange={(e) => change(e,'name')}>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Descripcion:
        </label>
        <textarea  className={pageStyles.form__input}
                type="text" 
                defaultValue={info?.description} 
                rows="10"
                onChange={(e) => change(e,'description')}>
        </textarea>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          imagen:
        </label>
        <input  className={pageStyles.form__input}
                type="url" 
                defaultValue={info?.image} 
                onChange={(e) => change(e,'image')}>
        </input>
      </div>

      <div  className={pageStyles.container__btns}>
        <button className={pageStyles.btn__edit}
                onClick={()=>updateInfo()}>Guardar</button>
        <button className={pageStyles.btn__del}
                onClick={()=>EliminarPlato(info?.id)}>Eliminar</button>
      </div>
    </div>
  )
}
