import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  getTechnicals,
  createTechnical,
  updateTechnical,
  getProjectIds
} from "./services/technicalApi";


import { setError } from "../error/errorSlice";


export const fetchTechnicals = createAsyncThunk(
  "technical/fetchTechnicals",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await getTechnicals();
      return res.data;
    } catch (error) {
      const backendError = error.response?.data;

      dispatch(setError({
        message: backendError?.message,
        code: backendError?.error_code?.code,
        status: backendError?.status,
        view: backendError?.view
      }));

      return rejectWithValue(backendError);
    }
  }
);


// ✅ POST /technical
export const createTechnicalThunk = createAsyncThunk(
  "technical/createTechnical",
  async (data, { rejectWithValue, dispatch }) => {
    try {
      const res = await createTechnical(data);
      return res.data;
    } catch (error) {
      const backendError = error.response?.data;

      dispatch(setError({
        message: backendError?.message,
        code: backendError?.error_code?.code,
        status: backendError?.status,
        view: backendError?.view
      }));

      return rejectWithValue(backendError);
    }
  }
);


// ✅ PUT /technical/{id}
export const updateTechnicalThunk = createAsyncThunk(
  "technical/updateTechnical",
  async ({ id, data }, { rejectWithValue, dispatch }) => {
    try {
      const res = await updateTechnical(id, data);
      return res.data;
    } catch (error) {
      const backendError = error.response?.data;

      dispatch(setError({
        message: backendError?.message,
        code: backendError?.error_code?.code,
        status: backendError?.status,
        view: backendError?.view
      }));

      return rejectWithValue(backendError);
    }
  }
);


export const fetchProjectIds = createAsyncThunk(
  "technical/fetchProjectIds",
  async (_, { rejectWithValue, dispatch }) => {
    try {
      const res = await getProjectIds();
      return res.data;
    } catch (error) {
      const backendError = error.response?.data;

      dispatch(setError({
        message: backendError?.message,
        code: backendError?.error_code?.code,
        status: backendError?.status,
        view: backendError?.view
      }));

      return rejectWithValue(backendError);
    }
  }
);



const technicalSlice = createSlice({
  name: "technical",

  initialState: {
    technicals: [],
    projectIds: [],
    loading: false
  },

  reducers: {},

  extraReducers: (builder) => {
    builder

      // 🔄 FETCH TECHNICALS
      .addCase(fetchTechnicals.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchTechnicals.fulfilled, (state, action) => {
        state.loading = false;
        state.technicals = action.payload;
      })
      .addCase(fetchTechnicals.rejected, (state) => {
        state.loading = false;
      })

      // ➕ CREATE
      .addCase(createTechnicalThunk.fulfilled, (state, action) => {
        state.technicals.push(action.payload);
      })

      // ✏️ UPDATE
      .addCase(updateTechnicalThunk.fulfilled, (state, action) => {
        const updated = action.payload;

        const index = state.technicals.findIndex(
          (t) => t.id === updated.id
        );

        if (index !== -1) {
          state.technicals[index] = updated;
        }
      })

      // 📦 PROJECT IDS
      .addCase(fetchProjectIds.fulfilled, (state, action) => {
        state.projectIds = action.payload;
      });
  }
});

export default technicalSlice.reducer;