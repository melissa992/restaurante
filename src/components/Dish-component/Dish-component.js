import React, { useState, useEffect } from "react";
import propTypes from 'prop-types';
import dish from "../Dish-component/Dish-component.module.css";
import image1 from "../../assets/img/menu1@2x.png";
import Swal from 'sweetalert2'

export const Dish = ( { item } ) => {

  const swalWithBootstrapButtons = Swal.mixin({
    customClass: {
      confirmButton: 'btn btn-success',
      cancelButton: 'btn btn-danger'
    },
    buttonsStyling: false
  })
  

  const [inputValue, setInputValue] = useState( 0 );

  const handleInputChange = ( e ) => {
    setInputValue( (e.target.value < 0)? 0 : e.target.value);
  }

  const addQuantity = () => {
    setInputValue( parseInt(inputValue) + 1);
  }

  const subQuantity = () => {
    setInputValue( ((parseInt(inputValue) - 1) < 0)? 0 : parseInt(inputValue) - 1);
  }

  const AddToCart = ( id )=> {
    if((inputValue === 0) &&(JSON.parse(localStorage.getItem('products')).findIndex(value => value.id == id) != -1)){
      swalWithBootstrapButtons.fire({
        title: 'Deseas eliminar el producto del carrito?',
        showCancelButton: true,
        confirmButtonText: 'Si :(',
        cancelButtonText: 'No :)',
      }).then((result) => {
        if (result.isConfirmed) {

          let products = JSON.parse(localStorage.getItem('products'));
          products.splice(products.findIndex(value => value.id == id),1);
          localStorage.setItem('products', JSON.stringify(products));
          swalWithBootstrapButtons.fire(
            'Eliminado!'
          )
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado'
          )
        }
    })}else if(inputValue === 0){
      Swal.fire({
        title: 'debe agregar 1 o más de un producto',
        icon: 'warning'
      })
    }else{
      swalWithBootstrapButtons.fire({
        title: 'Deseas agregar el producto al carrito?',
        showCancelButton: true,
        confirmButtonText: 'Si :)',
        cancelButtonText: 'No :(',
      }).then((result) => {
        if (result.isConfirmed) {
          if(!localStorage.getItem('products') && (inputValue > 0)){ 
            let tempProducts = [];
  
            tempProducts.push({id: id, quantity: inputValue});
            localStorage.setItem('products', JSON.stringify(tempProducts));
            swalWithBootstrapButtons.fire(
              'Agregado!'
            )
          }else{
            let tempProducts = JSON.parse(localStorage.getItem('products'));
  
            let index = tempProducts.findIndex( value => value.id === id);
  
            if(index !== -1){
              tempProducts[index].quantity = inputValue;
              localStorage.setItem('products', JSON.stringify(tempProducts));
              swalWithBootstrapButtons.fire(
                'Agregado!'
              )
            }else{
              tempProducts.push({id: id, quantity: inputValue});
              localStorage.setItem('products', JSON.stringify(tempProducts));
              swalWithBootstrapButtons.fire(
                'Agregado!'
              )
            }
          }
        } else if (
          /* Read more about handling dismissals below */
          result.dismiss === Swal.DismissReason.cancel
        ) {
          swalWithBootstrapButtons.fire(
            'Cancelado'
          )
        }
      })
    }
  }


  return (
    <div className={ dish.plate }>
              <img className={ dish.plate__image } src={ item.image } alt=""/>
              <div className={ dish.plate__description }>
                <h2 className={ dish.name }>{item.name}</h2>
                <p className={ dish.description }> { item.description }</p>
                <p className={ dish.price }>$ { item.price }</p>
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
                          dishid={ item.id } 
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
                        onClick={ () =>  AddToCart(item.id ) }>
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