import { GoogleOAuthProvider } from "@react-oauth/google";
import React, { useState } from "react";
import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { sigInReset, signIn } from "../../reducers/sigin_reducer";
import SignInBannerComponent from "../banner-component/SignInBannerComponent";
import SignIn from "./SignIn";
import SignUp from "./SignUp";

function SignInSignUp() {
  const [showSignIn, setShowSignIn] = useState(true);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showSignUp, setShowSignUp] = useState(false);

  const signInValue = useSelector((state) => state.signIn.value);
  console.log("SignIN >>", signInValue);
  useEffect(() => {
    console.log(signInValue);
    if (signInValue.signInSuccess) {
      navigate("/find-gigs");
    } else {
    }
  }, [signInValue]);
  const navigate = useNavigate();
  const handleSignUpClick = (e) => {
    console.log(e);
    if (showSignIn) {
      setShowSignUp(!showSignUp);
      setShowSignIn(!showSignIn);
    } else {
      setShowSignUp(!showSignUp);
      setShowSignIn(!showSignIn);
    }
  };

  return (
    <div className="">
      <div className="main-container d-flex justify-content-center ">
        {/* <div className=""> */}
        <div className=" col signIn-left d-flex  justify-content-center align-items-center carousal-background">
          <SignInBannerComponent />
        </div>
        <div className="col ">
          {showSuccess && (
            <>
              {" "}
              <div className="success-message ">
                <div className="">
                  <div className="text-center ">
                    {" "}
                    <BsFillCheckCircleFill className="success-icon" />{" "}
                  </div>
                  <br />
                  <p className="text-center signIn-font success-fontsize">
                    <strong> Registered Succcessfully</strong>
                  </p>
                  <br />
                  <div className="d-flex justify-content-center ">
                    <small className="text-center width-60">
                      {" "}
                      Click on the activation link we have sent to your account
                      to get started!
                    </small>
                  </div>
                </div>
              </div>
            </>
          )}

          <div className="d-flex ">
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
            <div className="col-sm-12 col-md-8 col-lg-8 col-xl-8 ">
              <GoogleOAuthProvider
                // clientId="1029773258537-qvh1g0qlm7tisoirjdhkdqqoier3r6vp.apps.googleusercontent.com"
                clientId="381986969505-9pv9f2j17kii7spheulmhnll36mhsh00.apps.googleusercontent.com"
              >
                {showSignIn && <SignIn handleSignUpClick={handleSignUpClick} />}
                {showSignUp && <SignUp handleSignUpClick={handleSignUpClick} />}
              </GoogleOAuthProvider>
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
