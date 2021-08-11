import { useSelector } from "react-redux";
import { RootState } from "../app/store";

const Header: React.FC = () => {
  const username = useSelector((state: RootState) => state.player.userName);

  return (
    <header className="header">
      <p className="username">{username}</p>
      <nav className="links">
        <p className="hover link">Leader Board</p>
        <p className="hover link">Log out</p>
      </nav>
    </header>
  );
};

export { Header };
