import { useDispatch } from "react-redux";
import { DATA, SAMPLE } from "./types";

export const startAction = () => async (dispatch) => {
  const data = { name: "ajay" };
  dispatch({ type: SAMPLE, payload: data });
  return "success";
};
