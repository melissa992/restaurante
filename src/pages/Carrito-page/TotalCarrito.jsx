import React from 'react'
import { Link } from 'react-router-dom'
import CarritoStyles from './Carrito-page.module.css'
import { dishes } from "../../assets/data/dishesList"

const TotalCarrito = props => {

  const { totalAPagar } = props

  return (
    <div className={CarritoStyles.total}>
      <h3>TOTAL</h3>
      <h3 className={CarritoStyles.total_price} id="total_price">${totalAPagar}</h3>
      <Link to="/Confirmar-Compra"><button>Reservar</button></Link>
    </div>
  )
}

export default TotalCarrito
