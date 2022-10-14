import { createSlice } from "@reduxjs/toolkit";
const initialState = {
  value: { email: "", password: "", payload: { response: false } },
};

const signInReducer = createSlice({
  name: "signIn",
  initialState: {
    value: {
      userDetails: { email: "", password: "" },
      signInSuccess: false,
    },
  },
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },
    sigInReset: (state) => {
      state.value = initialState;
    },
  },
});

export const { signIn, sigInReset } = signInReducer.actions;

export default signInReducer.reducer;
