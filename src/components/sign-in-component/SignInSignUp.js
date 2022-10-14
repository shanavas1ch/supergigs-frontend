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
  const [signInDetails, setSignInDetails] = useState({
    email: "",
    password: "",
  });
  const dispatch = useDispatch();

  const signInValue = useSelector((state) => state.signIn.value);
  console.log("SignIN >>", signInValue);
  useEffect(() => {
    console.log(signInValue);

    if (signInValue.signInSuccess) {
      console.log("inside if");
      fetch(`${process.env.REACT_APP_LOCAL_HOST_URL}/api/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(signInValue.userDetails),
      })
        .then((response) => response)
        .then((data) => {
          if (data.status === 401) {
            toast.error("Username or Password is incorrect");
          }
          if (data.status === 200) {
            navigate("/find-gigs");
          }
        });
    }
  }, [signInValue]);
  const navigate = useNavigate();
  const handleSignUpClick = () => {
    if (showSignIn) {
      setShowSignUp(!showSignUp);
      setShowSignIn(!showSignIn);
    } else {
      setShowSignUp(!showSignUp);
      setShowSignIn(!showSignIn);
    }
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    // setShowSuccess(true);
    // setShowSignIn(false);
    // setShowSignUp(false);
    navigate("/freelancer/page1");
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
              {showSignIn && (
                // <GoogleOAuthProvider
                //   // clientId="1029773258537-qvh1g0qlm7tisoirjdhkdqqoier3r6vp.apps.googleusercontent.com"
                //   clientId="637570065678-jlt07711go3864ss5p118r3d73aedt1p.apps.googleusercontent.com"
                // >
                <SignIn />
                // </GoogleOAuthProvider>
              )}
              {showSignUp && <SignUp handleSignUpClick={handleSignUpClick} />}
            </div>
            <div className="col-sm-12 col-md-2 col-lg-2 col-xl-2"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
