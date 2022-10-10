import { configureStore } from "@reduxjs/toolkit";
import samplereducer from "./reducers/samplereducer";

const store = configureStore({
  reducer: { sample: samplereducer },
});

export default store;
