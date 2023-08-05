import { useContext } from "react";
import classes from "./PriceCard.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { faHeartCirclePlus } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../Store/CartContext";
import FavoritContext from "../../Store/FavoritContext";
import LoginContext from "../../Store/LoginContext";

function PriceCard(props) {
  const cartCtx = useContext(CartContext);
  const LoginCtx = useContext(LoginContext);
  const favCtx = useContext(FavoritContext);

  function addToCartHandler() {
    if (LoginCtx.isLoggedIn) {
      props.addtoCart();
    } else {
      LoginCtx.showLoginH();
    }
  }

  function removeFromFavHandler(id) {
    favCtx.RemoveFromFav(id);
  }

  return (
    <div className={classes["price-card"]}>
      <p>${props.price}</p>

      <div className={classes.actions}>
        <button type="submit" onClick={addToCartHandler}>
          To Cart
        </button>
        {!favCtx.isAdded ? (
          <button type="submit" onClick={props.addtoFav}>
            <FontAwesomeIcon icon={faHeart} size="2xl" />
          </button>
        ) : (
          <button
            type="submit"
            onClick={removeFromFavHandler.bind(null, props.id)}
          >
            <FontAwesomeIcon icon={faHeartCirclePlus} size="2xl" />
          </button>
        )}
      </div>
    </div>
  );
}

export default PriceCard;
