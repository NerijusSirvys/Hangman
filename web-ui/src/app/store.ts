import { combineReducers, configureStore } from "@reduxjs/toolkit";
import gameReducer from "./state//gameSlice";
import sessionReducer from "./state//sessionSlice";
import levelReducer from "./state/levelSlice";
import playerReducer from "./state/playerSlice";

const rootReducers = combineReducers({
  level: levelReducer,
  player: playerReducer,
  session: sessionReducer,
  game: gameReducer,
});

const store = configureStore({
  reducer: rootReducers,
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
