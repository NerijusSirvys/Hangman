import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { HintsContainer } from "../hints/HintsContainer";
import { Keyboard } from "../keyboard/Keyboard";
import { GameOverMessage } from "../messages/GameOverMessage";
import { Message } from "../messages/Message";
import { Quiz } from "../quiz/Quiz";

const PlayArea: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.game.isLoading);
  const isLevelComplete = useSelector((state: RootState) => state.level.isComplete);
  const isGameOver = useSelector((state: RootState) => state.game.availableGuesses === 0);

  if (isLoading) {
    return <Message message="Loading..." />;
  }

  if (isLevelComplete) {
    return <Message message="Level Complete..." button={true} />;
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
