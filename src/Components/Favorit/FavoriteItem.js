import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { Fragment, useContext } from "react";
import classes from "./FavoriteItem.module.css";
import FavoritContext from "../../Store/FavoritContext";
import CartContext from "../../Store/CartContext";

function FavoriteItem() {
  const favCtx = useContext(FavoritContext);
  const cartCtx = useContext(CartContext);

  function addtoCartHandler(item) {
    cartCtx.addtoCart(item);
  }

  function removeFromFavHandler(id) {
    favCtx.RemoveFromFav(id);
  }

  return (
    <Fragment>
      {favCtx.items.map((item) => (
        <li className={classes["fav-item"]}>
          <div>
            <h2>{item.title}</h2>
            <div className={classes.summary}>
              <span className={classes.amount}>{item.desc} </span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={addtoCartHandler.bind(null, item)}>
              <FontAwesomeIcon icon={faCartShopping} size="xl" />
            </button>
            <button onClick={removeFromFavHandler.bind(null, item.id)}>
              -
            </button>
          </div>
        </li>
      ))}
    </Fragment>
  );
}

export default FavoriteItem;
