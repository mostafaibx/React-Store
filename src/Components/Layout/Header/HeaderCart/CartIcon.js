import { useContext, useEffect, useState } from "react";
import classes from "./CartIcon.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHeart } from "@fortawesome/free-solid-svg-icons";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import CartContext from "../../../../Store/CartContext";
import FavoritContext from "../../../../Store/FavoritContext";

function CartIcon() {
  const cartCtx = useContext(CartContext);
  const favCtx = useContext(FavoritContext);
  const [cartIsHighlighted, setCartIsHighlighted] = useState(false);
  const [favIsHighlighted, setFavIsHighlighted] = useState(false);
  const { items } = cartCtx;

  //Creating a variable for classes
  const btnClasses = `${classes["cart-icon"]} ${
    cartIsHighlighted ? classes.bump : ""
  }`;

  //Useing effect & state hooks to change the class every time the dependency(items in the cart context) change.
  useEffect(() => {
    if (items.length === 0) {
      return;
    }
    setCartIsHighlighted(true);

    const timer = setTimeout(() => {
      setCartIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [items]);

  const favClasses = `${classes["cart-icon"]} ${
    favIsHighlighted ? classes.bump : ""
  }`;
  useEffect(() => {
    if (favCtx.items.length === 0) {
      return;
    }
    setFavIsHighlighted(true);

    const timer = setTimeout(() => {
      setFavIsHighlighted(false);
    }, 300);

    return () => {
      clearTimeout(timer);
    };
  }, [favCtx.items]);

  const numberOfCartItems = items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  return (
    <div className={classes["icon-container"]}>
      <div className={btnClasses} onClick={cartCtx.showCartHandler}>
        <FontAwesomeIcon
          className={classes.icon}
          icon={faCartShopping}
          size="xl"
        />
        <p> {numberOfCartItems}</p>
      </div>
      <div className={favClasses} onClick={favCtx.showFavHandler}>
        <FontAwesomeIcon icon={faHeart} className={classes.icon} size="xl" />
        <p> {favCtx.items.length}</p>
      </div>
    </div>
  );
}

export default CartIcon;
