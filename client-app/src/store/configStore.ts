import levelReducer from "../state/reducers/level";
import playerReducer from "../state/reducers/player";

import { combineReducers } from "redux";
import { createStore } from "redux";
import { compose } from "@reduxjs/toolkit";

const rootReducer = combineReducers({
  level: levelReducer,
  player: playerReducer,
});

const composeEnhancers =
  (window && (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || compose;

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(rootReducer, composeEnhancers());
