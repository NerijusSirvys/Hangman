import React from "react";
import { HangmanImage } from "./HangmanImage";
import { Statistics } from "./Statistics";

const SideBar: React.FC = () => {
  return (
    <aside className="sidebar">
      <Statistics />
      <HangmanImage />
    </aside>
  );
};

export { SideBar };
