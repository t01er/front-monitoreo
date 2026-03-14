import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginRequest } from "./services/authApi";
import { jwtDecode } from "jwt-decode";

const token = localStorage.getItem("token");

let user = null;

if (token) {
  user = jwtDecode(token);
}

export const loginUser = createAsyncThunk(
  "auth/loginUser",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginRequest(credentials);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response?.data);
    }
  }
);

const authSlice = createSlice({
  name: "auth",

  initialState: {
    user: user,          
    token: token,
    refreshToken: null,
    loading: false
  },

  reducers: {
    logout: (state) => {
      state.user = null;
      state.token = null;
      localStorage.removeItem("token");
    }
  },

  extraReducers: (builder) => {
    builder.addCase(loginUser.fulfilled, (state, action) => {

      const { token, refresh_token } = action.payload;

      state.token = token;
      state.refreshToken = refresh_token;

      localStorage.setItem("token", token);

      const decoded = jwtDecode(token);
      state.user = decoded;

    });
  }
});

export const { logout } = authSlice.actions;

export default authSlice.reducer;