import React, { useEffect, useState } from "react";
import ShowEmployees from './ShowEmployees'
import { Link } from 'react-router-dom'
import GestorEmpleadosStyles from "../GestorEmpleados-page/GestorEmpleados-page.module.css";

export const Empleados = () => {

  const [empleados, setEmpleados] = useState([])

  const getEmployees = async () => {
    let url = 'https://backendapicrud.herokuapp.com/api/empleados/ver-empleados'
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

  console.log(empleados)

  return (
    <div className={GestorEmpleadosStyles.container}>
      <h1 className={GestorEmpleadosStyles.container__title}>Gestor Empleados</h1>
      {empleados.map((empleado, index) => <ShowEmployees empleado={empleado} getEmployees={getEmployees} />)}
      <Link to='/NuevoEmpleado'><button className={GestorEmpleadosStyles.nuevo_empleado}>Nuevo Empleado</button></Link>
    </div>
  )
}
