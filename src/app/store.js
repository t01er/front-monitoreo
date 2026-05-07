import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import errorReducer from "../features/error/errorSlice";
import technicalReducer from "../features/technical/technicalSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    error: errorReducer,
    technical: technicalReducer
  }
});