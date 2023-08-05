import { Fragment, useContext } from "react";
import Modal from "../UI/Modal";
import classes from "./Favorit.module.css";
import FavoritContext from "../../Store/FavoritContext";
import FavoriteItem from "./FavoriteItem";

function Favorit() {
  const favCtx = useContext(FavoritContext);
  return (
    <Fragment>
      {favCtx.showFav && (
        <Modal>
          <h2>You have {favCtx.items.length} item in your Favorit</h2>
          <div className={classes["fav-items"]}>
            <ul>
              <FavoriteItem />
            </ul>
          </div>
          <div className={classes.actions}>
            <button
              className={classes["close-btn"]}
              onClick={favCtx.hideFavHandler}
            >
              Back to shop
            </button>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default Favorit;
