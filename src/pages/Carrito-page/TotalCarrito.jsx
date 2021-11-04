import React from 'react'

const TotalCarrito = props => {

  const { total } = props

  return (
    <div className="total">
      <h3>TOTAL</h3>
      <h3 className="total_price" id="total_price">${total}</h3>
      <a href="#"><button>Reservar</button></a>
    </div>
  )
}

export default TotalCarrito
