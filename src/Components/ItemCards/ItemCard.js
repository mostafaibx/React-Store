import { useState, useContext } from "react";
import classes from "./ItemCard.module.css";
import imgUrl from "../../assests/item-5.jpg";
import PriceCard from "./PriceCard";
import CartContext from "../../Store/CartContext";
import FavoritContext from "../../Store/FavoritContext";

function ItemCard(props) {
  const cartCtx = useContext(CartContext);
  const favCtx = useContext(FavoritContext);
  const [showPrice, setShowPrice] = useState(false);
  function showPriceHandler() {
    setShowPrice(true);
  }
  function hidePriceHandler() {
    setShowPrice(false);
  }
  function addtoFavHandler() {
    favCtx.addtoFav({
      id: props.id,
      title: props.title,
      price: +props.price,
      amount: 1,
    });
  }
  function addToCartHandler() {
    cartCtx.addtoCart({
      id: props.id,
      title: props.title,
      price: +props.price,
      amount: 1,
    });
  }

  return (
    <div
      onMouseEnter={showPriceHandler}
      onMouseLeave={hidePriceHandler}
      className={classes["item-card"]}
    >
      <div className={classes["item-image"]}>
        <img src="../../assests/item-10.jpg" alt="Item Image"></img>
      </div>
      <div className={classes["card-text"]}>
        <h2>{props.title}</h2>
        <p>{props.desc}</p>

        {showPrice && (
          <PriceCard
            price={props.price}
            id={props.id}
            addtoCart={addToCartHandler}
            addtoFav={addtoFavHandler}
          />
        )}
      </div>
    </div>
  );
}

export default ItemCard;
