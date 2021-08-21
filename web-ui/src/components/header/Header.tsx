import { useSelector } from "react-redux";
import { history } from "../..";
import { userSession } from "../../app/services/userSession";
import { session_logout } from "../../app/state/sessionSlice";
import store, { RootState } from "../../app/store";

const handleClick = () => {
  userSession.removeToken();
  store.dispatch(session_logout());
  history.push("/");
};

export const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.player.userName);

  return (
    <header className="header">
      <p className="username">{username}</p>
      <div className="links">
        <p className="button ">Leader Board</p>
        <p className="button " onClick={handleClick}>
          Log out
        </p>
      </div>
    </header>
  );
};
