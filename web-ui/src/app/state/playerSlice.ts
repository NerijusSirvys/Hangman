import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../interfaces/Player";

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
    player_loadPlayer: (state, action: PayloadAction<Player>) => {
      return action.payload;
    },
    player_addStars: (state, action: PayloadAction<number>) => {
      state.stars += action.payload;
    },
    player_removeStars: (state, action: PayloadAction<number>) => {
      if (state.stars < action.payload) {
        state.stars = 0;
        return;
      }

      state.stars -= action.payload;
    },
    player_addScore: (state, action: PayloadAction<number>) => {
      state.gameScore += action.payload;
    },
    player_incrementCompleteLevel: (state) => {
      state.completeLevels++;
    },
  },
});

export const {
  player_loadPlayer,
  player_addStars,
  player_addScore,
  player_incrementCompleteLevel,
  player_removeStars,
} = playerSlice.actions;
export default playerSlice.reducer;
