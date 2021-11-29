import React, { useState } from 'react'
import loginCSS from './GestorEmpleados-page.module.css'

export const ActualizarEmpleado = (props) => {

  console.log(props)
  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const updateEmployee = () => {
    console.log('actualizar')
  }

  return (
    <div className={loginCSS.login__container}>
      <div className={loginCSS.login}>
        <i className="fas fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <div className={loginCSS.input__block}>
            <label>Nombre del nuevo empleado:</label>
            <input type="text"
              value={nombre}
              onChange={(e) => setNombre(e.target.value)}
              required
            />
          </div>
          <div className={loginCSS.input__block}>
            <label>Descripción:</label>
            <input type="text"
              value={descripcion}
              onChange={(e) => setDescripcion(e.target.value)}
              required
            />
          </div>
          <button onClick={updateEmployee} >Registrar al nuevo empleado</button>
        </form>
      </div>
    </div>
  )
}
