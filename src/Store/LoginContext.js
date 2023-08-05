import React from "react";

const LoginContext = React.createContext({
  isLoggedIn: false,
  loginState: false,
  showLoginH: () => {},
  hideLoginH: () => {},
  loginHandler: () => {},
  logoutHandler: () => {},
  nameHandler: () => {},
  passwordHandler: () => {},
  user: {},
});

export default LoginContext;
