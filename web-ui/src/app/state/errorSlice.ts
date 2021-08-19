import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { ServerError } from "../../interfaces/ServerError";

interface ErrorState extends ServerError {
  isSet: boolean;
}

const initialState: ErrorState = {
  message: "",
  statusCode: 0,
  isSet: false,
};

const errorSlice = createSlice({
  name: "error",
  initialState: initialState,
  reducers: {
    error_setError: (state, action: PayloadAction<ServerError>) => {
      state.message = action.payload.message;
      state.statusCode = action.payload.statusCode;
      state.isSet = true;
    },
  },
});

export const { error_setError } = errorSlice.actions;
export default errorSlice.reducer;
