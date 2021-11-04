import React, { useState } from "react";
import { dishes } from "../../assets/data/dishesList";
import { Dish } from "../../components/Dish-component/Dish-component";
import menu from "../Menu-page/Menu-page.module.css";


export const MenuPage = () => {

  return (
    <div  className={ menu.menu__container }
          id="menu-container">

      <h1 className={ menu.title }>
        Haz tu pedido
      </h1>

      <div  className={ menu.menu__items } 
            id="menu-items">

        {dishes.map((item,index) => {
          return (
            <Dish item={ item } key={index}/>
          )
        })}

      </div>

      {/* <div  className={ menu.menu_pagination}
            id="pagination">
        <button className={ menu.previous } 
                id="previous">
          <i className="fas fa-arrow-left"></i> 
          ANTERIOR
        </button>

        <button className={ menu.next }
                id="next">
          SIGUIENTE 
          <i className="fas fa-arrow-right"></i>
        </button>
      </div> */}
      
    </div>
  )
}