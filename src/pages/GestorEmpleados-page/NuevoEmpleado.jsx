import React from 'react'
import jwt_decode from 'jwt-decode'

export const NuevoEmpleado = () => {
  console.log(jwt_decode(localStorage.getItem('token')).role)
  return (
    <h1>hola</h1>
  )
}
