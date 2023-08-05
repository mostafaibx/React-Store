import classes from "./HeaderMenu.module.css";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

function HeaderMenu() {
  const [showMenu, setShowMenu] = useState(false);
  function menueHandler() {
    setShowMenu(true);
  }

  return (
    <div className={classes.menu}>
      <div onClick={menueHandler}>
        <FontAwesomeIcon className={classes.icon} icon={faBars} size="2xl" />
      </div>
      {showMenu && (
        <div className={classes.list}>
          <ul>
            <li>
              <a>Home</a>
            </li>
            <li>
              <a>Products</a>
            </li>
            <li>
              <a>About</a>
            </li>
            <li>
              <a>Contact Us</a>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default HeaderMenu;
