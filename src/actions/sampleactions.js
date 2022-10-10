import { SAMPLE } from "./types";

export const startAction = (message) => {
  return {
    type: SAMPLE,
    payload: message,
  };
};
