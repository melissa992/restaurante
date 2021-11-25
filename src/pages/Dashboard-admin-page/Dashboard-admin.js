import React, { useState } from "react";
import { Link } from "react-router-dom";
import dashboard from "../Dashboard-admin-page/Dashboard-admin.module.css";

export const DashboardAdmin = () => {

  
  
  return (
    <div className={dashboard.dashboard_container}>
      <div className={dashboard.content}>
        <div className={dashboard.card_container}>
          <Link to="/InfoRestaurante">
            <div className={dashboard.card}>
              Informacion Restaurante
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/Empleados">
            <div className={dashboard.card}>
              Gestor empleados
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/Comentarios">
            <div className={dashboard.card}>
              Gestor comentarios
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/Platos">
            <div className={dashboard.card}>
              Gestor de platos
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/Preguntas">
            <div className={dashboard.card}>
              Preguntas y solicitudes
            </div>
          </Link>
        </div>
        <div className={dashboard.card_container}>
          <Link to="/Reservas">
            <div className={dashboard.card}>
              Gestor de reservas
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}