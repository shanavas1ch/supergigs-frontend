import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaLinkedinIn, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";
import "./signin.css";

function SignIn({ handleSignUpClick, handleSubmit, handleTextChange }) {
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
      <div className="pt-3 pb-3">
        <Button className="signin-button-linkedin" variant="primary">
          <FaLinkedinIn className="" /> &nbsp;
          <span className="font-align-center">Login using LinkedIn</span>
        </Button>

        <Button className="signin-button-google float-end" variant="primary">
          <FaGoogle className="" />
          &nbsp; <span className="font-align-center">Login using Google</span>
        </Button>
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
