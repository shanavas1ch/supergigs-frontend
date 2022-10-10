import { Button, Card } from "react-bootstrap";
import { React, useState } from "react";
import { FaGoogle, FaLinkedinIn, FaTimes } from "react-icons/fa";
import signinFreelancer from "../../assets/signin-Freelancer.png";
import signinHireTalent from "../../assets/signin-hire-talent.png";
import SignIn from "./SignIn";
import "./signin.css";
import { Link } from "react-router-dom";
import SignUpForm from "./SignUpForm";
function SignUp({ handleSignUpClick }) {
  const [classForGigs, setClassForGigs] = useState("");
  const [classForTalent, setClassForTalent] = useState("");
  const [textWhiteGigs, setTextWhiteGigs] = useState("");
  const [textWhiteTalent, setTextWhiteTalent] = useState("");

  const handleClickForGigs = (e) => {
    if (e === "Gigs") {
      setClassForGigs("show-active-gigs");
      setTextWhiteGigs("text-white");
      setClassForTalent("");
      setTextWhiteTalent("");
    } else if (e === "Talents") {
      setClassForTalent("show-active-talent");
      setTextWhiteTalent("text-white");
      setClassForGigs("");
      setTextWhiteGigs("");
    }
  };

  return (
    <>
      <div>
        <div className="pt-4">
          <div className=" ">
            <div>
              {" "}
              <Link to="/">
                <FaTimes className="closeButton cursor-pointer" />{" "}
              </Link>
            </div>
            <h3 className="text-center signin-heading">
              {" "}
              <strong> Sign Up </strong>
            </h3>
            <div className="text-center">
              <small className=""> Sign in and get access to GIG</small>
            </div>
            <br />

            <div className="d-flex">
              <Button
                className="signup-card-button align-margin"
                onClick={() => handleClickForGigs("Gigs")}
              >
                <Card className={"sign-up-card " + classForGigs}>
                  <Card.Img
                    variant="top"
                    src={signinFreelancer}
                    className="freelancerLogo "
                  />
                  <small
                    className={
                      "text-center cursor-pointer signIn-font pt-1 pb-1 " +
                      textWhiteGigs
                    }
                  >
                    Find GIGS
                  </small>
                </Card>
              </Button>

              <Button
                className="signup-card-button"
                onClick={() => handleClickForGigs("Talents")}
              >
                <Card className={"sign-up-card " + classForTalent}>
                  <Card.Img
                    variant="top"
                    src={signinHireTalent}
                    className="freelancerLogo "
                  />

                  <small
                    className={
                      "text-center cursor-pointer signIn-font pt-1 pb-1 " +
                      textWhiteTalent
                    }
                  >
                    Hire Talents
                  </small>
                </Card>
              </Button>
              {/* </div> */}
            </div>

            {classForGigs == "show-active-gigs" ||
            classForTalent == "show-active-talent" ? (
              <>
                <SignUpForm />
              </>
            ) : (
              <></>
            )}
          </div>
        </div>
      </div>
      <div className="text-center">
        <small className="text-center cursor-pointer signIn-font pt-3">
          {" "}
          I have an account{" "}
          <strong onClick={handleSignUpClick}>Sign In </strong>{" "}
        </small>
      </div>
    </>
  );
}

export default SignUp;
