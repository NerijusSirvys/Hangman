import React from "react";
import { useSelector } from "react-redux";
import { AppState } from "../store/configStore";

export const Header = () => {
  const userName = useSelector((state: AppState) => state.player.userName);

  return (
    <nav className="navigation">
      <p className="username">{userName}</p>
      <div className="links">
        <p className="hover link">Leader Board</p>
        <p className="hover link">Log out</p>
      </div>
    </nav>
  );
};
