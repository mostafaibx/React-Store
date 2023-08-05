import classes from "./SliderCard.module.css";
import DummyImage from "../../../assests/c919b5c574149cb1ad6062df0bd350dd.jpg";

function SliderCard() {
  return (
    <div className={classes.card}>
      <div className={classes.text}>
        <h1>/Vans at best prices</h1>
        <p>Order Now and get 30% discount on selected items</p>
      </div>
      <div className={classes.image}>
        <img src={DummyImage}></img>
      </div>
    </div>
  );
}

export default SliderCard;
