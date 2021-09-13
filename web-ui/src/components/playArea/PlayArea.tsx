import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { HintsContainer } from "../hints/HintsContainer";
import { Keyboard } from "../keyboard/Keyboard";
import { GameOverMessage } from "../messages/GameOverMessage";
import { LevelCompleteMessage } from "../messages/LevelCompleteMessage";
import { LoadingMessage } from "../messages/LoadingMessage";
import { Quiz } from "../quiz/Quiz";

const PlayArea: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.game.isLoading);
  const isLevelComplete = useSelector((state: RootState) => state.level.isComplete);
  const isGameOver = useSelector((state: RootState) => state.game.availableGuesses === 0);

  if (isLoading) {
    return <LoadingMessage />;
  }

  if (isLevelComplete) {
    return <LevelCompleteMessage />;
  }

  if (isGameOver) {
    return <GameOverMessage />;
  }

  return (
    <div className="play-area">
      <Quiz />
      <HintsContainer />
      <Keyboard />
    </div>
  );
};

export { PlayArea };
