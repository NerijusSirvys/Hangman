import { useDispatch, useSelector } from "react-redux";
import { reload } from "../functions";
import { AppState } from "../store/configStore";

// const levelUrl = "https://localhost:5001/api/game/newlevel";

const handleClick = (dispatch: any): void => {
  reload(dispatch);
};

export const LevelCompleteMessage = () => {
  const dispatch = useDispatch();
  const player = useSelector((state: AppState) => state.player);

  return (
    <div className="message">
      <h2>Play again?</h2>
      <p className="hover" onClick={() => handleClick(dispatch)}>
        Sure...
      </p>
    </div>
  );
};
