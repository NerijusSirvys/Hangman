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
    login: (state) => {
      state.isLogedIn = true;
    },
  },
});

export const { login } = sessionSlice.actions;
export default sessionSlice.reducer;
