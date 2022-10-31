import { configureStore } from "@reduxjs/toolkit";
import { sam } from "./reducers/sampleone";
import samplereducer from "./reducers/samplereducer";
import sigin_reducer from "./reducers/sigin_reducer";
import signup_reducer from "./reducers/signup_reducer";

const store = configureStore({
  reducer: {
    sample: samplereducer,
    sam: sam,
    signIn: sigin_reducer,
    signUp: signup_reducer,
  },
});

export default store;
