import React, { useState } from "react";
import { useHistory } from 'react-router';
import pageStyles from '../AgregarPlato-page/AgregarPlato.module.css'
import Swal from 'sweetalert2';

export const AgregarPlato = () => {

  let history = useHistory();
  const [name, setName] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [url, setUrl] = useState("");


  const CrearPlato = ()=> {
    if((name.trim().length !== 0) && (description.trim().length !== 0)){
      let temp = {
        id: new Date().getTime(),
        name: name,
        price:  price,
        description: description,
        image: url
      }
      GuardarPlato(temp);
      history.push("/Platos");
    }
  }

  const GuardarPlato = async(temp)=>{
    let url = 'https://backendapicrud.herokuapp.com/api/platos/nuevo-plato';
    await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(temp)
    })
      .then( () => Swal.fire({
        icon:'success',
        text:'Plato creado correctamente',
        timer: 1500
      }))
      .catch( () => Swal.fire({
        icon:'error',
        text:'Error al crear plato',
        timer: 1500
      }))
  } 

  return (
    <div className={ pageStyles.container}>
      <h1 className={ pageStyles.container__title}>
        Agregar Plato: 
      </h1>
      <div className={pageStyles.container__img}>
        <img  className={ pageStyles.img } 
              src={ url }></img>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Nombre:
        </label>
        <input  className={ pageStyles.form__input}
                type="text"
                value={name} 
                onChange={(e) => setName(e.target.value)}>
        </input>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Precio:
        </label>
        <input  className={ pageStyles.form__input}
                type="number"
                value={price} 
                onChange={(e) => setPrice(e.target.value)}>
        </input>
      </div>
      <div  className={pageStyles.form__block}>
        <label className={pageStyles.form__label}>
          Descripción:
        </label>
        <input  className={ pageStyles.form__input}
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <div  className={pageStyles.form__block}>
        <label className={pageStyles.form__label}>
          Imagen:
        </label>
        <input  className={ pageStyles.form__input}
                type="url" 
                value={url} 
                onChange={(e) => setUrl(e.target.value)}></input>
      </div>
      <button className={ pageStyles.button}
              onClick={ CrearPlato }>agregar un plato</button>
    </div>
  )
}
