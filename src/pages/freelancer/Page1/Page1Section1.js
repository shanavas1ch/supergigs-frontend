import React from "react";
import { ProgressBar } from "react-bootstrap";
import gLoadingOne from "../../../assets/g-loading-1.png";
import imageIcon from "../../../assets/image-icon.png";

function Page1Section1() {
  return (
    <div>
      {" "}
      <section>
        <div className="">
          <h5 className="super-gigs-heading">
            Hey SuperGigster!Help Us Know You Better So We Can Help You Discover
            Awesome Gigs!
          </h5>
        </div>
        <div className="profile-completion d-flex justify-content-between">
          <p className="smaller-text">Profile Completion Progress</p>
          <small>10%</small>
        </div>
        <div className="progress-bar">
          <ProgressBar now={10} />
        </div>
        <div className="bread-crumb-menu">
          <div>
            <div className="mt-2">
              <div className="d-flex">
                <div className="d-block">
                  <div>
                    <img
                      src={imageIcon}
                      alt="image-icon"
                      className="image-icon"
                    />
                  </div>
                  <div className="vl ms-1"> </div>
                </div>

                <div className="ms-3">
                  <div>
                    <span>Personal Information</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <div className="d-block">
                  <div>
                    <img
                      src={imageIcon}
                      alt="image-icon"
                      className="image-icon"
                    />
                  </div>
                  <div className="vl ms-1"> </div>
                </div>

                <div className="ms-3">
                  <div>
                    <span>Professional Information</span>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-2">
              <div className="d-flex">
                <div className="d-block">
                  <div>
                    <img
                      src={imageIcon}
                      alt="image-icon"
                      className="image-icon"
                    />
                  </div>
                </div>

                <div className="ms-3">
                  <div>
                    <span>Rate on your profile</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <br />
        <br />
        <br />

        <div className="show-image-loading d-flex justify-content-center">
          <img src={gLoadingOne} alt="loader" className="g-loading" />
        </div>
      </section>
    </div>
  );
}

export default Page1Section1;
