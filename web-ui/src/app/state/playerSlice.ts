import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../interfaces/Player";
import store from "../store";

interface PlayerState extends Player {}

const initialState: PlayerState = {
  id: "",
  userName: "",
  gameScore: 0,
  stars: 0,
  completeLevels: 0,
};

const playerSlice = createSlice({
  name: "player",
  initialState: initialState,
  reducers: {
    loadPlayer: (state, action: PayloadAction<Player>) => {
      return action.payload;
    },
    addStars: (state, action: PayloadAction<number>) => {
      state.stars += action.payload;
    },
    removeStars: (state, action: PayloadAction<number>) => {
      if (state.stars < action.payload) {
        state.stars = 0;
        return;
      }

      state.stars -= action.payload;
    },
    processLevelCompletion: (state, action: PayloadAction<number>) => {
      state.completeLevels++;
      state.gameScore += action.payload;
    },
  },
});

export const { loadPlayer, addStars, processLevelCompletion, removeStars } = playerSlice.actions;

export default playerSlice.reducer;
