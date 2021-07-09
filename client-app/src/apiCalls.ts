import axios from "axios";
import { Level } from "./types/interfaces/Level";
import { Player } from "./types/interfaces/Player";

export const getLevel = (url: string) => {
  return axios.get<Level>(url).then((response) => {
    return response.data;
  });
};

export const UpdatePlayer = (player: Player, completeLevelId: string) => {
  //=========================
  // TODO: push player to API
  //=========================
};

export const UpdateHint = (hintId: string, showHint: boolean) => {
  //======================
  // TODO:push hint to API
  //======================
};
