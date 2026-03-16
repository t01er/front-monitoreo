import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    message: null,
    code: null,
    status: null,
    view: false
  },
  reducers: {
    setError: (state, action) => {
      state.message = action.payload.message;
      state.code = action.payload.code;
      state.status = action.payload.status;
      state.view = action.payload.view;
    },
    clearError: (state) => {
      state.message = null;
      state.code = null;
      state.status = null;
      state.view = false;
    }
  }
});

export const { setError, clearError } = errorSlice.actions;
export default errorSlice.reducer;