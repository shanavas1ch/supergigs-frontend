// import { useGoogleLogin } from "@react-oauth/google";
import { GoogleLogin } from "@react-oauth/google";
import axios from "axios";
import jwtDecode from "jwt-decode";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { FaLinkedinIn, FaTimes } from "react-icons/fa";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { siginInInitial, signInCall } from "../../reducers/sigin_reducer";
import { signInURL } from "../../service/httpUrl";
import "./signin.css";

function SignIn({ handleSignUpClick, handleTextChange }) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showSpinner, setShowSpinner] = useState(false);
  const onSuccess = (e) => {
    console.log("Google Login Success >>", e);
    var token = e.credential;
    var decoded = jwtDecode(token);
    console.log(decoded);

    localStorage.setItem("username", decoded.email);
    axios
      .post("http://localhost:3500/api/login/google", {
        token: e.credential,
        clientId: e.clientId,
      })
      .then((response) => {
        console.log("Success sigin :", response);
        if (response.data.status == 200) {
          let accessToken = response.data.data.access_token;
          let refreshToken = response.data.data.refresh_token;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("signIn_success", true);
          navigate("/find-gigs");
        }
      })
      .catch((error) => {
        console.log(error);
        if (error.response.status === 401) {
          toast.error("Unauthorized User");
        }
      });
  };
  const onFailure = (e) => {
    console.log("Google Login Failure >>", e);
  };
  const { linkedInLogin } = useLinkedIn({
    clientId: "86rzr5gb2xe60u",
    redirectUri: `${window.location.origin}/linkedin`, // for Next.js, you can use `${typeof window === 'object' && window.location.origin}/linkedin`
    onSuccess: (code) => {
      console.log(code);
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();
  const signInValue = useSelector((state) => state.signIn.value);
  useEffect(() => {
    dispatch(siginInInitial());
    console.log(",,,,", signInValue);
    if (signInValue.signInSuccess) {
      console.log("if");
      setShowSpinner(true);
    } else if (signInValue.signInError) {
      console.log("else");
      setShowSpinner(false);
    }
  }, [signInValue]);

  const onSubmit = (e) => {
    console.log(e);
    localStorage.setItem("username", e.username);
    localStorage.setItem("password", e.password);
    setShowSpinner(!showSpinner);
    dispatch(signInCall(signInURL, e));
  };

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
      <div className="pt-3 pb-3 row">
        <Button
          className="col-md-6 col-lg-6 signin-button-linkedin margin-right"
          variant="primary"
          onClick={linkedInLogin}
        >
          <FaLinkedinIn className="" /> &nbsp;
          <span className="font-align-center">Login using LinkedIn</span>
        </Button>

        <div className="col-md-6 col-lg-6 d-flex justify-content-center">
          {/* <Button className="signin-button-google float-end" variant="primary">
            <FaGoogle className="" />
            &nbsp; <span className="font-align-center">Login using Google</span>
          </Button> */}
          <GoogleLogin
            className="gooogle"
            onSuccess={onSuccess}
            onFailure={onFailure}
            cookiePolicy={"single_host_origin"}
          />
        </div>
      </div>
      <p className="separator-line">
        <span>or</span>
      </p>
      <div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label className="pb-1 signIn-font"> Email address</label>
            <input
              type="text"
              name="email"
              className="form-control"
              placeholder="Enter Email Id"
              {...register("username", {
                required: "Email Id is required",
                pattern: {
                  value: /\S+@\S+\.\S+/,
                  message: "Entered value does not match email format",
                },
              })}
            />
            {errors.username && (
              <span className="text-danger smaller-text" role="alert">
                {errors.username.message}
              </span>
            )}
          </div>

          <div className="mb-3">
            <label className="pb-1 signIn-font">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              placeholder="Enter password"
              {...register("password", {
                required: "Password is required",
              })}
            />
            {errors.password && (
              <span className="text-danger smaller-text" role="alert">
                {errors.password.message}
              </span>
            )}
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
                <p className="forgot-password signIn-font text-right float-end cursor-pointer">
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
              {showSpinner ? (
                <>
                  <Spinner
                    as="span"
                    animation="border"
                    size="sm"
                    role="status"
                    aria-hidden="true"
                  />
                  <span className="visually-hidden">Loading...</span>
                </>
              ) : (
                "SIGN IN"
              )}
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
