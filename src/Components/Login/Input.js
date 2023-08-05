import classes from "./Input.module.css";

function Input(props) {
  return (
    <div className={classes.input}>
      <label htmlFor={props.id}>{props.name} </label>
      <input id={props.id} onChange={props.onChange}></input>
    </div>
  );
}

export default Input;
