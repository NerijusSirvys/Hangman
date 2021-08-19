import { useSelector } from "react-redux";
import { history } from "../..";
import { userSession } from "../../app/services/userSession";
import { session_logout } from "../../app/state/sessionSlice";
import store, { RootState } from "../../app/store";
import "./styles.css";

const handleClick = () => {
  userSession.removeToken();
  store.dispatch(session_logout());
  history.push("/");
};

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.player.userName);

  return (
    <header className="header">
      <p className="username">{username}</p>
      <div className="links">
        <p className="button link">Leader Board</p>
        <p className="button link" onClick={handleClick}>
          Log out
        </p>
      </div>
    </header>
  );
};

export { Header };
