export type Data = {
  products: DataItem[];
  isLoading: boolean;
  isError: boolean;
};

export interface DataItem {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image:string;
}

//Esto es lo que se va a mostrar en el carrito
//This is what will be displayed in the cart 
export type CartItem = {
  id?:number;
  title:string;
  image?:string;
  price:number;
  amount:number;
}

//Este es el type de los argumentos que recibe el reducer
//This is the type of the arguments that receives the reducer
export type CartActionReducer = {
  payload:any;
  type: 'ADD' | 'REMOVE' | 'REMOVE_ALL' | 'CLEAR'
}

//Este es el type del Context, el contexto provee un array de los productos que se agregan al carrito y la funcion del dispatch para cambiar el stado
//This is the type of the context, he context provides an array of the products that are added to the cart and the dispatch function to change the state
export type CartContextType = {
  cartItems: CartItem[],
  dispatch: React.Dispatch<CartActionReducer>
}

export type Customer = {
  name: string;
  lastName: string;
  email: string;
  address: string;
}


export type Order = {
  customer: Customer,
  order_details : CartItem[]
}