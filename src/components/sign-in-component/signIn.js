import { GoogleLogin, GoogleOAuthProvider } from "@react-oauth/google";
import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./signin.css";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import linkedin from "react-linkedin-login-oauth2/assets/linkedin.png";
import { useGoogleLogin } from "@react-oauth/google";

function SignIn({ handleSignUpClick, handleSubmit, handleTextChange }) {
  const onSuccess = (e) => {
    console.log("Google Login Success >>", e);
  };
  const onFailure = (e) => {
    console.log("Google Login Failure >>", e);
  };

  const login = useGoogleLogin({
    onSuccess: (codeResponse) => console.log(codeResponse),
    onError: (error) => {
      console.log(error);
    },
  });
  const { linkedInLogin } = useLinkedIn({
    clientId: "86vhj2q7ukf83q",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <div className="pt-5 mt-5">
      {" "}
      <Link to="/">
        <FaTimes className="closeButton cursor-pointer" />{" "}
      </Link>
      <h3 className="text-center signin-heading">
        {" "}
        <strong> Sign In </strong>
      </h3>
      <div className="text-center">
        <small className=""> Sign in and get access to GIG</small>
      </div>
      <div className="pt-3 pb-3 d-flex justify-content-between">
        <Button
          className="signin-button-linkedin "
          variant="primary"
          onClick={linkedInLogin}
        >
          <FaLinkedinIn className="" /> &nbsp;
          <span className="font-align-center">Login using LinkedIn</span>
        </Button>
        {/* <img
          onClick={linkedInLogin}
          src={linkedin}
          alt="Sign in with Linked In"
          style={{ maxWidth: "180px", cursor: "pointer" }}
        /> */}

        <Button
          className="signin-button-google float-end"
          variant="primary"
          onClick={login}
        >
          <FaGoogle className="" />
          &nbsp; <span className="font-align-center">Login using Google</span>
        </Button>
        <GoogleLogin
          // clientId="1029773258537-qvh1g0qlm7tisoirjdhkdqqoier3r6vp.apps.googleusercontent.com"

          onSuccess={onSuccess}
          onFailure={onFailure}
          cookiePolicy={"single_host_origin"}
        />
        {/* </GoogleOAuthProvider> */}
        {/* <Button className="signin-button-google float-end" variant="primary">
          <FaGoogle className="" />
          &nbsp; <span className="font-align-center">Login using Google</span>
        </Button> */}

        {/* <GoogleOAuthProvider
          clientId="381986969505-9pv9f2j17kii7spheulmhnll36mhsh00.apps.googleusercontent.com"
          buttonText="shanavas"
        >
          <GoogleLogin
            // clientId="1029773258537-qvh1g0qlm7tisoirjdhkdqqoier3r6vp.apps.googleusercontent.com"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
            render={(renderProps) => (
              <>
                <button style={{ color: "red", background: "red" }}></button>
              </>
            )}
          />
        </GoogleOAuthProvider> */}
      </div>
      <p className="separator-line">
        <span>or</span>
      </p>
      <div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="pb-1 signIn-font"> Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email Id"
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <label className="pb-1 signIn-font">Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
              onChange={handleTextChange}
            />
          </div>
          <div className="mb-3">
            <div className="custom-control custom-checkbox">
              <div>
                <input
                  type="checkbox"
                  className="custom-control-input"
                  id="customCheck1"
                />
                <label className="custom-control-label ps-1 signIn-font">
                  <span className="align-center-rememberme">Remember me</span>
                </label>
                <p className="forgot-password signIn-font text-right float-end">
                  Forgot password?
                </p>
              </div>
            </div>
          </div>
          <div className="d-grid pt-2">
            <button
              type="submit"
              className="btn btn-primary button-basic signin"
            >
              SIGN IN
            </button>
          </div>
        </form>

        <div className="text-center">
          <small className="text-center cursor-pointer signIn-font pt-3">
            {" "}
            Don't have an account?{" "}
            <strong onClick={handleSignUpClick}>Sign Up </strong>{" "}
          </small>
        </div>
      </div>
    </div>
  );
}

export default SignIn;
