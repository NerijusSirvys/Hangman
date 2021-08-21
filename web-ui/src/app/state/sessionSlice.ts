import { createSlice } from "@reduxjs/toolkit";
import { userSession } from "../services/userSession";

interface SessionState {
  isLogedIn: boolean;
}

const initialState: SessionState = {
  isLogedIn: !userSession.isTokenExpired(),
};

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    login: (state) => {
      state.isLogedIn = true;
    },

    logout: (state) => {
      state.isLogedIn = false;
    },
  },
});

export const { login, logout } = sessionSlice.actions;

export default sessionSlice.reducer;
