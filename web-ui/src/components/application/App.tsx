import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { routes } from "../../app/routes/routes";
import { RootState } from "../../app/store";
import { LoginForm } from "../forms/LoginForm";
import { RegistrationForm } from "../forms/RegistrationForm";
import { GameBoard } from "../gameboard/GameBoard";
import { HomePage } from "../home/HomePage";
import { Message, MessageType } from "../messages/Message";
import { ProcessLevelComplete } from "./ProcessCompleteLevel.logic";
import { RelogPlayer } from "./RelogPlayer.logic";
import "./styles.css";

function App() {
  const isLevelComplete = useSelector((state: RootState) => state.level.isComplete);
  const isLogedIn = useSelector((state: RootState) => state.session.isLogedIn);

  // handle player re-log and level loading when browser is refreshed
  useEffect(() => {
    if (isLogedIn) {
      RelogPlayer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLevelComplete) {
      ProcessLevelComplete();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelComplete]);

  return (
    <main className="game-board">
      <Switch>
        <Route exact path={routes.homePage} component={HomePage} />
        <Route path={routes.register} component={RegistrationForm} />
        <Route path={routes.login} component={LoginForm} />
        {isLogedIn ? (
          <Route path={routes.gameBoard} component={GameBoard} />
        ) : (
          <Message type={MessageType.Unauthorized} />
        )}
      </Switch>
    </main>
  );
}

export default App;
