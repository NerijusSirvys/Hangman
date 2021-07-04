import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Header } from "./components/Header";
import { GameBoard } from "./components/GameBoard";
import { SideBar } from "./components/SideBar";
import axios from "axios";
import { loadPlayer } from "./actions/playerActions";
import { Player } from "./types/interfaces/Player";

const getPlayerUrl = "https://localhost:5001/api/game/player";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get<Player>(getPlayerUrl)
      .then((response) => dispatch(loadPlayer(response.data)));
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="main-grid">
        <main>
          <GameBoard />
        </main>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
