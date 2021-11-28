import React, { useState } from "react";
import contactanos from "../Contactanos-page/Contactanos-page.module.css";
import Swal from 'sweetalert2';
import emailjs from 'emailjs-com';
import{ init } from 'emailjs-com';
import { useHistory } from "react-router";
init("user_CeEuehQjrl8PKkAKrJKpA");

export const ContactanosPage = () => {

  let history = useHistory();
  
  const selectList = [
    'Celebración de cumpleaños',
    'Aniversarios',
    'Fiestas infantiles',
    'Declaraciones o propuestas',
    'Despedidas',
    'Cena con amigos'
  ]

  const [event, setEvent] = useState("");
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [date, setDate] = useState("");
  const [hours, setHours] = useState("");
  const [quantity, setQuantity] = useState("");
  const [message, setMessage] = useState("");
  const [TYC, setTYC] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    sentForm();
  }

  function getCurrentDate(){
    const date = new Date();

    const dd = (date.getDate() < 10)? '0'+ date.getDate() : date.getDate();
    const mm = (date.getMonth() < 10)? '0'+ date.getMonth() : date.getMonth();
    const hh = (date.getHours() < 10)? '0'+date.getHours() : date.getHours();
    const minutes = (date.getMinutes() < 10)? '0'+date.getMinutes(): date.getMinutes();
    const today = date.getFullYear()+'-'+(mm + 1)+'-'+dd+'T'+hh+':'+minutes;

    return today.toString();
  }


  function sentForm(){

    let emailBody = {
      nombreR: name,
      fechaR: date,
      servicioR: event,
      personasR: quantity,
      horasR: hours, 
      indicacionesR: message,
      telefonoR: phone,
      correoR: email
    }

    emailjs.send('service_p8aor5o', 'template_83va4yz', emailBody).then(
      (val)=>{
        crearReserva();
      },
      (err)=>{
        Swal.fire({
          text: 'Error al enviar el correo',
          icon: 'error'
      })}
    
    )
  }

  const crearReserva = ()=> {
      let temp = {
      id: new Date().getTime(),
      typeService: event,
      clientName: name,
      email: email,
      phone: phone,
      date: date,
      duration: hours,
      numPerson: quantity,
      indications: message,
      status: 'enespera',
    }

    GuardarReserva(temp);
    history.push("/Inicio");
  }

  const GuardarReserva = async(temp)=>{
    let url = 'https://backendapicrud.herokuapp.com/api/solicitudes/guardar-solicitudes';
    await fetch(url,{
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(temp)
    })
      .then( () => Swal.fire({
        icon:'success',
        text:'Reserva creada correctamente',
        timer: 1500
      }))
      .catch( () => Swal.fire({
        icon:'error',
        text:'Error al crear reserva',
        timer: 1500
      }))
  } 

  return (
    <section className={contactanos.contactanos__container}>
      <h1 className="display-1 mb-5 fw-bold">Reservas</h1>
      <div className="row">
        <div className="col-md-7 col-sm-12">
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic vero natus libero deleniti officia eos, doloribus quisquam nam, architecto laudantium nesciunt aspernatur omnis error totam a? Repudiandae, eaque. Maiores quibusdam amet tempora quaerat sapiente repellendus asperiores ut expedita id, adipisci, culpa, vitae facere nostrum illo dolorum dicta libero in eveniet ipsum eius. Debitis commodi voluptatibus fugit fuga, a porro id ipsum aperiam ullam itaque enim expedita mollitia qui molestiae nihil. Vel porro qui mollitia molestias repellendus aliquid dolorum impedit nobis sed ad iste esse quo facere assumenda, et optio est doloribus deleniti voluptate hic quod accusantium non laborum! Perferendis nobis quas, vel quam quibusdam rerum alias perspiciatis numquam facere odio ratione, cupiditate pariatur veniam doloribus autem nisi. Earum, dolorem recusandae! Dolorem nobis nisi incidunt consectetur maiores libero officia, ipsum corporis suscipit non aliquam, consequatur, repellat porro autem ducimus est itaque. At, sequi. Voluptatem similique sit pariatur labore atque et ad aut ab molestiae error ullam unde velit, eaque optio maiores, alias deserunt sapiente repudiandae libero, blanditiis impedit quas nesciunt sunt. Et eius quas voluptatem nisi suscipit! Inventore, consectetur expedita? Veniam possimus sunt ipsam quae iure officia sint. Maxime, incidunt!
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores hic vero natus libero deleniti officia eos, doloribus quisquam nam, architecto laudantium nesciunt aspernatur omnis error totam a? Repudiandae, eaque. Maiores quibusdam amet tempora quaerat sapiente repellendus asperiores ut expedita id, adipisci, culpa, vitae facere nostrum illo dolorum dicta libero in eveniet ipsum eius. Debitis commodi voluptatibus fugit fuga, a porro id ipsum aperiam ullam itaque enim expedita mollitia qui molestiae nihil. Vel porro qui mollitia molestias repellendus aliquid dolorum impedit nobis sed ad iste esse quo facere assumenda, et optio est doloribus deleniti voluptate hic quod accusantium non laborum! Perferendis nobis quas, vel quam quibusdam rerum alias perspiciatis numquam facere odio ratione, cupiditate pariatur veniam doloribus autem nisi. Earum, dolorem recusandae! Dolorem nobis nisi incidunt consectetur maiores libero officia, ipsum corporis suscipit non aliquam, consequatur, repellat porro autem ducimus est itaque. At, sequi. Voluptatem similique sit pariatur labore atque et ad aut ab molestiae error ullam unde velit, eaque optio maiores, alias deserunt sapiente repudiandae libero, blanditiis impedit quas nesciunt sunt. Et eius quas voluptatem nisi suscipit! Inventore, consectetur expedita? Veniam possimus sunt ipsam quae iure officia sint. Maxime, incidunt!
          </p>
        </div>
        <div className="col-md-5 col-sm-12 ">
          <form className="m-auto" id="contact_form" onSubmit={handleSubmit}>
            <select className={contactanos.borde_conf} required id="servicio" onChange={(e) => setEvent(e.target.value)}>
              <option disabled selected value="">Selecciona una opción</option>
              {
                selectList.map( (value,index) => {
                  return (
                    <option key={index} value={value}>{value}</option>
                  )
                })
              }
            </select>

            <input  type="text" 
                    className={ contactanos.borde_conf }
                    placeholder="Nombre completo"
                    pattern="[A-Za-zñÑ ]{3,30}"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required />

            <input  type="email"
                    className={ contactanos.borde_conf }
                    placeholder="Correo electronico" 
                    minLength="6" 
                    maxLength="30"
                    value={ email }
                    onChange={(e) => setEmail(e.target.value)}
                    required />
            
            <input  type="text" 
                    className={ contactanos.borde_conf } 
                    pattern="3[0-9]{7,10}"
                    placeholder="313 687 9895"
                    value={ phone }
                    onChange={(e) => setPhone(e.target.value)}
                    required />
            
            <input  type="datetime-local"
                    className={ contactanos.borde_conf }
                    min={ getCurrentDate()}
                    value={ date }
                    onChange={(e) => setDate(e.target.value)}
                    required />

            <input  type="number" 
                    className={ contactanos.borde_conf } 
                    min="1" 
                    max="24" 
                    placeholder="Duración del evento"
                    value={ hours }
                    onChange={(e) => setHours(e.target.value)}
                    required />

            <input  type="number" 
                    className={ contactanos.borde_conf }
                    min="1" 
                    placeholder="Numero de personas" 
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required />

            <textarea className={ contactanos.borde_conf } 
                      rows="8"
                      minLength="6" 
                      maxLength="300" 
                      placeholder="Indicaciones especiales"
                      value={ message }
                      onChange={(e) => setMessage(e.target.value)} 
                      required>
            </textarea>

            <div className="form-check">
              <input  className="form-check-input"
                      id="flexCheckDefault"
                      name="flexCheckDefault"
                      type="checkbox"
                      checked={ TYC }
                      onChange={() => setTYC(!TYC)}
                      required/>
              <label className="form-check-label" for="flexCheckDefault">
                Acepto terminos y condiciones
              </label>
            </div>

            <button className={contactanos.button_send} id="send_btn" type="submit">Enviar</button>
                </form>
            </div>
        </div>
    </section>
  )
}