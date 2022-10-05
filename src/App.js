import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap";
import React, { useEffect, useState } from "react";
import "./App.css";
import NavBar from "./components/navbar-component/NavBar";
import Footer from "./components/footer-component/Footer";
import MainComponent from "./components/main-component/MainComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "./components/sign-in-component/SignInSignUp";
import SignUp from "./components/sign-in-component/SignUp";
import LandingPage from "./pages/LandingPage/LandingPage";

function App() {
  const [res, setResp] = useState([]);
  const [resOne, setRespOne] = useState([]);

  useEffect(() => {
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
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
