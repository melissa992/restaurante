import React, { useState } from "react";
import propTypes from 'prop-types';
import dish from "../Dish-component/Dish-component.module.css";
import image1 from "../../assets/img/menu1@2x.png";
import image2 from "../../assets/img/menu2@2x.png";
import image3 from "../../assets/img/menu3@2x.png";
import image4 from "../../assets/img/menu4@2x.png";
import image5 from "../../assets/img/menu5@2x.png";

export const Dish = ( { item } ) => {

  const [inputValue, setInputValue] = useState( 0 );

  const handleInputChange = ( e ) => {
    setInputValue( e.target.value );
  }

  const addQuantity = () => {
    setInputValue( parseInt(inputValue) + 1);
  }

  const subQuantity = () => {
    setInputValue( parseInt(inputValue) - 1);
  }


  return (
    <div className={ dish.plate }>
              <img className={ dish.plate__image } src={ image1 } alt=""/>
              <div className={ dish.plate__description }>
                <h2 className={ dish.name }>{item.nombre}</h2>
                <p className={ dish.description }> { item.descripcion }</p>
                <p className={ dish.price }>$ { item.precio }</p>
              </div>
              <div className={ dish.buttons__container}>
                <span>Cantidad</span>
                <div className={ dish.buttons__panel }>
                  <button type="button" 
                          className={ dish.subBtn }
                          onClick={ subQuantity }>
                    -
                  </button>

                  <input  className={ dish.quantityInput } 
                          type="number" 
                          id="${ dish.id }" 
                          onChange={ handleInputChange }
                          value={ inputValue }
                          />

                  <button type="button" 
                          className={ dish.addBtn }
                          onClick={ addQuantity }>
                    +
                  </button>
                </div>
                <button className={ dish.cart__btn } 
                        dishid={ item.id }>
                    Añadir al carrito 
                    <i className="fas fa-shopping-cart">
                    </i>
                </button>
              </div>
            </div>
  )
}

Dish.propTypes = {
  item: propTypes.any
}