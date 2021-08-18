import { Key } from "./Key";
import "./styles.css";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

const Keyboard: React.FC = () => {
  return (
    <section className="keyboard-container">
      <div className="key-row">
        {topRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
      <div className="key-row">
        {middleRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
      <div className="key-row">
        {bottomRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
    </section>
  );
};

export { Keyboard };
