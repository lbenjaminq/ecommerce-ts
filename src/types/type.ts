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

export type CartItem = {
  id?:number;
  title:string;
  image?:string;
  price:string;
  amount:number;
}

export type CartActionReducer = {
  payload:any;
  action: 'ADD' | 'REMOVE' | 'REMOVE_ALL' | 'CLEAR'
}

export type CartContextType = {
  cartItems: CartItem[],
  dispatch: React.Dispatch<CartActionReducer>
}

