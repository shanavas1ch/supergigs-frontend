import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import { startAction } from "./actions/sampleactions";
import "./App.css";
import FindGigsLandingPage from "./components/find-gigs/FindGigsLandingPage";
import FreeLancerComponentOne from "./components/freelancer/FreeLancerComponentOne";
import FreeLancerComponentTwo from "./components/freelancer/FreeLancerComponentTwo";
import SignInSignUp from "./components/sign-in-component/SignInSignUp";
import SignUp from "./components/sign-in-component/SignUp";

import LandingPage from "./pages/LandingPage/LandingPage";
import { sam } from "./reducers/sampleone";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(startAction("check")).then((resp) => {});
    const res = dispatch(sam({ value: "check" }));
  }, []);
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/signin" element={<SignInSignUp />} />
          <Route path="/signup" element={<SignUp />} />
          <Route
            path="/freelancer/page1"
            element={<FreeLancerComponentOne />}
          />
          <Route
            path="/freelancer/page2"
            element={<FreeLancerComponentTwo />}
          />
          <Route path="/find-gigs" element={<FindGigsLandingPage />} />
        </Routes>
      </Router>
      <ToastContainer />
    </div>
  );
}

export default App;
