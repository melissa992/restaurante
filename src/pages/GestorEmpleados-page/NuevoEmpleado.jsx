import React, { useState } from 'react';
import GestorEmpleadosStyles from './GestorEmpleados-page.module.css';
import { useHistory } from 'react-router-dom';

export const NuevoEmpleado = () => {

  const [nombre, setNombre] = useState('');
  const [descripcion, setDescripcion] = useState('');
  const [image, setImage] = useState('');

  const history = useHistory()

  const registrarNuevoEmpleado = async () => {
    const url = `https://backendapicrud.herokuapp.com/api/empleados/nuevo-empleado`
    const tmp = {
      id: new Date().getTime(),
      name: nombre,
      description: descripcion,
      image: image
    }
    await fetch(url, {
      method: 'POST',
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
        Agregar Empleado
      </h1>
      <div  className={GestorEmpleadosStyles.form__block}>
        <img src={image} alt={nombre}></img>
      </div>
      <div className={GestorEmpleadosStyles.form__block}>
        <label className={GestorEmpleadosStyles.form__label}>
          Nombre del nuevo empleado:
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
          onClick={() => registrarNuevoEmpleado()}>Registrar al nuevo empleado</button>
      </div>
    </div>
  )
}
