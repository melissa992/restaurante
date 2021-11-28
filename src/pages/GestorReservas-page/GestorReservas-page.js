import React, { useEffect, useState } from "react";
import { useHistory } from "react-router";
import pageStyles from "../GestorReservas-page/GestorReservas-page.module.css";
import swal from "sweetalert2";

export const Reservas = () => {

  let history = useHistory();
  const [reservaEliminada, setReservaEliminada] = useState(false)
  const [info, setInfo] = useState();

  
  useEffect(() => {
    fetchData();
  },[reservaEliminada]);


  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/solicitudes/ver-solicitudes';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
        setReservaEliminada(false);
      })
      .catch( () => {})
  }
  
  const EliminarReserva = async(id)=>{
    let url = `https://backendapicrud.herokuapp.com/api/solicitudes/eliminar-solicitud/${id}`;
    await fetch(url,{
      method: 'DELETE',
    })
      .then(() => {
        setReservaEliminada(true);
        swal.fire({
          icon:'success',
          text:'Reserva eliminada correctamente',
          timer: 1500
        })
      })
      .catch( () => swal.fire({
        icon:'error',
        text:'Error al eliminar reserva',
        timer: 1500
      }))
  }

  return (
    <div className={ pageStyles.container}>

      <h1 className={ pageStyles.container__title}>Gestor Reservas</h1>
      <div className={ pageStyles.reservas__container}>
      {
          info?.map( (reserva,index) => {
            
            return <div key={index} className={pageStyles.reserva}>
              <div  className={ pageStyles.reservas__content}>
                <h2>{reserva?.typeService}</h2>
                <h3>{reserva?.email}</h3>
                <h3>{reserva?.phone}</h3>
                <div className={ pageStyles.container__btns}>
                 <button onClick={()=>EliminarReserva(reserva?.id)}
                          className={ pageStyles.btn__del}>
                    <i className="fa fa-trash" aria-hidden="true"></i>
                  </button>
                  <button   className={ pageStyles.btn__edit}
                            onClick={()=>history.push(`/EditarReserva/${reserva?.id}`)}>
                    <i className="fas fa-edit"></i>
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