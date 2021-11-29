import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../GestorComentarios-page/GestorComentarios-page.module.css";
import pageStyles from "../GestorPlatos-page/GestorPlatos-page.module.css";
import { useHistory } from 'react-router';
import swal from 'sweetalert2';


export const Comentario = () => {
  let history = useHistory();
  const [comentarioEliminado, setComentarioEliminado] = useState(false)
  const [info, setInfo] = useState();

  useEffect(() => {
    fetchData();
  },[comentarioEliminado]);


  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/comentarios/ver-comentarios-email';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
        setComentarioEliminado(false);
        console.log(data.info)
      })
      .catch( () => {})
  }
  
  const EliminarComentario = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/comentarios/eliminar-comentario/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        setComentarioEliminado(true);
        swal.fire({
          icon:'success',
          text:'Plato eliminado correctamente',
          timer: 1500
        })
      })
      .catch( () => swal.fire({
        icon:'error',
        text:'Error al eliminar el plato',
        timer: 1500
      }))
  } 

  return (
    <div className={ pageStyles.container}>

      <h1 className={ pageStyles.container__title}>Gestor Comentarios</h1>
      <div className={ pageStyles.dishes__container}>
      {
          info?.map( (dish,index) => {
            
            return <div key={index} className={pageStyles.dish}>
              <div className={ pageStyles.dish__content}>
                <h2>{dish?.email}</h2>
                <small>{dish?.comment}</small>
                <div className={ pageStyles.container__btns}>
                  <button onClick={()=>EliminarComentario(dish?.id)}
                          className={ pageStyles.btn__del}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>

          })
        }
      </div>
    </div>
  )
}