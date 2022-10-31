import { React, useState } from "react";
import { Button, Spinner } from "react-bootstrap";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";
import { GoogleLogin, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { useLinkedIn } from "react-linkedin-login-oauth2";
import { useDispatch } from "react-redux";
import { googleSignUpURL, signUpURL } from "../../service/httpUrl";
import { toast } from "react-toastify";
import jwtDecode from "jwt-decode";
import { useRef } from "react";
import {
  googleSignUp,
  googleSignUpCall,
  signUp,
  signUpCall,
} from "../../reducers/signup_reducer";

function SignUpForm() {
  const [userSignUpData, setUserSignUpData] = useState();
  const [showSpinner, setShowSpinner] = useState(false);

  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();
  const onSuccess = (e) => {
    console.log("Google Login Success >>", e);
    var token = e.credential;
    var decoded = jwtDecode(token);
    console.log(decoded);
    localStorage.setItem("username", decoded.email);
    dispatch(
      googleSignUpCall(googleSignUpURL, {
        token: e.credential,
        clientId: e.clientId,
      })
    )
      .then((response) => {
        console.log(response);
        if (response.status == 200) {
          let accessToken = response.data.data.access_token;
          let refreshToken = response.data.data.refresh_token;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("signIn_success", true);
          navigate("/freelancer/page1");
        } else if (response.status == 409) {
          toast.warn("Email Already Exist");
        }
      })
      .catch((error) => {
        console.log("err", error);
        if (error.status == 409) {
        }
      });
  };

  const password = useRef({});
  password.current = watch("password", "");

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

  const onSubmit = (e) => {
    console.log(e);
    setShowSpinner(true);
    console.log(`${process.env.REACT_APP_LOCAL_HOST_URL}/api/signup`);
    localStorage.setItem("username", e.username);
    localStorage.setItem("password", e.password);
    dispatch(
      signUpCall(signUpURL, {
        username: e.username,
        password: e.password,
        firstName: e.firstName,
        lastName: e.lastName,
      })
    )
      .then((response) => {
        console.log(response);
        setShowSpinner(false);
        if (response.status == 200) {
          let accessToken = response.data.data.access_token;
          let refreshToken = response.data.data.refresh_token;
          localStorage.setItem("accessToken", accessToken);
          localStorage.setItem("refreshToken", refreshToken);
          localStorage.setItem("signIn_success", true);

          navigate("/freelancer/page1");
        } else if (response.status === 409) {
          toast.warn("Email Already Exist");
        }
      })
      .catch((error) => {
        console.log("err", error);
        setShowSpinner(false);
        if (error.status == 409) {
          toast.error("Email Already Exist");
        }
      });
  };
  return (
    <div>
      <div className="signinform pt-4">
        <div className="signup-active-form-wrapper">
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
          <div className="mt-2">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label className="pb-1 signIn-font asterisk">
                      {" "}
                      First Name{" "}
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter first name"
                      {...register("firstName", {
                        required: "First Name is required",
                      })}
                    />
                    {errors.firstName && (
                      <span className="text-danger smaller-text" role="alert">
                        {errors.firstName.message}
                      </span>
                    )}
                  </div>
                  <div className="col">
                    <label className="pb-1 signIn-font asterisk">
                      {" "}
                      Last Name
                    </label>
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Enter Last Name"
                      {...register("lastName", {
                        required: "Last Name is required",
                      })}
                    />
                    {errors.lastName && (
                      <span className="text-danger smaller-text" role="alert">
                        {errors.lastName.message}
                      </span>
                    )}
                  </div>
                </div>
                <div className="mt-2">
                  <label className="pb-1 signIn-font asterisk">
                    {" "}
                    Email address
                  </label>
                  <input
                    type="email"
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
              </div>

              <div className="mb-3">
                <div className="row">
                  <div className="col">
                    <label className="pb-1 signIn-font asterisk">
                      New Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      {...register("password", {
                        required: "Password is required",

                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                      })}
                    />
                    {errors.password && (
                      <span className="text-danger smaller-text" role="alert">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                  <div className="col">
                    <label className="pb-1 signIn-font asterisk">
                      Confirm Password
                    </label>
                    <input
                      type="password"
                      className="form-control"
                      placeholder="Enter password"
                      {...register("confirmpassword", {
                        required: "Confirm Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must have at least 8 characters",
                        },
                        validate: (value) =>
                          value === password.current ||
                          "The passwords do not match",
                      })}
                    />
                    {errors.confirmpassword && (
                      <span className="text-danger smaller-text" role="alert">
                        {errors.confirmpassword.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              <div className="mb-3">
                <div className="custom-control custom-checkbox">
                  <div>
                    <label className="custom-control-label ps-1 signIn-font">
                      <input
                        type="checkbox"
                        className="custom-control-input "
                        id="customCheck1"
                        defaultChecked
                        {...register("checkbox", {
                          required: "please check this, if you want to proceed",
                        })}
                      />
                      &nbsp;&nbsp;
                      <span className="align-center-rememberme">
                        I agree <strong>Terms and Conditions</strong>
                      </span>
                    </label>
                  </div>
                  {errors.checkbox && (
                    <span className="text-danger smaller-text" role="alert">
                      {errors.checkbox.message}
                    </span>
                  )}
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
                    "SIGN UP"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SignUpForm;
