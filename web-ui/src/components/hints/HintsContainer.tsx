import { useSelector } from "react-redux";
import { RootState } from "../../app/store";
import { Hint } from "./Hint";
import "./styles.css";

const HintsContainer: React.FC = () => {
  const hints = useSelector((state: RootState) => state.level.hints);

  return (
    <section>
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
