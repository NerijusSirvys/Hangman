import { createSlice, PayloadAction } from "@reduxjs/toolkit";

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
    game_processFailedGuess: (state) => {
      state.failedGuesses++;
      state.availableGuesses--;
    },
    game_processCorrectGuess: (state, action: PayloadAction<number>) => {
      state.correctGuesses += action.payload;
    },
    game_isLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload;
    },
    game_resetFailedGuesses: (state) => {
      state.failedGuesses = 0;
    },
  },
});

export const {
  game_processFailedGuess,
  game_processCorrectGuess,
  game_isLoading,
  game_resetFailedGuesses,
} = gameSlice.actions;
export default gameSlice.reducer;
