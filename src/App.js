import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar-component/NavBar";
import Footer from "./components/footer-component/Footer";
import MainComponent from "./components/main-component/MainComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import LandingPage from "./pages/LandingPage/LandingPage";
import FreeLancerComponentOne from "./components/freelancer/FreeLancerComponentOne";
import { useDispatch } from "react-redux";
import { startAction } from "./actions/sampleactions";
import FreeLancerComponentTwo from "./components/freelancer/FreeLancerComponentTwo";

function App() {
  const [res, setResp] = useState([]);
  const [resOne, setRespOne] = useState([]);
  const dispatch = useDispatch();
  useEffect(() => {
    const che = dispatch(startAction("check"));
    console.log("che : ", che);
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
        </Routes>
      </Router>
    </div>
  );
}

export default App;
