import { Header } from "../header/Header";
import { PlayArea } from "../playArea/PlayArea";
import { SideBar } from "../sidebar/SideBar";
import "./styles.css";

const GameBoard: React.FC = () => {
  return (
    <>
      <Header />
      <PlayArea />
      <SideBar />
    </>
  );
};
export { GameBoard };
