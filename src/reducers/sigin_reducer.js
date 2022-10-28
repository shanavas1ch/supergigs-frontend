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
    siginInInitial: (state) => {
      state.value = initialState;
    },
  },
});

export const { signIn, logout_call, siginInInitial } = signInReducer.actions;

export default signInReducer.reducer;

export const signInCall = (url, data) => async (dispatch) => {
  try {
    // const res = await DataService.get(url, data);
    // var modifiedData = JSON.stringify(data);
    // console.log("modifedData >", modifiedData);
    const apiResponse = await axios
      .post(`${process.env.REACT_APP_LOCAL_HOST_URL}` + url, data)
      .then((response) => {
        console.log("response >", response);
        dispatch(signIn({ ...response.data, signInSuccess: true }));
        let accessToken = response.data.data.access_token;
        let refreshToken = response.data.data.refresh_token;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("signIn_success", true);
        return response;
      })
      .catch((error) => {
        console.log("inside error");
        dispatch(signIn({ error: error, signInError: true }));

        return error;
      });
    return Promise.resolve(apiResponse);
  } catch (e) {
    console.error(e.message);
    return Promise.reject(e);
  }
};
