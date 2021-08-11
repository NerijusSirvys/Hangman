import { useSelector } from "react-redux";
import { RootState } from "../app/store";
import { HintsContainer } from "./hints/HintsContainer";
import { Keyboard } from "./keyboard/Keyboard";
import { Message, MessageType } from "./messages/Message";
import { Quiz } from "./Quiz";

const PlayArea: React.FC = () => {
  const isLoading = useSelector((state: RootState) => state.level.isLoading);
  const isLevelComplete = useSelector(
    (state: RootState) => state.level.isComplete
  );

  const isGameOver = useSelector(
    (state: RootState) => state.game.availableGuesses === 0
  );

  if (isLoading) {
    return (
      <>
        <Message type={MessageType.Loading} />
      </>
    );
  }

  if (isLevelComplete) {
    return (
      <>
        <Message type={MessageType.LevelComplete} />
      </>
    );
  }

  if (isGameOver) {
    return (
      <>
        <Message type={MessageType.GameOver} />
      </>
    );
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
