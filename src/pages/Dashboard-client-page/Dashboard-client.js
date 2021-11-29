import React from 'react'
import { Link } from 'react-router-dom';
import dashboard from "../Dashboard-admin-page/Dashboard-admin.module.css";
import { useHistory } from 'react-router';

export const DashboardClient = () => {

  let history = useHistory();
  
  return (
    <div className={dashboard.dashboard_container}>
      <div className={dashboard.content}>
        <div className={dashboard.card_container}>
          <Link to="/AgregarComentario">
            <div className={dashboard.card}>
                Agregar comentario
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/VerReservasCliente">
            <div className={dashboard.card}>
                Ver reservas
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <div className={dashboard.card} onClick={ ()=>{localStorage.clear(); history.push('/Ingresar') }}>
            Cerrar Sesión
          </div>
        </div>
      </div>
    </div>
  )
}
