import React from "react";
import recommendations from '../Recommendations-component/Recommendations.module.css';
import menu1 from "../../assets/img/menu1@2x.png";
import menu2 from "../../assets/img/menu2@2x.png";
import menu3 from "../../assets/img/menu3@2x.png";
import menu4 from "../../assets/img/menu4@2x.png";
import menu from "../../assets/img/menu@2x.png";
import { Link } from "react-router-dom";

export const Recommendations = () => {

  return (
    <section  className={ recommendations.recommendation__container }>
      <div className={ recommendations.column_1 }>
        <h2 className={recommendations.recommendation__title}>
          Los recomendados del chef
        </h2>
        <div  className={ recommendations.recommendation__menus}>
          <div>
            <img  className={ recommendations.menu__preview }
                  src={ menu1 }
                  alt="menu 1"/>
          </div>
          <div>
            <img  className={ recommendations.menu__preview }
                  src={ menu2 }
                  alt="menu 2"/>
          </div>
          <div>
            <img  className={ recommendations.menu__preview } 
                  src={ menu3 }
                  alt="menu 3"/>
          </div>
          <div>
            <img  className={ recommendations.menu__preview }
                  src={ menu4 }
                  alt="menu 4"/>
          </div>
        </div>
      </div>
      <div className={ recommendations.menu_access }>
        <img src={ menu } alt="menu"/>

        <Link to="/menu">
          Consultar el menú
        </Link>
      </div>
    </section>
  )
}