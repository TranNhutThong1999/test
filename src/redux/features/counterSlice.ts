import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const fetchPosts = createAsyncThunk("posts/fetchPosts", async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  return res.json();
});

export const counterSlice = createSlice({
  name: "counter",
  initialState: { data: [], loading: false, error: null,  value: 0, },
  reducers: {
    increment: (state) => {
      state.value += 1;
    },
    decrement: (state) => {
      state.value -= 1;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchPosts.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchPosts.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(fetchPosts.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message || "Lỗi tải dữ liệu";
      });
  },
});

export const { increment, decrement } = counterSlice.actions;
export default counterSlice.reducer;