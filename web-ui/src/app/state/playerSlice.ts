import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Player } from "../../interfaces/Player";

const initialState: Player = {
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
    addScore: (state, action: PayloadAction<number>) => {
      state.gameScore += action.payload;
    },
    incrementCompleteLevel: (state) => {
      state.completeLevels++;
    },
  },
});

export const {
  loadPlayer,
  addStars,
  addScore,
  incrementCompleteLevel,
  removeStars,
} = playerSlice.actions;
export default playerSlice.reducer;
