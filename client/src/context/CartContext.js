import {createContext} from 'react';

const CartContext = createContext({
  totalQuantity: 0,
  totalPrice: 0,
  products: {}
});

export default CartContext;
