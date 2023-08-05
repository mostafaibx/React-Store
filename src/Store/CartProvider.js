import CartContext from "./CartContext";
import { useState, useReducer } from "react";

const defObj = {
  items: [],
  totalPrice: 0,
  totalAmount: 0,
};

function cartReducer(state, action) {
  let updatedItems;
  let updatedTotalPrice;
  if (action.type === "ADD") {
    updatedTotalPrice = state.totalPrice + action.item.price;
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existingCartItem = state.items[existingCartItemIndex];
    if (existingCartItem) {
      let updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }
  }
  if (action.type === "REMOVE") {
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );
    const existedItem = state.items[existedItemIndex];
    updatedTotalPrice = state.totalPrice - existedItem.price;
    if (existedItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = { ...existedItem, amount: existedItem.amount - 1 };
      updatedItems = [...state.items];
      updatedItems[existedItemIndex] = updatedItem;
    }
  }
  return {
    items: updatedItems,
    totalPrice: updatedTotalPrice,
  };
}

function CartProvider(props) {
  const [showCart, setShowCart] = useState(false);
  const [cartState, dispatchCart] = useReducer(cartReducer, defObj);

  function showCartHandler() {
    setShowCart(true);
  }
  function hideCartHandler(event) {
    event.preventDefault();
    setShowCart(false);
  }
  function AddtoCartHandler(item) {
    dispatchCart({ type: "ADD", item: item });
  }

  function removeFromCartHandler(id) {
    dispatchCart({ type: "REMOVE", id: id });
  }

  const cartContext = {
    cartState: showCart,
    showCartHandler: showCartHandler,
    hideCartHandler: hideCartHandler,
    addtoCart: AddtoCartHandler,
    removeFromCart: removeFromCartHandler,
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    totalAmount: cartState.totalAmount,
  };
  console.log(cartState.items);
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
}

export default CartProvider;
