import classes from "./UserDetails.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightToBracket } from "@fortawesome/free-solid-svg-icons";
import { useContext } from "react";
import LoginContext from "../../../Store/LoginContext";

function UserDetails() {
  const loginCtx = useContext(LoginContext);
  const username = localStorage.getItem("isLoggedIn");

  return (
    <div className={classes["user-name"]}>
      <p>Welcome {username}</p>
      <div className={classes.logout} onClick={loginCtx.logoutHandler}>
        <FontAwesomeIcon icon={faArrowRightToBracket} size="xl" />
      </div>
    </div>
  );
}

export default UserDetails;
