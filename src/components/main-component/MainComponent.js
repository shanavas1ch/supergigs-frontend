import React from "react";
import BannerComponent from "../banner-component/BannerComponent";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import SignIn from "../sign-in-component/signIn";
import Signup from "../sign-in-component/signup";
function MainComponent() {
  return (
    <div className="main-content-height">
      <div>
        <Router>
          <Routes>
            <Route exact path="/" element={<BannerComponent />} />
            <Route path="/signin" element={<SignIn />} />
            <Route path="/signup" element={<Signup />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default MainComponent;
