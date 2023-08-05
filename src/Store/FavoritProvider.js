import FavoritContext from "./FavoritContext";
import { useState, useReducer } from "react";

const defObj = {
  items: [],
  totalAmount: 0,
  isAdded: false,
};

function favReducer(state, action) {
  let updatedItems;
  let updatedTotalAmount;
  if (action.type === "ADD") {
    const existedItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );
    const existedItem = state.items[existedItemIndex];
    updatedTotalAmount = state.items.length;

    if (existedItem) {
      return { items: state.items, totalAmount: updatedTotalAmount };
    } else {
      updatedItems = state.items.concat(action.item);
      updatedTotalAmount = state.items.length;
      return {
        items: updatedItems,
        totalAmount: updatedTotalAmount,
        isAdded: true,
      };
    }
  }
  if (action.type === "REMOVE") {
    updatedItems = state.items.filter((item) => item.id !== action.id);

    return {
      items: updatedItems,
      totalAmount: updatedTotalAmount,
      isAdded: false,
    };
  }
}

function FavoritProvider(props) {
  const [favState, dispatchFav] = useReducer(favReducer, defObj);
  function addToFavHandler(item) {
    dispatchFav({ type: "ADD", item: item });
  }

  function removeFromFavHandler(id) {
    dispatchFav({ type: "REMOVE", id: id });
  }

  const [showFav, setShowFav] = useState(false);
  function showFavHandler() {
    setShowFav(true);
  }
  function hideFavHandler() {
    setShowFav(false);
  }

  const favContext = {
    showFav: showFav,
    showFavHandler: showFavHandler,
    hideFavHandler: hideFavHandler,
    addtoFav: addToFavHandler,
    RemoveFromFav: removeFromFavHandler,
    items: favState.items,
    totalAmount: favState.totalAmount,
    isAdded: favState.isAdded,
  };

  return (
    <FavoritContext.Provider value={favContext}>
      {props.children}
    </FavoritContext.Provider>
  );
}

export default FavoritProvider;
