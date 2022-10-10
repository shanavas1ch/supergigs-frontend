import React from "react";
import { Button } from "react-bootstrap";
import { FaGoogle, FaLinkedinIn } from "react-icons/fa";

function SignUpForm() {
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
            <form>
              <div className="mb-3">
                <label className="pb-1 signIn-font"> Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter Email Id"
                />
              </div>
              <div className="mb-3">
                <label className="pb-1 signIn-font">Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
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
