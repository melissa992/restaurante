import React, { useEffect, useState } from "react"
import CarritoStyles from './Carrito-page.module.css'
import ShowItemsCarrito from './ShowItemsCarrito'
import TotalCarrito from './TotalCarrito'
import { dishes } from "../../assets/data/dishesList"
import { Link } from "react-router-dom"

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
  const [totalAPagar, setTotalAPagar] = useState(calcularTotal(dishes, itemsCarrito))
  console.log(totalAPagar)

  //useEffect(() => {
  //setItemsCarrito(JSON.parse(localStorage.getItem('products')))
  //}, [JSON.parse(localStorage.getItem('products'))])

  return (
    <div style={style} className={CarritoStyles.container}>
      <h1>Carrito de compra</h1>
      <div class="items">
        {itemsCarrito === null || itemsCarrito.length === 0 ? <h2 className={CarritoStyles.no_items}>No tienes ningún elemento en el carrito</h2> : itemsCarrito.map(item => {
          return (
            <ShowItemsCarrito item={item} key={item.id} setTotalAPagar={setTotalAPagar} calcularTotal={calcularTotal} />
          )
        })}
      </div>
      <TotalCarrito total={itemsCarrito === null ? 0 : totalAPagar} />
      <Link to="/menu" className="link_menu"><button className={CarritoStyles.seguir_comprando}>CONTINUAR COMPRANDO</button></Link>
    </div>
  )
}
