import React, { useEffect, useState } from 'react'
import image1 from "../../assets/img/menu1@2x.png"
import CarritoStyles from './Carrito-page.module.css'


const ShowItemsCarrito = (props) => {

  const [info, setInfo] = useState([]);
  const { item, showTotal, displayItemsCarrito } = props;
  const [inputValue, setInputValue] = useState(item.quantity);
  const plato = info.find(x => x.id === item.id);

  useEffect(() => {
    fetchData();
  },[]);


  const fetchData = async()=>{
    let url = 'https://backendapicrud.herokuapp.com/api/platos/ver-platos';
    await fetch(url)
      .then(res => res.json())
      .then(data => {
        setInfo(data.info);
      })
      .catch( () => {})
  }


  const calcularTotal = (info, tmpitems) => {
    let sum = 0

    info.forEach(plate => {
      tmpitems.forEach(tmpitem => {
        sum = plate.id === tmpitem.id ? sum + tmpitem.quantity * plate?.price : sum
      })
    })

    return sum
  }


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
    displayItemsCarrito(JSON.parse(localStorage.getItem('products')))
    showTotal(calcularTotal(info, JSON.parse(localStorage.getItem('products'))))
  }

  const editItem = () => {
    const tmpItemsCarrito = JSON.parse(localStorage.getItem('products'))
    localStorage.setItem('products', JSON.stringify(tmpItemsCarrito.map(x => x.id === item.id ? { ...x, quantity: inputValue } : x)))
    showTotal(calcularTotal(info, JSON.parse(localStorage.getItem('products'))))
  }

  useEffect(() => showTotal(calcularTotal(info, JSON.parse(localStorage.getItem('products')))), [])

  return (
    <div className={CarritoStyles.plateItem}>

      <img className={CarritoStyles.plate_img} src={image1} width="250" alt="" />
      <h3 className={CarritoStyles.title_name}>{plato?.name}</h3>
      <h3 className={CarritoStyles.plate_price}>${plato?.price}</h3>
      <button className={CarritoStyles.borrar} onClick={deleteItem}><i className="fa fa-trash" aria-hidden="true"></i></button>
      <button className={CarritoStyles.editar} onClick={editItem}><i className="fa fa-pencil-square-o" aria-hidden="true"></i></button>
      <p className={CarritoStyles.plate_description}>{plato?.description}</p>
      <button className={CarritoStyles.less} onClick={reduceQuantity}>-</button>
      <input type="number" min="1" className={CarritoStyles.quantity} value={inputValue} onChange={handleInputChange} />
      <button className={CarritoStyles.plus} onClick={addQuantity}>+</button>
    </div>
  )
}

export default ShowItemsCarrito
