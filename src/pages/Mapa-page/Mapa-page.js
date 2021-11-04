import React from "react";
import { siteMap } from "../../assets/data/siteMap";
import mapa from "../Mapa-page/Mapa-page.module.css";

import { LinkSection } from "../../components/Links-section-component/Links-section-component";

export const MapaPage = () => {

  return (
    <div className={ mapa.mapa__container }>

      <h1>Mapa del sitio</h1>

      {
        siteMap.map( (value, index) => {
          return (
            <LinkSection key={ index } value={ value }/>
          )
        })
      }

    </div>
  )
}