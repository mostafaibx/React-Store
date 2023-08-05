import { useContext } from "react";
import classes from "./Header.module.css";
import HeaderMenu from "./HeaderMenu/HeaderMenu";
import CartIcon from "./HeaderCart/CartIcon";
import LoginContext from "../../../Store/LoginContext";
import UserDetails from "../../Login/UserDetails/UserDetails";

function Header() {
  //Import Login Context to show login or header icon conditionally based on isLoggedIn value
  const loginCtx = useContext(LoginContext);

  return (
    <header className={classes.header}>
      <HeaderMenu />
      <div>LOGO</div>
      {!loginCtx.isLoggedIn ? (
        <p onClick={loginCtx.showLoginH}>Login</p>
      ) : (
        <div className={classes.right}>
          <CartIcon />
          <UserDetails />
        </div>
      )}
    </header>
  );
}

export default Header;
