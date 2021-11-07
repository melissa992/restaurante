import React, { useState } from 'react'
import image1 from "../../assets/img/menu1@2x.png"
import { dishes } from "../../assets/data/dishesList"
import CarritoStyles from './Carrito-page.module.css'

const ShowItemsCarrito = (props) => {

  const { item, setTotalAPagar, calcularTotal } = props


  const plato = dishes.find(x => x.id === item.id)
  const [inputValue, setInputValue] = useState(item.quantity)

  const handleInputChange = (e) => {
    setInputValue((e.target.value < 0) ? 1 : e.target.value);
  }

  const addQuantity = () => {
    setInputValue(parseInt(inputValue) + 1)
  }

  const reduceQuantity = () => {
    setInputValue(parseInt(inputValue) - 1)
  }

  const deleteItem = () => {
    const tmpItemsCarrito = JSON.parse(localStorage.getItem('products'))
    localStorage.setItem('products', JSON.stringify(tmpItemsCarrito.filter(x => x.id !== item.id)))
  }

  const editItem = () => {
    const tmpItemsCarrito = JSON.parse(localStorage.getItem('products'))
    localStorage.setItem('products', JSON.stringify(tmpItemsCarrito.map(x => x.id === item.id ? { ...x, quantity: inputValue } : x)))
    setTotalAPagar(calcularTotal(dishes, JSON.parse(localStorage.getItem('products'))))
  }

  return (
    <div className={CarritoStyles.plateItem}>

      <img className={CarritoStyles.plate_img} src={image1} width="250" alt="" />
      <h3 className={CarritoStyles.title_name}>{plato.nombre}</h3>
      <h3 className={CarritoStyles.plate_price}>${plato.precio}</h3>
      <button className={CarritoStyles.borrar} onClick={deleteItem}><i className="fa fa-trash" aria-hidden="true"></i></button>
      <button className={CarritoStyles.editar} onClick={editItem}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <p className={CarritoStyles.plate_description}>{plato.descripcion}</p>
      <button className={CarritoStyles.less} onClick={reduceQuantity}>-</button>
      <input type="number" min="1" className={CarritoStyles.quantity} value={inputValue} onChange={handleInputChange} />
      <button className={CarritoStyles.plus} onClick={addQuantity}>+</button>
    </div>
  )
}

export default ShowItemsCarrito
