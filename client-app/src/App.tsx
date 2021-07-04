import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { Header } from "./components/Header";
import { Level } from "./components/Level";
import { SideBar } from "./components/SideBar";
import axios from "axios";
import { loadPlayer } from "./actions/playerActions";

const getPlayerUrl = "https://localhost:5001/api/game/player";

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get(getPlayerUrl)
      .then((response) => dispatch(loadPlayer(response.data)));
  }, []);

  return (
    <div className="main">
      <Header />
      <div className="main-grid">
        <main>
          <Level />
        </main>
        <SideBar />
      </div>
    </div>
  );
}

export default App;
