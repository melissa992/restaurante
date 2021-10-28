import React from "react";
import { dishes } from "../../assets/img/js/dishesList";
import menu from "../Menu-page/Menu-page.module.css";
import image1 from "../../assets/img/menu1@2x.png";
import image2 from "../../assets/img/menu2@2x.png";
import image3 from "../../assets/img/menu3@2x.png";
import image4 from "../../assets/img/menu4@2x.png";
import image5 from "../../assets/img/menu5@2x.png";

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
            <div className={ menu.plate}>
              <img className={ menu.plate__image } src={ image1} alt=""/>
              <div className={ menu.plate__description }>
                <h2 className={ menu.name }>{item.nombre}</h2>
                <p className={ menu.description }> { item.descripcion }</p>
                <p className={ menu.price }>$ { item.precio }</p>
              </div>
              <div className={ menu.buttons__container}>
                <span>Cantidad</span>
                <div className={ menu.buttons__panel }>
                  <button type="button" class={ menu.subBtn }>
                    -
                  </button>
                  <input className={ menu.quantityInput } type="number" id="${ dish.id }" value="0"/>
                  <button type="button" className={ menu.addBtn }>
                    +
                  </button>
                </div>
                <button className={ menu.cart__btn } 
                        dishID={ item.id }>
                    Añadir al carrito 
                    <i className="fas fa-shopping-cart"></i>
                </button>
              </div>
            </div>
          )
        })}

      </div>

      <div className={ menu.menu_pagination} id="pagination">
        <button className={ menu.previous } id="previous"><i className="fas fa-arrow-left"></i> ANTERIOR</button>
        <button className={ menu.next } id="next">SIGUIENTE <i className="fas fa-arrow-right"></i></button>
      </div>
    </div>
  )
}