import { Level } from "../interfaces/Level";

const UPDATE_HIDDEN_SECRET = "UPDATE_HIDDEN_SECRET";
const LOAD_NEW_LEVEL = "LOAD_NEW_LEVEL";
const SET_IS_LOADING = "SET_IS_LOADING";
const REMOVE_LEVEL = "REMOVE_LEVEL";
const SHOW_HINT = "SHOW_HINT";

export interface ShowHint {
  type: typeof SHOW_HINT;
  hintId: string;
}

export interface RemoveLevel {
  type: typeof REMOVE_LEVEL;
}

export interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  isLoading: boolean;
}

export interface UpdateHiddenSecretAction {
  type: typeof UPDATE_HIDDEN_SECRET;
  secretIndex: number;
}

export interface LoadNewLevelAction {
  type: typeof LOAD_NEW_LEVEL;
  level: Level;
}

export type LevelActionTypes =
  | UpdateHiddenSecretAction
  | LoadNewLevelAction
  | SetIsLoading
  | RemoveLevel
  | ShowHint;
