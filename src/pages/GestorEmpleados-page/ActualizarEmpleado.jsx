import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import loginCSS from './GestorEmpleados-page.module.css'

export const ActualizarEmpleado = (props) => {

  const history = useHistory()

  const { id } = useParams()

  const [nombre, setNombre] = useState('')
  const [descripcion, setDescripcion] = useState('')

  const getData = async () => {
    const url = `http://127.0.0.1:4000/api/empleados/ver-empleado/${id}`
    await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(res => {
        setNombre(res.empleado.name)
        setDescripcion(res.empleado.description)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getData()
  }, [])

  const handleSubmit = (e) => {
    e.preventDefault();
  }

  const updateEmployee = async () => {
    const url = `http://127.0.0.1:4000/api/empleados/editar-empleado/${id}`
    const tmp = {
      name: nombre,
      description: descripcion
    }
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    }).then(res => res.json())
      .then(res => {
        console.log(res)
      })
      .catch(e => console.log(e))
    history.push('/Empleados')
  }

  return (
    <div className={loginCSS.login__container}>
      <div className={loginCSS.login}>
        <i className="fas fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <div className={loginCSS.input__block}>
            <label>Nombre del empleado:</label>
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
          <button onClick={updateEmployee} >Guardar los cambios</button>
        </form>
      </div>
    </div>
  )
}
