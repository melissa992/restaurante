import React, { useState } from "react"
import CarritoStyles from './Carrito-page.module.css'
import ShowItemsCarrito from './ShowItemsCarrito'
import TotalCarrito from './TotalCarrito'
import { dishes } from "../../assets/data/dishesList"
import { Link } from "react-router-dom"

export const CarritoPage = () => {
  const style = {
    paddingTop: '.5rem'
  }

  const [itemsCarrito, setItemsCarrito] = useState(JSON.parse(localStorage.getItem('products')))
  const [totalAPagar, setTotalAPagar] = useState(0)

  const showTotal = total => {
    setTotalAPagar(total)
  }

  const displayItemsCarrito = items => {
    setItemsCarrito(items)
  }

  return (
    <div style={style} className={CarritoStyles.container}>
      <h1>Carrito de compra</h1>
      <div class="items">
        {itemsCarrito === null || itemsCarrito.length === 0 ? <h2 className={CarritoStyles.no_items}>No tienes ningún elemento en el carrito</h2> : itemsCarrito.map(item => {
          return (
            <ShowItemsCarrito item={item} key={item.id} showTotal={showTotal} displayItemsCarrito={displayItemsCarrito} />
          )
        })}
      </div>
      <TotalCarrito totalAPagar={itemsCarrito === null || itemsCarrito.length === 0 ? 0 : totalAPagar} />
      <Link to="/menu" className="link_menu"><button className={CarritoStyles.seguir_comprando}>CONTINUAR COMPRANDO</button></Link>
    </div>
  )
}
