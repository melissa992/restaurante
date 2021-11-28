import React, { useEffect, useState } from "react";
import { useParams} from "react-router-dom";
import { useHistory } from 'react-router';
import pageStyles from "../EditarPlato-page/EditarPlato-page.module.css";
import Swal from "sweetalert2";


export const EditarPlato = () => {

  let { id } = useParams();
  const [info, setInfo] = useState();
  let history = useHistory();

  useEffect(() => {
    fetchData();
  },[]);


  const fetchData = async()=>{
    let url = `https://backendapicrud.herokuapp.com/api/platos/ver-plato/${id}`;
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
    let url = `https://backendapicrud.herokuapp.com/api/platos/editar-plato/${id}`;
    await fetch(url,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'Plato actualizado correctamente',
          timer:1500
        });
        history.push("/Platos");
      })
      .catch( () => {
        Swal.fire({
          icon:'error',
          text:'Error al actualizar el plato',
          timer:1500
        });
      })
  } 

  const EliminarPlato = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/platos/eliminar-plato/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'Plato eliminado correctamente',
          timer:1500
        });
        history.push('/Platos')
      })
      .catch( () =>  Swal.fire({
        icon:'error',
        text:'Error al eliminar el plato',
        timer:1500
      }))
  } 

  return (
    <div  className={pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Plato: {info?.name}
      </h1>
      <div  className={pageStyles.container__img}>
        <img  src={info?.image}
              alt={info?.name}
              className={pageStyles.img}>
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
          Precio:
        </label>
        <input  className={pageStyles.form__input}
                type="number"
                defaultValue={info?.price} 
                onChange={(e) => change(e,'price')}>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Descripcion:
        </label>
        <textarea   className={pageStyles.form__input}
                    type="text" 
                    defaultValue={info?.description} 
                    onChange={(e) => change(e,'description')}>
        </textarea>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          imagen:
        </label>
        <input   className={pageStyles.form__input}
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
  );
}
