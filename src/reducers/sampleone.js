import { createSlice } from "@reduxjs/toolkit";

const sampleOne = createSlice({
  name: "sample",
  initialState: { value: { name: "ajay" } },
  reducers: {
    sam: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { sam } = sampleOne.actions;

export default sampleOne.reducer;
