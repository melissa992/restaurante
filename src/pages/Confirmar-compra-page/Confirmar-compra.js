import React, { useState } from "react";
import Confirmar from "../Confirmar-compra-page/Confirmar-compra.module.css";

export const Formulario = () => {

    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem("products")){
            if((JSON.parse(localStorage.getItem("products"))?.length !== 0)){
                console.log(name, mail)
            }
           
        }else{
            console.log("Sin elementos")
        }
       
      }
    
    return (
        <div className= { Confirmar.container__confirmar } >
            <form  onSubmit={handleSubmit}>

            <input  type= "text" 
                    value={name} 
                    onChange={(e) => setName(e.target.value)}
                    required
                    minLength="3"/>
            <input  type= "email" 
                    value={mail} 
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    />
            <button type="submit" >Confirmar</button>
        
            </form>
            </div>
    )
}

