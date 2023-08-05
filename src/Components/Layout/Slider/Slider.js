import classes from "./Slider.module.css";
import SliderCard from "./SliderCard";

function Slider() {
  return (
    <div className={classes.slider}>
      <SliderCard></SliderCard>
    </div>
  );
}

export default Slider;
