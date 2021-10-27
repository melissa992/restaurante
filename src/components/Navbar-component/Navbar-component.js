import React, { useState } from 'react';
import nav from '../Navbar-component/Navbar.module.css';
import { useCurrentWidth } from '../../hooks/useResize.js'
import { Link, NavLink } from 'react-router-dom';

export const Navbar = () => {

  const [clicked, setClicked] = useState( false );

  const handleClick = () => {
    setClicked( !clicked )
  }

  let width = useCurrentWidth();

  if(width >= 820){
    const links = document.querySelector('#linksContainer');
  
    if(links){
      if(links.classList?.contains(nav.toggle)){
        links.classList?.remove(nav.toggle);
      }
    }
  }

  return (
    <nav className={ nav.navbar }>
      <Link className={ nav.logo } to="/Inicio">sal&salsa</Link>
      <div  className={ nav.button } onClick={ handleClick }>
        <i className="fas fa-bars"></i>
      </div>
      <ul id="linksContainer" 
          className={ 
            clicked? 
            `${nav.linksContainer} ${nav.toggle}` : 
            `${nav.linksContainer}`
          }
      >
        <NavLink className={ nav.link__item } to="/Nosotros">
          <i className="fas fa-address-card"></i>
          Nosotros
        </NavLink>
        <NavLink className={ nav.link__item } to="/Menu">
          <i className="fas fa-clipboard-list"></i>
          Menú
        </NavLink>
        <NavLink className={ nav.link__item } to="/Servicios">
          <i className="far fa-list-alt"></i>
          Servicios
        </NavLink>
        <NavLink className={ nav.link__item } to="/Reservas">
          <i className="far fa-calendar-check"></i>
          Reservas
        </NavLink>
        <NavLink className={ nav.link__item } to="/Contactanos">
          <i className="fas fa-phone"></i>
          Contáctanos
        </NavLink>
        <NavLink className={ nav.link__item } to="/Carrito">
          <i className="fas fa-shopping-cart"></i>
        </NavLink>
      </ul>
    </nav>
  )
}