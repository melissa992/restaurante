import React from 'react'
import { Link } from 'react-router-dom'

const TotalCarrito = props => {

  const { total } = props

  return (
    <div className="total">
      <h3>TOTAL</h3>
      <h3 className="total_price" id="total_price">${total}</h3>
      <Link to="/Confirmar-Compra"><button>Reservar</button></Link>
    </div>
  )
}

export default TotalCarrito
