import { Key } from "./Key";

const topRow = ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"];
const middleRow = ["A", "S", "D", "F", "G", "H", "J", "K", "L"];
const bottomRow = ["Z", "X", "C", "V", "B", "N", "M"];

export const Keyboard: React.FC = () => {
  return (
    <section className="keyboard">
      <div className="keyboard-row">
        {topRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
      <div className="keyboard-row">
        {middleRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
      <div className="keyboard-row">
        {bottomRow.map((key) => {
          return <Key key={key} letter={key} />;
        })}
      </div>
    </section>
  );
};
