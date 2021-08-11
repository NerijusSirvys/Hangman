import { Header } from "./Header";
import { PlayArea } from "./PlayArea";
import { SideBar } from "./sidebar/SideBar";

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
