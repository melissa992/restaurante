import React from "react";
import footerStyle from "../Footer-component/Footer-component.module.css";
import logo from "../../assets/img/logo@2x.png";
import { Link } from "react-router-dom";

export const FooterComponent = ()=> {

  return (
    <footer className={ footerStyle.footer }>
      <div className={ footerStyle.footer_logo}>
        <img src={ logo } alt="logo"/>
      </div>
      <div className={ footerStyle.footer_content}>
        <ul className={ footerStyle.links }>
          <li><Link to="/Mapa">Mapa del sitio</Link></li>
          <li><Link to="/Contactanos">Contáctanos</Link></li>
          <li><Link to="/Reservas">Reservas</Link></li>
        </ul>
        <div className={ footerStyle.information }>
          <span className={ footerStyle.name}>Restaurante Sal y Salsa Ltda</span>
          <address className={ footerStyle.direction }>Calle 19 No. 7 - 30, Bogota</address>
          <span className={ footerStyle.email }>reservas@salysalsa.com</span>
          <span className={ footerStyle.phone }>31232525321</span>

          <span className={ footerStyle.copy }> &copy; Copyright 2020.</span>
        </div>
      </div>
      <div className={ footerStyle.footer_mapa}>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3976.9342344323495!2d-74.0740024847494!3d4.605797243754412!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8e3f99a1f30307cf%3A0xf863232d4608bc5b!2zQ2wuIDE5ICM3LTMwLCBCb2dvdMOh!5e0!3m2!1sen!2sco!4v1631767138339!5m2!1sen!2sco"  allowFullScreen={false} loading="lazy" title="mapa"></iframe>
      </div>
    </footer>
  )
}