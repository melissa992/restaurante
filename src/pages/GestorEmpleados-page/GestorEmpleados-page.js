import React, { useEffect, useState } from "react";
import ShowEmployees from './ShowEmployees'
import { Link } from 'react-router-dom'
import dashboard from "../GestorEmpleados-page/GestorEmpleados-page.module.css";

export const Empleados = () => {

  const [empleados, setEmpleados] = useState([])

  const getEmployees = async () => {
    let url = 'http://127.0.0.1:4000/api/empleados/ver-empleados'
    await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' },
    }).then(response => response.json())
      .then(response => {
        setEmpleados(response.empleados)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getEmployees()
  }, [])

  return (
    <div class="container">
      {empleados.map(empleado => <ShowEmployees empleado={empleado} getEmployees={getEmployees} />)}
      <Link to='/NuevoEmpleado'><button>Nuevo Empleado</button></Link>
    </div>
  )
}
