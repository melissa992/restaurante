import React, { useEffect, useState } from "react";
import pageStyles from "../InformacionRest-page/InformacionRest-page.module.css";
import swal from 'sweetalert2';

export const InfoRestaurante = () => {


  const [info, setInfo] = useState();

  useEffect(() => {
    fetchData();
  },[]);

  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/restaurante/informacion-restaurante';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info[0]);
      })
      .catch( e => console.log(e))
  }

  const change =(e, field) => {
    let temp = info;
    temp[field] = e.target.value;
    setInfo(temp)
  }


  const updateInfo = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/restaurante/modificar-restaurante';
    await fetch(url,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(res => swal.fire({
        icon:'success',
        text:'Actualizado Correctamente',
        timer: '1500'
      }))
      .catch( e => swal.fire({
        icon:'error',
        text:'Error al actualizar la información',
        timer:'1500'
      }))
  } 
  
  
  return (
    <div className={pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Información restaurante
      </h1>

      <div className={pageStyles.form__block}>
        <label className={pageStyles.form__label}>
          Nombre restaurante:
        </label>
        <input  className={ pageStyles.form__input}
                type="text"
                defaultValue={info?.name} 
                onChange={(e) => change(e,'name')}>
        </input>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={ pageStyles.form__label}>Dirección:</label>
        <input  className={ pageStyles.form__input}
                type="text" 
                defaultValue={info?.direction} 
                onChange={(e) => change(e,'direction')}>
        </input>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={ pageStyles.form__label}>
          Email:
        </label>
        <input  className={ pageStyles.form__input}
                type="text" 
                defaultValue={info?.email} 
                onChange={(e) => change(e,'email')}></input>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={ pageStyles.form__label}>
          Telefono:
        </label>
        <input  className={ pageStyles.form__input}
                type="text" 
                defaultValue={info?.phone} 
                onChange={(e) => change(e,'phone')}></input>
      </div>
      <div className={pageStyles.form__block}>
        <label  className={ pageStyles.form__label}>
          Historia:
        </label>
        <textarea className={ pageStyles.form__input}
                  defaultValue={info?.history} 
                  onChange={(e) => change(e,'history')}
                  rows="10">
        </textarea>
      </div>
      <button className={ pageStyles.button }
              onClick={ updateInfo }>
        Actualizar
      </button>
    </div>
  )
}