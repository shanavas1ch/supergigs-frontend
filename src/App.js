import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { startAction } from "./actions/sampleactions";
import "./App.css";
import FindGigsLandingPage from "./components/find-gigs/FindGigsLandingPage";
import FreeLancerComponentOne from "./components/freelancer/FreeLancerComponentOne";
import FreeLancerComponentTwo from "./components/freelancer/FreeLancerComponentTwo";
import SignInSignUp from "./components/sign-in-component/SignInSignUp";
import SignUp from "./components/sign-in-component/SignUp";

import LandingPage from "./pages/LandingPage/LandingPage";
import { sam } from "./reducers/sampleone";

function App() {
  const [res, setResp] = useState([]);
  const [resOne, setRespOne] = useState([]);
  const dispatch = useDispatch();
  const initialState = useSelector((state) => state.sam);
  useEffect(() => {
    console.log("ini", initialState);
    dispatch(startAction("check")).then((resp) => {
      // console.log(resp);
    });
    const res = dispatch(sam({ value: "check" }));
    console.log(res);
    // fetch("http://localhost:5000/comments")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     setResp(response);
    //   });
    // fetch("http://localhost:3500/api")
    //   .then((response) => {
    //     // console.log(response.text());
    //     return response.text();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setRespOne(response);
    //   });
    // fetch("http://localhost:3500/api/one")
    //   .then((response) => {
    //     // console.log(response.text());
    //     return response.json();
    //   })
    //   .then((response) => {
    //     console.log(response);
    //     setResp(response);
    //   });
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
    </div>
  );
}

export default App;
