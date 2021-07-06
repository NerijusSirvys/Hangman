import axios from "axios";
import { Dispatch } from "react";
import { loadNewLevel } from "./actions/levelActions";
import { Level } from "./types/interfaces/Level";
import { Player } from "./types/interfaces/Player";

export const LoadLevel = (dispatch: Dispatch<any>, url: string) =>
  axios.get<Level>(url).then((response) => {
    dispatch(loadNewLevel(response.data));
  });

export const UpdatePlayer = (player: Player) => {
  // TODO: push player to API
  alert("Player saved");
};
