import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Level } from "../../interfaces/Level";

const initialState: Level = {
  id: "",
  secret: "",
  clue: "",
  difficulty: "",
  gameScoreReward: 0,
  hints: [],
  secretMask: [],
  starReward: 0,
  isComplete: false,
  leftToGuess: 0,
};

const maskSecret = (secret: string) => {
  return secret.split("").map(() => {
    return "#";
  });
};

const levelSlice = createSlice({
  name: "level",
  initialState: initialState,
  reducers: {
    level_loadLevel: (state, action: PayloadAction<Level>) => {
      return {
        ...action.payload,
        secretMask: maskSecret(action.payload.secret),
        leftToGuess: action.payload.secret.length,
        isComplete: false,
      };
    },
    level_updateMask: (state, action: PayloadAction<number>) => {
      state.secretMask[action.payload] = state.secret[action.payload];
      state.leftToGuess--;
      state.isComplete = state.leftToGuess === 0;
    },
    level_showHint: (state, action: PayloadAction<string>) => {
      state.hints.forEach((hint) => {
        if (hint.id === action.payload) {
          hint.show = true;
        }
      });
    },
  },
});

export const { level_loadLevel, level_updateMask, level_showHint } = levelSlice.actions;
export default levelSlice.reducer;
