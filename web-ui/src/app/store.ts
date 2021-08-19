import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./state//gameSlice";
import sessionReducer from "./state//sessionSlice";
import levelReducer from "./state/levelSlice";
import playerReducer from "./state/playerSlice";
import errorReducer from "./state/errorSlice";

const rootReducers = combineReducers({
  level: levelReducer,
  player: playerReducer,
  session: sessionReducer,
  game: gameReducer,
  error: errorReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
