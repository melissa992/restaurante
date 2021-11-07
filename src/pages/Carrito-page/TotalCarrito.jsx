import React from 'react'
import { Link } from 'react-router-dom'
import CarritoStyles from './Carrito-page.module.css'

const TotalCarrito = props => {

  const { total } = props

  console.log(total)

  return (
    <div className={CarritoStyles.total}>
      <h3>TOTAL</h3>
      <h3 className={CarritoStyles.total_price} id="total_price">${total}</h3>
      <Link to="/Confirmar-Compra"><button>Reservar</button></Link>
    </div>
  )
}

export default TotalCarrito
