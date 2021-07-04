import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";

export const Header = () => {
  const userName = useSelector((state: AppState) => state.player.userName);

  return (
    <nav className="navigation">
      <p className="username">{userName}</p>
      <div className="links">
        <p>Leader Board</p>
        <p>Log out</p>
      </div>
    </nav>
  );
};
