import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import image1 from "../../assets/img/menu1@2x.png";
import pageStyles from "../GestorPlatos-page/GestorPlatos-page.module.css";
import { useHistory } from 'react-router';
import swal from 'sweetalert2';

export const Platos = () => {

  let history = useHistory();
  const [platoEliminado, setPlatoEliminado] = useState(false)
  const [info, setInfo] = useState();

  
  useEffect(() => {
    fetchData();
  },[platoEliminado]);


  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/platos/ver-platos';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
        setPlatoEliminado(false);
        console.log(data.info)
      })
      .catch( () => {})
  }
  
  const EliminarPlato = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/platos/eliminar-plato/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        setPlatoEliminado(true);
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

      <h1 className={ pageStyles.container__title}>Gestor platos</h1>
      <button className={ pageStyles.addBtn}>
        <Link to="/AgregarPlato"><i className="fa fa-plus" aria-hidden="true"></i></Link>
      </button>

      <div className={ pageStyles.dishes__container}>
      {
          info?.map( (dish,index) => {
            
            return <div key={index} className={pageStyles.dish}>
              <img src={dish?.image} alt={dish?.name}></img>
              <div className={ pageStyles.dish__content}>
                <h2>{dish?.name}</h2>
                <small>{dish?.description}</small>
                <small>${dish?.price}</small>
                <div className={ pageStyles.container__btns}>
                  <button   className={ pageStyles.btn__edit}
                            onClick={()=>history.push(`/EditarPlato/${dish?.id}`)}>
                    <i className="fas fa-edit"></i>
                  </button>
                  <button onClick={()=>EliminarPlato(dish?.id)}
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