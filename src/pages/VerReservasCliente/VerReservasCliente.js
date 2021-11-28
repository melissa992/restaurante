import React, { useState, useEffect } from 'react'
import { Link } from "react-router-dom";
import pageStyles from "../GestorPlatos-page/GestorPlatos-page.module.css";
import { useParams} from "react-router-dom";
import pageStyles2 from "../VerReservasCliente/VerReservasCliente.module.css";

export const VerReservasCliente = ()=> {

    let { id } = useParams();
  const [info, setInfo] = useState();

  
  useEffect(() => {
    fetchData();
  },[]);


  const fetchData = async()=>{
    let url = `https://backendapicrud.herokuapp.com/api/solicitudes/ver-solicitudesCliente/juanacelis002@gmail.com`;
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
      })
      .catch( () => {})
  }

  function converDate(date){
    let tempDate = new Date(date);
    let year = tempDate.getFullYear();
    let month = tempDate.getMonth();
    let day = tempDate.getDay();
    let hour = tempDate.getHours();
    let minutes = tempDate.getMinutes();

    return `${year}/${month}/${day} ${hour}:${minutes}`
  }


return (
    <div className={ pageStyles.container}>
        <h1 className={ pageStyles.container__title}>Listado de reservas</h1>
        <div className={ pageStyles2.cards__container}>
        {
            info?.map( (value,index)=>{
                return <div className={ pageStyles2.card }>
                    <h2 className= {pageStyles2.cardTitle}>Tipo Servicio: {value?.typeService}</h2>
                    <div className={pageStyles2.cardSubtitle}>
                      <h3>{value?.clientName} / <small> {value?.email}</small></h3>
                    </div>
                    
                    <p className={pageStyles2.icon}> <i class="fas fa-phone"></i> {value?.phone}</p>
                    <p className={pageStyles2.icon}><i class="fas fa-calendar-week"></i>{converDate(value?.date)}</p>
                    <p className={pageStyles2.icon}> <i class="far fa-clock"></i> {value?.duration}</p>
                    <p className={pageStyles2.icon}><i class="fas fa-users"></i> {value?.numPerson}</p>
                    <p className={pageStyles2.textColor}>Indicaciones: <br></br>{value?.indications}</p>
                    <p className={pageStyles2.state}>Estado: <small>{value?.status}</small></p>
                </div>
            })
        }
        </div>
    </div>
)
}