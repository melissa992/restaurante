import React, { useState } from 'react';
import nav from '../Navbar-component/Navbar.module.css';
import { useCurrentWidth } from '../../hooks/useResize.js'
import { Link, NavLink } from 'react-router-dom';
import { NavItems } from '../../assets/data/NavbarItems';

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
        { NavItems.map((item, index) => {
          return (
            <NavLink className={ nav.link__item } to={item.url} key={index}>
              <i className={item.iconClass}></i>
              {item.text}
            </NavLink>
          )
        })}
      </ul>
    </nav>
  )
}