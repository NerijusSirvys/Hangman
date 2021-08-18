import { useSelector } from "react-redux";
import { RouteComponentProps, useHistory } from "react-router-dom";
import { userSession } from "../../app/services/userSession";
import { session_logout } from "../../app/state/sessionSlice";
import store, { RootState } from "../../app/store";
import "./styles.css";

const handleClick = (routeHistory: RouteComponentProps["history"]) => {
  userSession.removeToken();
  store.dispatch(session_logout());
  routeHistory.push("/");
};

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.player.userName);
  const history = useHistory();

  return (
    <header className="header">
      <p className="username">{username}</p>
      <ul className="links">
        <li>
          <p className="hover link">Leader Board</p>
        </li>
        <li>
          <p className="hover" onClick={() => handleClick(history)}>
            Log out
          </p>
        </li>
      </ul>
    </header>
  );
};

export { Header };
