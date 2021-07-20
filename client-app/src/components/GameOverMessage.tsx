import { useDispatch } from "react-redux";
import { reload } from "../functions";

const handleClick = (dispatch: any) => {
  reload(dispatch);
};
export const GameOverMessage = () => {
  const dispatch = useDispatch();
  return (
    <div className="message">
      <h2>Game Over...</h2>
      <p className="hover" onClick={() => handleClick(dispatch)}>
        Restart
      </p>
    </div>
  );
};
