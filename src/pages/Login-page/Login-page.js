import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";
import loginCSS from "../Login-page/Login-page.module.css";
import jwt_decode from 'jwt-decode'

export const Login = () => {

  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(ID,password);
  }

  const veriIngreso = async () => {
    if (ID.trim().length !== 0 && password.trim().length !== 0) {
      let tmp = {
        correo: ID,
        password: password
      }
      let url = 'http://127.0.0.1:4000/api/auth/ingresar'
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tmp)
      }).then(response => response.json())
        .then(response => {
          if (response.ok === true) {
            let token = response.token
            localStorage.setItem('token', token)
            let decoded = jwt_decode(token)
            if (decoded.role !== 0) {
              history.push('/DashboardClient')
            } else {
              history.push('/DashboardAdmin')
            }
          } else {
            alert(response.msg)
          }
        })
        .catch(e => console.log(e))
    } else {
      console.log('Error')
    }
  }

  //const renovar = async () => {
  //let url = 'http://127.0.0.1:4000/api/auth/renovar'
  //await fetch(url, {
  //method: 'GET',
  //headers: { 'x-access-token': "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOjE2Mzc4OTIxMjAyMDYsInJvbGUiOjEsImlhdCI6MTYzNzg5NTIzOSwiZXhwIjoxNjM3ODk4ODM5fQ.JA1L4z_k5HKxSeF49ITrI3doqpTVdTDYYmZU0syqYs" },
  //}).then(response => response.json())
  //.then(response => console.log(response))
  //.catch(e => console.log(e))
  //}

  return (
    <div className={loginCSS.login__container}>
      <div className={loginCSS.login}>
        <i className="fas fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <div className={loginCSS.input__block}>
            <label>Nombre de usuario:</label>
            <input type="text"
              value={ID}
              onChange={(e) => setID(e.target.value)}
              required
            />
          </div>
          <div className={loginCSS.input__block}>
            <label>Contraseña:</label>
            <input type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={veriIngreso} >Ingresar</button>
          <Link to='/Registro'><button>¿No tienes una cuenta?</button></Link>
        </form>
      </div>
    </div>
  )
}
