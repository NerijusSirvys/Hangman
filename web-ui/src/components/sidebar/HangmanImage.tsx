import { useSelector } from "react-redux";
import { RootState } from "../../app/store";

import hangman_0 from "../../images/character//hangman-0.png";
import hangman_1 from "../../images/character/hangman-1.png";
import hangman_2 from "../../images/character/hangman-2.png";
import hangman_3 from "../../images/character/hangman-3.png";
import hangman_4 from "../../images/character/hangman-4.png";
import hangman_5 from "../../images/character/hangman-5.png";
import hangman_6 from "../../images/character/hangman-6.png";

const hangman = [
  hangman_6,
  hangman_5,
  hangman_4,
  hangman_3,
  hangman_2,
  hangman_1,
  hangman_0,
];

const HangmanImage: React.FC = () => {
  const imageIndex = useSelector(
    (state: RootState) => state.game.failedGuesses
  );

  return (
    <div className="hangman">
      <img src={hangman[imageIndex]} alt="hangman" />
    </div>
  );
};

export { HangmanImage };
