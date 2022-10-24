import React,{ useContext } from 'react'
import { CartContext } from '../../context/CartContext'
import { Item } from './Item'

const Cart = () => {

  const { cartItems } = useContext(CartContext)

  return (
    <div>
      {
        cartItems?.map((product)=>(
          <Item item={product} />
        ))
      }
    </div>
  )
}

export default Cart