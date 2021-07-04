import { GameActionTypes } from "./gameActionTypes";
import { LevelActionTypes } from "./levelActionTypes";
import { PlayerActionTypes } from "./playerActionTypes";

export type AppActions = LevelActionTypes | PlayerActionTypes | GameActionTypes;
