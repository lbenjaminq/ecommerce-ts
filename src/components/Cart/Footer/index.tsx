import React, { useContext } from 'react'
import { CartContext } from '../../../context/CartContext'
import { getPriceTotal } from '../../../helpers/calculate'
import style from './index.module.css'

export const Footer = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div className={style.container}>
      <span>TOTAL</span>
      <span>${getPriceTotal(cartItems).toFixed(2)}</span>
    </div>
  )
}
