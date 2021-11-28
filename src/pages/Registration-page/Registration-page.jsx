import React, { useState } from "react";
import { useHistory } from "react-router-dom";
import loginCSS from "../Login-page/Login-page.module.css";

export const Registration = () => {

  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState('');
  const history = useHistory()

  const handleSubmit = (e) => {
    e.preventDefault();

    // console.log(ID,password);
  }

  const registro = async () => {
    if (password !== confirmPassword) {
      alert('Las contraseñas no son iguales')
    } else {
      let tmp = {
        id: new Date().getTime(),
        name: '',
        role: 1,
        userName: ID,
        password: password
      }
      let url = 'http://127.0.0.1:4000/api/auth/nuevo-usuario'
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(tmp)
      }).then(response => response.json())
        .then(response => console.log(response))
        .catch(e => console.log(e))
      history.push('/Ingresar')
      alert('Usuario registrado correctamente')
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
          <div className={loginCSS.input__block}>
            <label>Confirmar contraseña:</label>
            <input type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button onClick={registro} >Registrar</button>
        </form>
      </div>
    </div>
  )
}
