import { useEffect } from "react";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { accountService } from "./app/services/accountService";
import { gameEngine } from "./app/services/gameEngine";
import { userSession } from "./app/services/userSession";
import { RootState } from "./app/store";
import { GameBoard } from "./components/GameBoard";
import { LoginForm } from "./components/LoginForm";

function App() {
  const isLogedIn = useSelector((state: RootState) => state.session.isLogedIn);
  const isLevelComplete = useSelector(
    (state: RootState) => state.level.isComplete
  );
  const stars = useSelector((state: RootState) => state.player.stars);
  const gameScoreReward = useSelector(
    (state: RootState) => state.level.gameScoreReward
  );
  const levelId = useSelector((state: RootState) => state.level.id);

  // handle player re-log and level loading when browser is refreshed
  useEffect(() => {
    if (!userSession.tokenExpired() && !isLogedIn) {
      gameEngine.reLogPlayer();
    }
  }, [isLogedIn]);

  useEffect(() => {
    if (isLevelComplete) {
      gameEngine.processLevelComplete(stars, gameScoreReward, levelId);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isLevelComplete]);

  return (
    <Container className="game-board" fluid="lg">
      {isLogedIn ? <GameBoard /> : <LoginForm />}
    </Container>
  );
}

export default App;
