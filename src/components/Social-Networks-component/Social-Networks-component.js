import React from "react";
import widget from '../Social-Networks-component/Social-Networks.module.css';

export const Widget = () => {

  return (
    <ul className={ widget.networks__container }>
      <li className={ widget.network }>
        <i class="fab fa-facebook-square"></i>
      </li>
      <li className={ widget.network }>
        <i class="fab fa-twitter"></i>
      </li>
      <li className={ widget.network }>
        <i class="fab fa-youtube"></i>
      </li>
    </ul>
  )
}