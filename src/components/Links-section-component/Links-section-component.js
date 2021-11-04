import React from "react";
import { Link } from "react-router-dom";
import mapa from "../../pages/Mapa-page/Mapa-page.module.css";
import { SubLink } from "../SubLink-component/SubLink-component";

export const LinkSection = ( { value })=> {
  
  return(
    <ul className={ mapa[value.class] }>
      <li>
        <h4 className={ mapa.subtitle }>
          <Link to={ value.mainURL }>
            {value.mainTitle}
          </Link>
        </h4>
      </li>

      {
        value.subLinks?.map( (subLink,index) => {
          return(
            <SubLink  key={index} subLink={ subLink }/>
          )
        })
      }
    </ul>
  )
}