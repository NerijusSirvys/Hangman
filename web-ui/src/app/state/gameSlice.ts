import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const keyboard = {
  topRow: ["Q", "W", "E", "R", "T", "Y", "U", "I", "O", "P"],
  middleRow: ["A", "S", "D", "F", "G", "H", "J", "K", "L"],
  bottomRow: ["Z", "X", "C", "V", "B", "N", "M"],
};

interface Key {
  letter: string;
  isDisabled: boolean;
}

interface Keyboard {
  topRow: Key[];
  middleRow: Key[];
  bottomRow: Key[];
}

interface GameState {
  failedGuesses: number;
  correctGuesses: number;
  availableGuesses: number;
  isLoading: boolean;
  keyboard: Keyboard;
}

const keyTopRow: Key[] = keyboard.topRow.map((key) => {
  return {
    letter: key,
    isDisabled: true,
  };
});

const keymiddleRow: Key[] = keyboard.middleRow.map((key) => {
  return {
    letter: key,
    isDisabled: true,
  };
});

const keyBottomRow: Key[] = keyboard.bottomRow.map((key) => {
  return {
    letter: key,
    isDisabled: true,
  };
});

const initialState: GameState = {
  correctGuesses: 0,
  failedGuesses: 0,
  availableGuesses: 6,
  isLoading: true,
  keyboard: {
    topRow: keyTopRow,
    middleRow: keymiddleRow,
    bottomRow: keyBottomRow,
  },
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
    disableKey: (state, action: PayloadAction<string>) => {
      state.keyboard.topRow.forEach((key) => {
        if (key.letter === action.payload) {
          key.isDisabled = false;
        }
      });

      state.keyboard.middleRow.forEach((key) => {
        if (key.letter === action.payload) {
          key.isDisabled = false;
        }
      });

      state.keyboard.bottomRow.forEach((key) => {
        if (key.letter === action.payload) {
          key.isDisabled = false;
        }
      });
    },
  },
});

export const { processFailedGuess, reset, processCorrectGuess, isLoading, resetFailedGuesses, disableKey } =
  gameSlice.actions;

export default gameSlice.reducer;
