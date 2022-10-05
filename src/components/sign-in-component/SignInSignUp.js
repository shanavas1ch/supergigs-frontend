import React from "react";
import { useState } from "react";
import SignInBannerComponent from "../banner-component/SignInBannerComponent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInSignUp() {
  const [showSignIn, setShowSignIn] = useState(true);
  const handleSignUpClick = () => {
    setShowSignIn(!showSignIn);
  };

  return (
    <div className="">
      <div className="main-container d-flex justify-content-center ">
        {/* <div className=""> */}
        <div className=" col signIn-left d-flex  justify-content-center align-items-center carousal-background">
          <SignInBannerComponent />
        </div>
        <div className="col signIn-outer-div ">
          {showSignIn ? (
            <SignIn handleSignUpClick={handleSignUpClick} />
          ) : (
            <SignUp />
          )}
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
