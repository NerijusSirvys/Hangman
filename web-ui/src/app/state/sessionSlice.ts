import { createSlice } from "@reduxjs/toolkit";

interface SessionState {
  isLogedIn: boolean;
}

const initialState: SessionState = {
  isLogedIn: false,
};

const sessionSlice = createSlice({
  name: "session",
  initialState: initialState,
  reducers: {
    session_login: (state) => {
      state.isLogedIn = true;
    },
  },
});

export const { session_login } = sessionSlice.actions;
export default sessionSlice.reducer;
