import React, { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom'
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css'

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
    <div className={GestorEmpleadosStyles.container}>
      <h1 className={GestorEmpleadosStyles.container__title}>
        Actulaizar Empleado
      </h1>
      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Nombre:
        </label>
        <input className={GestorEmpleadosStyles.form__input}
          type="text"
          defaultValue={nombre}
          disabled>
        </input>
      </div>

      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Descripción:
        </label>
        <input className={GestorEmpleadosStyles.form__input}
          type="text"
          defaultValue={descripcion}
          disabled>
        </input>
      </div>

      <div className={GestorEmpleadosStyles.container__btns}>
        <button className={GestorEmpleadosStyles.btn__edit}
          onClick={() => updateEmployee()}>Guardar</button>
      </div>
    </div>
  )
}
