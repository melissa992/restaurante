import React from 'react'
import { useHistory } from 'react-router-dom'
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css'

const ShowEmployees = (props) => {

  const { index, empleado, getEmployees } = props
  const history = useHistory()

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
    <div key={index} className={GestorEmpleadosStyles.empleado}>
      <div className={GestorEmpleadosStyles.empleado__content}>
        <h2>{empleado.name}</h2>
        <h3>{empleado.description}</h3>
        <div className={GestorEmpleadosStyles.container__btns}>
          <button onClick={deleteEmployee}
            className={GestorEmpleadosStyles.btn__del}>
            <i className="fa fa-trash" aria-hidden="true"></i>
          </button>
          <button className={GestorEmpleadosStyles.btn__edit}
            onClick={() => history.push(`/ActualizarEmpleado/${empleado.id}`)}>
            <i className="fas fa-edit"></i>
          </button>
        </div>
      </div>
    </div>
  )
}

export default ShowEmployees
