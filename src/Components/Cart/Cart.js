import { Fragment, useContext } from "react";
import classes from "./Cart.module.css";
import Modal from "../UI/Modal";
import CartItem from "./CartItem";
import CartContext from "../../Store/CartContext";

function Cart() {
  const cartCtx = useContext(CartContext);

  return (
    <Fragment>
      {cartCtx.cartState && (
        <Modal closeCart={cartCtx.hideCartHandler}>
          <ul className={classes["cart-items"]}>
            <CartItem />
          </ul>
          <div className={classes.total}>
            <span>Total Amount</span>
            <span>${cartCtx.totalPrice}</span>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["close-btn"]}
              onClick={cartCtx.hideCartHandler}
            >
              Close
            </button>
            <button className={classes.button}>Order</button>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default Cart;
