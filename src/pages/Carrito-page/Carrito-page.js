import React, { useEffect, useState } from "react"
import './Carrito-page.module.css'
import ShowItemsCarrito from './ShowItemsCarrito'
import TotalCarrito from './TotalCarrito'
import { dishes } from "../../assets/js/dishesList"

export const CarritoPage = () => {
  const style = {
    paddingTop: '.5rem'
  }

  const calcularTotal = (dishes, tmpitem) => {
    let sum = 0

    dishes.forEach((plate) => {
      itemsCarrito.forEach((tmpitem) => {
        sum = plate.id === tmpitem.id ? sum + tmpitem.quantity * plate.precio : sum
      })
    })

    return sum
  }

  const [itemsCarrito, setItemsCarrito] = useState(JSON.parse(localStorage.getItem('products')))

  //useEffect(() => {
  //setItemsCarrito(JSON.parse(localStorage.getItem('products')))
  //}, [JSON.parse(localStorage.getItem('products'))])

  return (
    <div style={style}>
      {itemsCarrito === null ? <h2>No hay nada</h2> : itemsCarrito.map(item => {
        return (
          <ShowItemsCarrito item={item} key={item.id} />
        )
      })}
      <TotalCarrito total={calcularTotal(dishes, itemsCarrito)} />
      <a href="#" className="link_menu"><button className="seguir_comprando">CONTINUAR COMPRANDO</button></a>
    </div>
  )
}
