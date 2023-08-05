import { Fragment, useContext } from "react";
import classes from "./CartItem.module.css";
import CartContext from "../../Store/CartContext";

function CartItem(props) {
  const cartCtx = useContext(CartContext);

  function addToCartHandler(item) {
    cartCtx.addtoCart({ ...item, amount: 1 });
  }

  return (
    <Fragment>
      {cartCtx.items.map((item) => (
        <li className={classes["cart-item"]}>
          <div>
            <h2>{item.title}</h2>
            <div className={classes.summary}>
              <span className={classes.price}>${item.price}</span>
              <span className={classes.amount}>x {item.amount}</span>
            </div>
          </div>
          <div className={classes.actions}>
            <button onClick={cartCtx.removeFromCart.bind(null, item.id)}>
              −
            </button>
            <button onClick={addToCartHandler.bind(null, item)}>+</button>
          </div>
        </li>
      ))}
    </Fragment>
  );
}

export default CartItem;
