const initialState = ["initial state"];

function sampleReducer(state = initialState, action) {
  const { type, payload } = action;

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
