import LoginContext from "./LoginContext";
import { useState, useReducer, useEffect } from "react";
const defUser = {
  name: "",
  password: "",
};

function userReducer(state, action) {
  let updatedName;
  let updatedPassword;
  if (action.type === "NAME") {
    updatedName = action.val;
    updatedPassword = state.password;
  }
  if (action.type === "PW") {
    updatedPassword = action.val;
    updatedName = state.name;
  }
  return {
    name: updatedName,
    password: updatedPassword,
  };
}
function LoginProvider(props) {
  const [showLogin, setShowLogin] = useState(false);
  const [isLoggedIn, setIsLoggeIn] = useState(false);

  const [userState, dispatchUser] = useReducer(userReducer, defUser);

  useEffect(() => {
    const storedLoggin = localStorage.getItem("isLoggedIn");

    if (storedLoggin) {
      setIsLoggeIn(true);
    }
  }, []);

  function showLoginHandler() {
    setShowLogin(true);
  }
  function hideLoginHandler(event) {
    event.preventDefault();
    setShowLogin(false);
  }

  function nameHandler(event) {
    dispatchUser({ type: "NAME", val: event.target.value });
  }
  function passwordHandler(event) {
    dispatchUser({ type: "PW", val: event.target.value });
  }
  let error = {};
  function loginHandler(event) {
    event.preventDefault();
    if (userState.name.trim().length === 0 || userState.password.length < 8) {
      error = {
        header: "Invalid Login",
        content: "Please enter valid username & password",
      };
    } else {
      setIsLoggeIn(true);
      setShowLogin(false);
      localStorage.setItem("isLoggedIn", userState.name);
      return userState;
    }
  }

  function logoutHandler() {
    localStorage.removeItem("isLoggedIn");
    setIsLoggeIn(false);
  }

  const loginContext = {
    isLoggedIn: isLoggedIn,
    loginState: showLogin,
    loginHandler: loginHandler,
    logoutHandler: logoutHandler,
    showLoginH: showLoginHandler,
    hideLoginH: hideLoginHandler,
    nameHandler: nameHandler,
    passwordHandler: passwordHandler,
    user: userState,
  };
  return (
    <LoginContext.Provider value={loginContext}>
      {props.children}
    </LoginContext.Provider>
  );
}

export default LoginProvider;
