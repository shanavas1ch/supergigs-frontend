import { createSlice } from "@reduxjs/toolkit";
import axios from "axios";
import { toast } from "react-toastify";

import http from "../service";
import DataService from "../service/data.service";
const initialState = {
  value: { email: "", password: "", payload: { response: false } },
};

const signUpReducer = createSlice({
  name: "signUp",
  initialState: initialState,
  reducers: {
    signUp: (state, action) => {
      state.value = action.payload;
    },

    logout_call: (state) => {
      state.value = initialState;
    },
    sigUpInInitial: (state) => {
      state.value = initialState;
    },
    googleSignUp: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { signUp, logout_call, siginUpInitial, googleSignUp } =
  signUpReducer.actions;

export default signUpReducer.reducer;

export const signUpCall = (url, data) => async (dispatch) => {
  try {
    // const res = await DataService.get(url, data);
    // var modifiedData = JSON.stringify(data);
    // console.log("modifedData >", modifiedData);
    const apiResponse = await axios
      .post(`${process.env.REACT_APP_LOCAL_HOST_URL}` + url, data)
      .then((response) => {
        console.log("response >", response);
        dispatch(signUp({ ...response.data, signInSuccess: true }));
        let accessToken = response.data.data.access_token;
        let refreshToken = response.data.data.refresh_token;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("signIn_success", true);
        return response;
      })
      .catch((error) => {
        console.log("inside error");
        dispatch(signUp({ error: error, signInError: true }));

        return error;
      });
    return Promise.resolve(apiResponse);
  } catch (e) {
    console.error(e.message);
    return Promise.reject(e);
  }
};

export const googleSignUpCall = (url, data) => async (dispatch) => {
  try {
    // const res = await DataService.get(url, data);
    // var modifiedData = JSON.stringify(data);
    // console.log("modifedData >", modifiedData);
    const apiResponse = await axios
      .post(`${process.env.REACT_APP_LOCAL_HOST_URL}` + url, data)
      .then((response) => {
        console.log("response >", response);
        dispatch(googleSignUp({ ...response.data, signInSuccess: true }));
        let accessToken = response.data.data.access_token;
        let refreshToken = response.data.data.refresh_token;
        localStorage.setItem("accessToken", accessToken);
        localStorage.setItem("refreshToken", refreshToken);
        localStorage.setItem("signIn_success", true);
        return response;
      })
      .catch((error) => {
        console.log("inside error");
        dispatch(googleSignUp({ error: error, signInError: true }));

        return error;
      });
    return Promise.resolve(apiResponse);
  } catch (e) {
    console.error(e.message);
    return Promise.reject(e);
  }
};
