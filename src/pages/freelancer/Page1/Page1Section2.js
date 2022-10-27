import axios from "axios";
import { React, useEffect, useState } from "react";
import { Button } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { BsFillCheckCircleFill, BsXCircleFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { Link, useLocation, useNavigate } from "react-router-dom";
function Page1Section2() {
  const [userDetails, setUserDetails] = useState({
    firstName: "",
    lastName: "",
    bio: "base",
    emailAddress: "",
    phoneNo: "",
    isEmailVerified: false,
  });

  let token = "";
  token = localStorage.getItem("accessToken");
  console.log("token >>", token);
  const navigate = useNavigate();
  useEffect(() => {
    axios
      .get("https://flex-api.sharetribe.com/v1/api/current_user/show", {
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log("Success:", response.data.data.attributes.profile);

        setUserDetails((prevState) => ({
          ...prevState,
          firstName: response.data.data.attributes.profile.firstName,
          lastName: response.data.data.attributes.profile.lastName,
          bio: response.data.data.attributes.profile.bio,
          emailAddress: response.data.data.attributes.email,
          phoneNo:
            response.data.data.attributes.profile.protectedData.phoneNumber,
          isEmailVerified: response.data.data.attributes.emailVerified,
        }));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);
  const onSubmit = (e) => {
    console.log(userDetails);
    console.log(token);
    axios
      .post(
        "https://flex-api.sharetribe.com/v1/api/current_user/update_profile",
        {
          firstName: userDetails.firstName,
          bio: userDetails.bio,
          publicData: userDetails,
        },
        {
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
          },
        }
      )
      .then((response) => {
        console.log("Success:", response);
        navigate("/freelancer/page2");
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  const handleChangeData = ({ target: { name, value } }) => {
    setUserDetails((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div>
      <section>
        <h5 className="super-gigs-heading ">Your Basic Details</h5>
        <div className="form-wrapper">
          <form onSubmit={onSubmit}>
            <div className="d-flex">
              <label className="pb-1 signIn-font w-100 margin-right">
                {" "}
                First Name
                <input
                  type="text"
                  className="form-control "
                  placeholder="first name"
                  name="firstName"
                  value={userDetails.firstName}
                  onChange={handleChangeData}
                />
              </label>

              <label className="pb-1 signIn-font w-100">
                {" "}
                Last Name
                <input
                  type="text"
                  className="form-control "
                  placeholder="first name"
                  name="lastName"
                  value={userDetails.lastName}
                  onChange={handleChangeData}
                />
              </label>
            </div>
            <div className="profile-photo  d-flex pt-2">
              <div className="profile-box rounded">
                <FiUser className="user-font-size" />
              </div>

              <div>
                <small className="signIn-font">Profile Photo</small>
                <p className="smaller-text">Profile Completion Progress</p>
                <div className="pt-1">
                  <Button
                    className="button-basic signin w-100 upload-font-size"
                    variant="primary"
                  >
                    UPLOAD
                  </Button>
                </div>
              </div>
            </div>
            <div className="bio-section">
              <div className="pt-2">
                <small className="signIn-font">Bio</small>
              </div>
              <div className="text-area-div">
                <textarea
                  className=" form-control w-100"
                  value={userDetails.bio}
                  name="bio"
                  onChange={handleChangeData}
                ></textarea>
              </div>
            </div>
            <div className="pt-3 others d-flex justify-content-between">
              <label className="pb-1 signIn-font w-50  margin-right ">
                {" "}
                Email Address
                <input
                  type="text"
                  className="form-control border-0"
                  placeholder="email id"
                  value={userDetails.emailAddress}
                  name="emailAddress"
                  onChange={handleChangeData}
                />
              </label>
              {userDetails.isEmailVerified ? (
                <>
                  <div className="pt-3 d-flex verified">
                    <BsFillCheckCircleFill className="verified-success " />{" "}
                    &nbsp;{" "}
                    <p className="smaller-text verified-success">verified</p>
                  </div>
                </>
              ) : (
                <>
                  <div className="pt-3 d-flex verified">
                    <BsXCircleFill className="verified-failure " /> &nbsp;{" "}
                    <p className="smaller-text verified-failure">
                      yet to be verified
                    </p>
                  </div>
                </>
              )}
            </div>
            <div className=" phone-number pt-3 d-flex justify-content-between">
              <label className="pb-1 signIn-font w-50  margin-right ">
                {" "}
                Phone Number
                <input
                  type="tel"
                  className="form-control "
                  placeholder="phone number"
                  name="phoneNo"
                  userDetails={userDetails.phoneNo}
                  onChange={handleChangeData}
                />
              </label>
              <div className="pt-3">
                {/* <Button
                  className="button-basic signin w-100 upload-font-size"
                  variant="primary"
                >
                  Verify
                </Button> */}
              </div>
            </div>
            <div className="d-flex justify-content-between mt-5">
              <div className="back d-flex ">
                <Link to="/find-gigs">
                  <p className="smaller-text cursor-pointer font-weight-600 ">
                    <BiArrowBack />
                    &nbsp; EXIT
                  </p>
                </Link>
              </div>

              <div className="save-and-continue d-flex flex-row-reverse">
                <p
                  className="smaller-text cursor-pointer font-weight-600 "
                  onClick={onSubmit}
                >
                  SAVE & CONTINUE&nbsp;
                  <BiRightArrowAlt />
                </p>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page1Section2;
