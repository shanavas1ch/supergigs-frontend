import React from "react";
import BannerComponent from "../banner-component/BannerComponent";
import {
  BrowserRouter as Router,
  Route,
  Routes,
} from "react-router-dom";

import SignIn from "../sign-in-component/signIn";
function MainComponent() {
  return (
    <div className="main-content-height">
  
      <div> 
      <Router> 
      <Routes>
        <Route exact path="/" element={<BannerComponent/>} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
      </Router>
       

        </div>
    </div>
  );
}

export default MainComponent;
