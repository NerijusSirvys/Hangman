import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../interfaces/Game";

const initialState: Game = {
  correctGuesses: 0,
  failedGuesses: 0,
  availableGuesses: 6,
};

const gameSlice = createSlice({
  name: "game",
  initialState: initialState,
  reducers: {
    processFailedGuess: (state) => {
      state.failedGuesses++;
      state.availableGuesses--;
    },
    processCorrectGuess: (state, action: PayloadAction<number>) => {
      state.correctGuesses += action.payload;
    },
  },
});

export const { processFailedGuess, processCorrectGuess } = gameSlice.actions;
export default gameSlice.reducer;
