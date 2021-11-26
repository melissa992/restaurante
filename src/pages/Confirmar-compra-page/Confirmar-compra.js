import React, { useEffect, useState } from 'react'
import Confirmar from "../Confirmar-compra-page/Confirmar-compra.module.css";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
init("user_CeEuehQjrl8PKkAKrJKpA");

export const Formulario = () => {

    const [name, setName] = useState("");
    const [mail, setEmail] = useState("");
    const [info, setInfo] = useState([]);
  

    useEffect(() => {
        fetchData();
    },[]);


    const fetchData = async()=>{
        let url = 'https://backendapicrud.herokuapp.com/api/platos/ver-platos';
        await fetch(url)
        .then(res => res.json())
        .then(data => {
            setInfo(data.info);
        })
        .catch( () => {})
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        if(localStorage.getItem("products")){
            if((JSON.parse(localStorage.getItem("products"))?.length !== 0)){
                crearCorreo();
            }
        }else{
            console.log("Sin elementos")
        }
       
      }

    function crearCorreo(){
        console.log(name, mail);
        let productos = JSON.parse(localStorage.getItem("products"));
        let productosInfo = "";
        let precioTotal = 0;
        productos.forEach(element => {
            let position = info.findIndex(dish => dish.id == element.id);
            let precioTemp = (info[position].price) * Number(element.quantity);
            let infoTemp = `
            Producto = ${info[position].name},
            Valor unitario = ${info[position].price},
            Cantidad = ${element.quantity}
            Valor Total = ${precioTemp};
            `;
            precioTotal += precioTemp;
            productosInfo += infoTemp;
        });
        let mensajeCorreo = {
            name: name,
            totalValue: precioTotal,
            message: productosInfo,
            subject: "Notificacion de pedido",
            userEmail: mail

        };
        emailjs.send("service_6nraj6z", "template_c7vrlva", mensajeCorreo).then(
            (val)=>{
              Swal.fire({
                text: 'Correo enviado correctamente',
                icon: 'success'
              });
              localStorage.clear()
            },
            (err)=>{
              Swal.fire({
                text: 'Error al enviar el correo',
                icon: 'error'
            })})
          
    }
    
    return (
        <div className= { Confirmar.container__confirmar } >
            <form  onSubmit={handleSubmit}>
                <h1 className= { Confirmar.titulo }>Confirmar pedido</h1>
                
                <div className = {Confirmar.campoFormulario}>
                    <label for="name">Nombre: </label>
                    <input  type= "text" 
                         value={name} 
                         onChange={(e) => setName(e.target.value)}
                         required
                         minLength="3"/>
                </div>

                <div className = {Confirmar.campoFormulario}>
                    <label for="email">Correo: </label>
                    <input  type= "email" 
                        value={mail} 
                        onChange={(e) => setEmail(e.target.value)}
                        required/>
                </div>
            
            
                <button type="submit" className= {Confirmar.send} >Confirmar</button>
        
            </form>
        </div>
    )
}

