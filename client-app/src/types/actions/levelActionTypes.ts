import { Level } from "../interfaces/Level";

const UPDATE_HIDDEN_SECRET = "UPDATE_HIDDEN_SECRET";
const LOAD_NEW_LEVEL = "LOAD_NEW_LEVEL";
const SET_IS_LOADING = "SET_IS_LOADING";
const REMOVE_LEVEL = "REMOVE_LEVEL";

export interface RemoveLevel {
  type: typeof REMOVE_LEVEL;
}

export interface SetIsLoading {
  type: typeof SET_IS_LOADING;
  payload: boolean;
}

export interface UpdateHiddenSecretAction {
  type: typeof UPDATE_HIDDEN_SECRET;
  payload: number;
}

export interface LoadNewLevelAction {
  type: typeof LOAD_NEW_LEVEL;
  payload: Level;
}

export type LevelActionTypes =
  | UpdateHiddenSecretAction
  | LoadNewLevelAction
  | SetIsLoading
  | RemoveLevel;
