import { useSelector } from "react-redux";
import { engine } from "../../app/services/engine";
import { RootState } from "../../app/store";

const handleClick = () => {
  engine.logOutPlayer();
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
