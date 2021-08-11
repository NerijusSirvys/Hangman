import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Hint } from "./Hint";

const HintsContainer: React.FC = () => {
  const hints = useSelector((state: RootState) => state.level.hints);

  return (
    <section className="hint-container">
      <ul className="hints">
        {hints.map((hint) => {
          return (
            <li key={hint.id} className="hint">
              <Hint {...hint} />
            </li>
          );
        })}
      </ul>
    </section>
  );
};

export { HintsContainer };
