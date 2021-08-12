import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game } from "../../interfaces/Game";

const initialState: Game = {
  correctGuesses: 0,
  failedGuesses: 0,
  availableGuesses: 6,
  isLoading: true,
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
    isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    resetFailedGuesses: (state) => {
      state.failedGuesses = 0;
    },
  },
});

export const {
  processFailedGuess,
  processCorrectGuess,
  isLoading,
  resetFailedGuesses,
} = gameSlice.actions;
export default gameSlice.reducer;
