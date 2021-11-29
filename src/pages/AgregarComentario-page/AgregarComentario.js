import React, { useState } from 'react'
import { useHistory } from 'react-router';
import pageStyles from '../AgregarPlato-page/AgregarPlato.module.css';
import Swal from 'sweetalert2';
import jwtDecode from 'jwt-decode';

export const AgregarComentario = () => {
  console.log(jwtDecode(localStorage.getItem('token')));
  let history = useHistory();
  const [description, setDescription] = useState("");


  const CrearCommentario = ()=> {
    if((description.trim().length !== 0)){
      if(localStorage.getItem('token')){
        let info = jwtDecode(localStorage.getItem('token'));
        let temp = {
          id: new Date().getTime(),
          comment: description,
          clientID: info.userId,
          email: info.email,
          img: info.image
        }
        GuardarComentario(temp);
        history.push("/DashboardClient");
      }
    }
  }

  const GuardarComentario = async(temp)=>{
    let url = 'https://backendapicrud.herokuapp.com/api/comentarios/nuevo-comentario';
    await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(temp)
    })
      .then( () => Swal.fire({
        icon:'success',
        text:'comentario creado correctamente',
        timer: 1500
      }))
      .catch( () => Swal.fire({
        icon:'error',
        text:'Error al crear comentario',
        timer: 1500
      }))
  }

  return (
    <div className={ pageStyles.container}>
      <h1 className={ pageStyles.container__title}>
        Agregar Comentario: 
      </h1>
      <div  className={pageStyles.form__block}>
        <label className={pageStyles.form__label}>
          Descripción:
        </label>
        <input  className={ pageStyles.form__input}
                type="text" 
                value={description} 
                onChange={(e) => setDescription(e.target.value)}></input>
      </div>
      <button className={ pageStyles.button}
              onClick={ CrearCommentario }>agregar un comentario</button>
    </div>
  )
}
