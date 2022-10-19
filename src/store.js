import { configureStore } from "@reduxjs/toolkit";
import { sam } from "./reducers/sampleone";
import samplereducer from "./reducers/samplereducer";
import sigin_reducer from "./reducers/sigin_reducer";

const store = configureStore({
  reducer: { sample: samplereducer, sam: sam, signIn: sigin_reducer },
});

export default store;
