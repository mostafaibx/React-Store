import React from "react";

const FavoritContext = React.createContext({
  showFav: false,
  showFavHandler: () => {},
  hideFavHandler: () => {},
  addtoFav: (item) => {},
  RemoveFromFav: (id) => {},
  items: [],
  totalAmount: 0,
  isAdded: false,
});

export default FavoritContext;
