import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { ReactComponent as Mask } from "../../images/mask.svg";

export const Quiz: React.FC = () => {
  const clue = useSelector((state: RootState) => state.level.clue);
  const hiddenSecret = useSelector((state: RootState) => state.level.secretMask);

  return (
    <section className="quiz-container">
      <h5 className="clue">{clue}</h5>
      <div className="secret">
        {hiddenSecret.map((letter, index) => {
          return letter === "#" ? (
            <p key={index} className="letter">
              <Mask key={index} />
            </p>
          ) : (
            <p key={index} className="letter">
              {letter}
            </p>
          );
        })}
      </div>
    </section>
  );
};
