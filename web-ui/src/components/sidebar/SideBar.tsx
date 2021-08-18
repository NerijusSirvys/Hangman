import React from "react";
import { HangmanImage } from "./hangman/HangmanImage";
import { Statistics } from "./statistics/Statistics";
import "./styles.css";

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Statistics />
      <HangmanImage />
    </aside>
  );
};

export { SideBar };
