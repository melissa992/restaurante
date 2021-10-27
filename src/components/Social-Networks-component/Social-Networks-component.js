import React from "react";
import widget from '../Social-Networks-component/Social-Networks.module.css';

export const Widget = () => {

  return (
    <ul className={ widget.networks__container }>
      <li className={ widget.network }>
        <i className="fab fa-facebook-square"></i>
      </li>
      <li className={ widget.network }>
        <i className="fab fa-twitter"></i>
      </li>
      <li className={ widget.network }>
        <i className="fab fa-youtube"></i>
      </li>
    </ul>
  )
}