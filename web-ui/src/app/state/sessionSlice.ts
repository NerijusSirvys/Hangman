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
    session_login: (state) => {
      state.isLogedIn = true;
    },

    session_logout: (state) => {
      state.isLogedIn = false;
    },
  },
});

export const { session_login, session_logout } = sessionSlice.actions;
export default sessionSlice.reducer;
