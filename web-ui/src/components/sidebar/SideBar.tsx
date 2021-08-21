import React from "react";
import { HangmanImage } from "./hangman/HangmanImage";
import { Statistics } from "./statistics/Statistics";

export const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Statistics />
      <HangmanImage />
    </aside>
  );
};
