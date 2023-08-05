import classes from "./Login.module.css";
import Modal from "../UI/Modal";
import Input from "./Input";
import { Fragment, useContext, useState } from "react";
import LoginContext from "../../Store/LoginContext";

function Login() {
  const loginCtx = useContext(LoginContext);

  return (
    <Fragment>
      {loginCtx.loginState && (
        <Modal clsoeLogin={loginCtx.hideLoginH}>
          <div className={classes.login}>
            <h1>Log In</h1>
            <p>Please Enter your login details</p>
            <form className={classes.form} onSubmit={loginCtx.loginHandler}>
              <Input
                name={"User name: "}
                id={"email"}
                onChange={loginCtx.nameHandler}
              ></Input>
              <Input
                name={"Password: "}
                id={"pw"}
                onChange={loginCtx.passwordHandler}
              ></Input>
              <div className={classes.actions}>
                <button className={classes["login-btn"]}>Log In...</button>
                <button className={classes.close} onClick={loginCtx.hideLoginH}>
                  close
                </button>
              </div>
            </form>
          </div>
        </Modal>
      )}
    </Fragment>
  );
}

export default Login;
