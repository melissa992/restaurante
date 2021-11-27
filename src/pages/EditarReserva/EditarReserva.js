import React, { useEffect, useState } from "react";
import image1 from "../../assets/img/menu1@2x.png";
import { useParams} from "react-router-dom";
import { useHistory } from 'react-router';
import pageStyles from "../EditarPlato-page/EditarPlato-page.module.css";
import swal from "sweetalert2";

export const EditarReserva = () => {

  let { id } = useParams();
  const [info, setInfo] = useState();
  let history = useHistory();

  useEffect(() => {
    fetchData();
  },[]);


  const fetchData = async()=>{
    let url = `https://backendapicrud.herokuapp.com/api/solicitudes/ver-solicitud/${id}`;
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
    let url = `https://backendapicrud.herokuapp.com/api/solicitudes/modificar-solicitud/${id}`;
    await fetch(url,{
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(info)
    })
      .then(() => {
        swal.fire({
          icon:'success',
          text:'Reserva actualizada correctamente',
          timer:1500
        });
        history.push("/Reservas");
      })
      .catch( () => {
        swal.fire({
          icon:'error',
          text:'Error al actualizar la reserva',
          timer:1500
        });
      })
  } 

  const EliminarReserva = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/solicitudes/eliminar-solicitud/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        swal.fire({
          icon:'success',
          text:'Reserva eliminada correctamente',
          timer: 1500
        });
        history.push('/Reservas')
      })
      .catch( () => swal.fire({
        icon:'error',
        text:'Error al eliminar reserva',
        timer: 1500
      }))
  }

  return (
    <div  className={pageStyles.container}>
      <h1 className={pageStyles.container__title}>
        Reserva: {info?.typeService}
      </h1>
      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Nombre:
        </label>
        <input  className={pageStyles.form__input}
                type="text"
                defaultValue={info?.clientName} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Correo:
        </label>
        <input  className={pageStyles.form__input}
                type="text"
                defaultValue={info?.email} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Numero de contacto:
        </label>
        <input  className={pageStyles.form__input}
                type="text"
                defaultValue={info?.phone} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Fecha de reserva:
        </label>
        <input  className={pageStyles.form__input}
                type="text"
                defaultValue={info?.date} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Duracion(horas):
        </label>
        <input  className={pageStyles.form__input}
                type='number'
                defaultValue={info?.duration} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Numero de personas:
        </label>
        <input  className={pageStyles.form__input}
                type="number"
                defaultValue={info?.numPerson} 
                disabled>
        </input>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Indicaciones:
        </label>
        <textarea  className={pageStyles.form__input}
                type='text'
                defaultValue={info?.indications} 
                disabled>
        </textarea>
      </div>

      <div  className={pageStyles.form__block}>
        <label  className={pageStyles.form__label}>
          Estado de reserva:
        </label>
        <select value={info?.status} className={pageStyles.form__input} onChange={(e) => change(e,'status')}>
            <option value='enespera'>En espera</option>
            <option value='cancelada'>Cancelada</option>
            <option value='realizada'>Realizada</option>
        </select>
        
      </div>
      
      <div  className={pageStyles.container__btns}>
        <button className={pageStyles.btn__edit}
                onClick={()=>updateInfo()}>Guardar</button>
        <button className={pageStyles.btn__del}
                onClick={()=>EliminarReserva(info?.id)}>Eliminar</button>
      </div>
    </div>
  );
}
