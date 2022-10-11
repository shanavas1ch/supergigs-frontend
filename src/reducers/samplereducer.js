import { useNavigate } from "react-router-dom";

const initialState = ["initial state"];

function sampleReducer(state = initialState, action) {
  const { type, payload } = action;
  console.log(type);
  switch (type) {
    case "SAMPLE":
      return [payload];

    case "RETRIEVE_SHIPAGENTCODES":
      return "sample check 2";

    default:
      return initialState;
  }
}

export default sampleReducer;
