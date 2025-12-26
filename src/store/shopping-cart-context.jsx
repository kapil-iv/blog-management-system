import {createContext} from 'react';

const CartContext = createContext({
  items: [],
  addItemToCart: () => {},
  updateItemQuantity: () => {},
})

export {CartContext};