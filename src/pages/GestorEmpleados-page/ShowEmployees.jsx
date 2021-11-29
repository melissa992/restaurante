import React from 'react'
import { useHistory } from 'react-router-dom'
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css';
import Swal from 'sweetalert2';

const ShowEmployees = (props) => {

  const { index, empleado, getEmployees } = props
  const history = useHistory()

  const deleteEmployee = async () => {
    const url = `https://backendapicrud.herokuapp.com/api/empleados/eliminar-empleado/${empleado._id}`
    const tmp = { token: localStorage.getItem('token') }
    await fetch(url, {
      method: 'DELETE',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    }).then(response => response.json())
      .then(() => {
        Swal.fire({
          icon:'success',
          text:'Eliminado correctamente',
          timer: 1500
        })
        getEmployees()
      })
      .catch(() => Swal.fire({icon:'error',text:'Error al eliminar el empleado',timer: 1500}))
  }

  return (
    <div key={index} className={GestorEmpleadosStyles.empleado}>
      <img src={empleado.image} alt={empleado.name} width="200" height="200"></img>
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
