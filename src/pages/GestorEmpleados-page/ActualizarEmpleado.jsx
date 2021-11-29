import React, { useEffect, useState } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css';


export const ActualizarEmpleado = (props) => {

  const history = useHistory()

  const { id } = useParams()

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [image, setImage] = useState('');


  const getData = async () => {
    const url = `https://backendapicrud.herokuapp.com/api/empleados/ver-empleado/${id}`
    await fetch(url, {
      method: 'GET',
      headers: { 'Content-Type': 'application/json' }
    }).then(res => res.json())
      .then(res => {
        setNombre(res.empleado.name)
        setDescripcion(res.empleado.description)
        setImage(res.empleado.image)
      })
      .catch(e => console.log(e))
  }

  useEffect(() => {
    getData()
  }, [])

  const updateEmployee = async () => {
    const url = `https://backendapicrud.herokuapp.com/api/empleados/editar-empleado/${id}`
    const tmp = {
      name: nombre,
      description: descripcion,
      image: image
    }
    await fetch(url, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(tmp)
    }).then(res => res.json())
      .then(res => {
        Swal.fire({
          icon:'success',
          text:'Actualizado correctamente',
          timer: 1500
        })
      })
      .catch(() => Swal.fire({
        icon:'success',
        text:'Error al actualizar',
        timer: 1500
      }))
    history.push('/Empleados')
  }

  return (
    <div className={GestorEmpleadosStyles.container}>
      <h1 className={GestorEmpleadosStyles.container__title}>
        Actualizar Empleado
      </h1>
      <div className={GestorEmpleadosStyles.form__block}>
        <img src={image} alt={nombre}></img>
      </div>
      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Nombre:
        </label>
        <input className={GestorEmpleadosStyles.form__input}
          type="text"
          onChange={e => setNombre(e.target.value)}
          defaultValue={nombre}>
        </input>
      </div>

      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Descripción:
        </label>
        <input className={GestorEmpleadosStyles.form__input}
          type="text"
          onChange={e => setDescripcion(e.target.value)}
          defaultValue={descripcion}>
        </input>
      </div>

      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Imagen:
        </label>
        <input className={GestorEmpleadosStyles.form__input}
          type="url"
          onChange={e => setImage(e.target.value)}
          defaultValue={image}>
        </input>
      </div>

      <div className={GestorEmpleadosStyles.container__btns}>
        <button className={GestorEmpleadosStyles.btn__edit}
          onClick={() => updateEmployee()}>Guardar</button>
      </div>
    </div>
  )
}
