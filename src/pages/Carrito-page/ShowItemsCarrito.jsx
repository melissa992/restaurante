import React, { useState } from 'react'
import image1 from "../../assets/img/menu1@2x.png"
import { dishes } from "../../assets/data/dishesList"

const itemsCarrito = JSON.parse(localStorage.getItem('products'))

const ShowItemsCarrito = (props) => {

  const { item } = props

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
    if (itemsCarrito.length === 0 || itemsCarrito === undefined) {
      localStorage.clear()
    } else {
      localStorage.setItem('products', JSON.stringify(itemsCarrito.filter(x => x.id !== item.id)))
    }
  }

  const editItem = () => {
    const newList = itemsCarrito?.map(x => x.id == item.id ? { ...x, quantity: inputValue } : x)
    localStorage.setItem('products', JSON.stringify(newList))
  }

  return (
    <div className="plateItem">

      <img src={image1} width="250" alt="" />
      <h3 className="title_name">{plato.nombre}</h3>
      <h3>${plato.precio}</h3>
      <button className="borrar" onClick={deleteItem}><i className="fa fa-trash" aria-hidden="true"></i></button>
      <button className="editar" onClick={editItem}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <p>{plato.descripcion}</p>
      <button className="less" onClick={reduceQuantity}>-</button>
      <input type="number" min="1" className="quantity" value={inputValue} onChange={handleInputChange} />
      <button className="plus" onClick={addQuantity}>+</button>

    </div>
  )
}

export default ShowItemsCarrito
