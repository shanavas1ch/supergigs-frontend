import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import http from "../service";
import DataService from "../service/data.service";
const initialState = {
  value: { email: "", password: "", payload: { response: false } },
};

const signInReducer = createSlice({
  name: "signIn",
  initialState: initialState,
  reducers: {
    signIn: (state, action) => {
      state.value = action.payload;
    },

    logout_call: (state) => {
      state.value = initialState;
    },
  },
});

export const { signIn, logout_call } = signInReducer.actions;

export default signInReducer.reducer;

export const signInCall = (url, data) => async (dispatch) => {
  try {
    // const res = await DataService.get(url, data);
    // var modifiedData = JSON.stringify(data);
    // console.log("modifedData >", modifiedData);
    await axios
      .post(`${process.env.REACT_APP_LOCAL_HOST_URL}` + url, data)
      .then((response) => {
        console.log("response >", response);
        dispatch(signIn({ ...response.data, signInSuccess: true }));
        localStorage.setItem("signIn_success", true);
      })
      .catch((error) => {
        toast.error(error);
      });
  } catch (e) {
    return console.error(e.message);
  }
};
