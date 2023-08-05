import React from "react";

const CartContext = React.createContext({
  cartState: false,
  showCartHandler: () => {},
  hideCartHandler: () => {},
  addtoCart: (item) => {},
  removeFromCart: (id) => {},
  items: [],
  totalPrice: 0,
});

export default CartContext;
