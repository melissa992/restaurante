import React, { useState } from 'react';
import { useHistory } from 'react-router';
import menuImg from "../../assets/img/menu2@2x.png";
import pageStyles from '../AgregarPlato-page/AgregarPlato.module.css';
import Swal from 'sweetalert2';

export const AgregarServicio = () => {

  let history = useHistory();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const CrearServicio = ()=> {
    if((name.trim().length !== 0) && (description.trim().length !== 0)){

      let temp = {
        id: new Date().getTime(),
        name: name,
        description: description,
        image: "menu2@2x.png"
      }
      GuardarServicio(temp);
      history.push("/VerServicios");
    }
  }

  const GuardarServicio = async(temp)=>{

    let url = 'https://backendapicrud.herokuapp.com/api/servicios/nuevo-servicio';
    await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(temp)
    })
      .then(() => Swal.fire({
        icon:'success',
        text: 'Servicio agregado correctamente',
        timer: 1500
      }))
      .catch( () => Swal.fire({
        icon:'error',
        text: 'Error al eliminar servicio',
        timer: 1500
      }))
  } 

  return (
    <div className={ pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Agregar Servicio
      </h1>
      <div  className={pageStyles.container__img}>
        <img  src={menuImg}
              alt="preview"
              className={pageStyles.img}></img>
      </div>
      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Nombre:
        </label>
        <input  className={pageStyles.form__input} 
                type="text" 
                value={name}
                onChange={(e) => setName(e.target.value)}>
        </input>
      </div>
      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Descripcion:
        </label>
        <textarea className={pageStyles.form__input}
                  type="text" 
                  value={description} 
                  onChange={(e) => setDescription(e.target.value)}>
        </textarea>
      </div>
      <button className={pageStyles.button} onClick={ CrearServicio }>Guardar</button>
    </div>
  )
}
