import React from "react";
import { Button } from "react-bootstrap";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";

function Page1Section2() {
  return (
    <div>
      <section>
        <h5 className="super-gigs-heading ">Your Basic Details</h5>
        <div className="form-wrapper">
          <form>
            <div className="d-flex">
              <label className="pb-1 signIn-font w-100 margin-right">
                {" "}
                First Name
                <input
                  type="text"
                  className="form-control "
                  placeholder="first name"
                />
              </label>

              <label className="pb-1 signIn-font w-100">
                {" "}
                Last Name
                <input
                  type="text"
                  className="form-control "
                  placeholder="first name"
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
                <textarea className=" form-control w-100"></textarea>
              </div>
            </div>
            <div className="pt-3 others d-flex justify-content-between">
              <label className="pb-1 signIn-font w-50  margin-right ">
                {" "}
                Email Address
                <input
                  type="text "
                  className="form-control border-0"
                  placeholder="email id"
                />
              </label>
              <div className="pt-3 d-flex verified">
                <BsFillCheckCircleFill className="verified-success " /> &nbsp;{" "}
                <p className="smaller-text verified-success">verified</p>
              </div>
            </div>
            <div className=" phone-number pt-3 d-flex justify-content-between">
              <label className="pb-1 signIn-font w-50  margin-right ">
                {" "}
                Phone Number
                <input
                  type="text "
                  className="form-control "
                  placeholder="phone number"
                />
              </label>
              <div className="pt-3">
                <Button
                  className="button-basic signin w-100 upload-font-size"
                  variant="primary"
                >
                  Verify
                </Button>
              </div>
            </div>
          </form>
        </div>
      </section>
    </div>
  );
}

export default Page1Section2;
