import { useEffect } from "react";
import { useSelector } from "react-redux";
import { Route, Switch } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { routes } from "../../app/routes/routes";
import { RootState } from "../../app/store";
import { LoginForm } from "../forms/LoginForm";
import { RegistrationForm } from "../forms/RegistrationForm";
import { GameBoard } from "../gameboard/GameBoard";
import { HomePage } from "../home/HomePage";
import "react-toastify/dist/ReactToastify.minimal.css";
import { NotFound } from "../errors/NotFound";
import { ServerError } from "../errors/ServerError";
import { Unauthorized } from "../errors/Unauthorized";
import { engine } from "../../app/services/engine";

function App() {
  const isLevelComplete = useSelector((state: RootState) => state.level.isComplete);
  const isLogedIn = useSelector((state: RootState) => state.session.isLogedIn);
  const isErrorSet = useSelector((state: RootState) => state.error.isSet);

  // handle player re-log and level loading when browser is refreshed
  useEffect(() => {
    if (isLogedIn) {
      engine.returnPlayer();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (isLevelComplete) {
      engine.processLevelCompletion();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelComplete]);

  return (
    <>
      <ToastContainer position="top-center" autoClose={1500} hideProgressBar />
      <main className="game-board">
        <Switch>
          <Route exact path={routes.homePage} component={HomePage} />
          <Route path={routes.register} component={RegistrationForm} />
          <Route path={routes.login} component={LoginForm} />
          <Route path={routes.serverError} component={isErrorSet ? ServerError : NotFound} />
          <Route path={routes.gameBoard} component={isLogedIn ? GameBoard : Unauthorized} />
          <Route component={NotFound} />
        </Switch>
      </main>
    </>
  );
}

export default App;
