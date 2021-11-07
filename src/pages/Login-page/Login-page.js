import React, { useState } from "react";
import loginCSS from "../Login-page/Login-page.module.css";

export const Login = () => {

  const [ID, setID] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // console.log(ID,password);
  }
  
  return (
    <div className={ loginCSS.login__container }>
      <div className={ loginCSS.login}>
        <i className="fas fa-user-circle"></i>
        <form onSubmit={handleSubmit}>
          <div className={loginCSS.input__block}>
            <label>Nombre de usuario:</label>
            <input  type="text"
                    value={ ID }
                    onChange={(e) => setID(e.target.value)}
                    required
            />
          </div>
          <div className={loginCSS.input__block}>
            <label>Contraseña:</label>
            <input  type="password"
                    value={ password }
                    onChange={(e) => setPassword(e.target.value)}
                    required
            />
          </div>
          <button type="submit">Ingresar</button>
        </form>
      </div>
    </div>
  )
}