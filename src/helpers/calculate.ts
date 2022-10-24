import { CartItem } from "../types/type";

export const getPriceTotal = (cartItem:CartItem[]):number => {
  return cartItem.reduce((acc:number,item:CartItem)=> {
    return acc + (item.price * item.amount)
  },0)
}

export const getProductTotal = (cartItem:CartItem[]):number => {
  return cartItem.reduce((acc:number,item:CartItem)=>{
    return acc + item.amount
  },0)
}