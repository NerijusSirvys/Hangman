import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import store from "../store";

interface GameState {
  failedGuesses: number;
  correctGuesses: number;
  availableGuesses: number;
  isLoading: boolean;
}

const initialState: GameState = {
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
    reset: (state) => {
      return initialState;
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

export const { processFailedGuess, reset, processCorrectGuess, isLoading, resetFailedGuesses } = gameSlice.actions;

export default gameSlice.reducer;
