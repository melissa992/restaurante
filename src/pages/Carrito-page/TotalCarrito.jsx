import React, { useEffect, useState } from 'react'
import { dishes } from "../../assets/js/dishesList"

const itemsCarrito = JSON.parse(localStorage.getItem('products'))

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
