import { React, useState } from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useEffect } from "react";

function SignUpForm() {
  const [userSignUpData, setUserSignUpData] = useState();
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const userSignUp = () => {
    fetch("http://localhost:4000/data")
      .then((response) => response.json())
      .then((response) => {
        setUserSignUpData(response);
        localStorage.setItem("signIn_success", true);
        navigate("/freelancer/page1", { state: { userData: response } });
      });
  };

  const onSubmit = (e) => {
    console.log(e);

    userSignUp(e);
  };
  return (
    <div>
      {" "}
      <div className="signinform pt-4">
        <div className="signup-active-form-wrapper">
          <div className="">
            <Button className="signin-button-linkedin" variant="primary">
              <FaLinkedinIn className="" /> &nbsp;
              <span className="font-align-center">Login using LinkedIn</span>
            </Button>

            <Button
              className="signin-button-google float-end"
              variant="primary"
            >
              <FaGoogle className="" />
              &nbsp;{" "}
              <span className="font-align-center">Login using Google</span>
            </Button>
          </div>
          <p className="separator-line">
            <span>or</span>
          </p>
          <div>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="mb-3">
                <label className="pb-1 signIn-font"> Email address</label>
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
              <div className="mb-3">
                <label className="pb-1 signIn-font">Password</label>
                <input
                  type="password"
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
                      <span className="align-center-rememberme">
                        I agree <strong>Terms and Conditions</strong>
                      </span>
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
                  SIGN UP
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
