import { configureStore } from "@reduxjs/toolkit";
import { sam } from "./reducers/sampleone";
import samplereducer from "./reducers/samplereducer";

const store = configureStore({
  reducer: { sample: samplereducer, sam: sam },
});

export default store;
