import React from 'react'
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css'

const ShowEmployees = (props) => {

  const { empleado, getEmployees } = props

  const deleteEmployee = async () => {
    const url = `http://127.0.0.1:4000/api/empleados/eliminar-empleado/${empleado._id}`
    const tmp = { token: localStorage.getItem('token') }
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    }).then(response => response.json())
      .then(response => {
        console.log(response)
        getEmployees()
      })
      .catch(e => console.log(e))
  }

  return (
    <div className={GestorEmpleadosStyles.plateItem}>

      <img className={GestorEmpleadosStyles.empleado_img} src='#' width="250" alt="" />
      <h3 className={GestorEmpleadosStyles.empleado_name}>{empleado.name}</h3>
      <button className={GestorEmpleadosStyles.borrar} onClick={deleteEmployee} ><i className="fa fa-trash" aria-hidden="true"></i></button>
      <button className={GestorEmpleadosStyles.editar} ><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <p className={GestorEmpleadosStyles.empleado_description}>Description</p>

    </div>
  )
}

export default ShowEmployees
