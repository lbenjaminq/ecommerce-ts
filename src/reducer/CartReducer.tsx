import { CartActionReducer, CartItem } from "../types/type";

export const CartReducer = (state: CartItem[], action: CartActionReducer) => {
  switch (action.type) {
    case "ADD":
      const findProduct = state.find((item) => item.id === action.payload.id);
      if (findProduct) {
        return state.map((item) => {
          if (item.id === action.payload.id) {
            return {
              ...item,
              amount: item.amount + 1,
            };
          }
          return item
        });
      } else {
        const { id, title, image, price } = action.payload;
        return [...state, { id, title, image, price, amount: 1 }];
      }
      // [ITEM1,ITEM2,ITEM3]
    case "REMOVE":
        const filterProduct = state.reduce((acc,item)=>{
          if(item.id===action.payload){
            if(item.amount <= 1) return acc
            else return [...acc,{...item,amount:item.amount -1}]
          }else{
            return [...acc,item]
          }
        },[] as CartItem[])
        return filterProduct
    case "REMOVE_ALL":
      return state.filter((item)=> item.id !== action.payload);
    case "CLEAR":
      return [];
    default:
      return state;
  }
};

// [{
//   id?:number;
//   title:"string";
//   image?:string;
//   price:string;
//   amount:number;
// },
// {
//   id?:number;
//   title:string;
//   image?:string;
//   price:string;
//   amount:number;
// }]
