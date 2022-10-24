import React, { useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { getPriceTotal, getProductTotal } from '../../helpers/calculate'
import style from './index.module.css'

export const OrderSummary = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div className={style.container}>
      <div className={style.order}>
        <h2>Resumen Order</h2>
        <span>{getProductTotal(cartItems)} productos</span>
      </div>
      <ul className={style.listProducts}>
        { cartItems?.map((item)=> (
          <li key={item.id} className={style.itemProduct}>
            <div>
              <h4>{item.title}</h4>
              <span>Cantidad: {item.amount}</span>
            </div>
            <span>${item.price}</span>
          </li>
        )) }
      </ul>
      <div className={style.totalProduct}>
        <h4>TOTAL (USD)</h4>
        <strong>${getPriceTotal(cartItems).toFixed(2)}</strong>
      </div>
    </div>
  )
}
