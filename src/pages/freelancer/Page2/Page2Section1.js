import { React, useEffect, useState } from "react";
import { ProgressBar } from "react-bootstrap";
import { Link } from "react-router-dom";
import gLoadingOne from "../../../assets/g-loading-1.png";
import imageIcon from "../../../assets/image-icon.png";
import loaderSuperman from "../../../assets/loader-superman.png";

function Page2Section1() {
  const [iconPosition, setIconPosition] = useState(0);

  let progress = 20;

  useEffect(() => {
    setIconPosition(progress - 4);
  }, [iconPosition, progress]);
  return (
    <div>
      <section>
        <div className="">
          <h5 className="super-gigs-heading">
            Hey SuperGigster!Help Us Know You Better So We Can Help You Discover
            Awesome Gigs!
          </h5>
        </div>
        <div className="profile-completion d-flex justify-content-between">
          <p className="smaller-text mb-2">Profile Completion Progress</p>
          <small className="smaller-text mb-2">{progress}%</small>
        </div>
        <div className="progress-bar">
          <ProgressBar now={progress} />
        </div>
        <div>
          <img
            className={"loader-superman-size"}
            style={{
              position: "relative",
              left: iconPosition + "%",
              bottom: "19px",
              transform: "rotate(-36deg)",
            }}
            src={loaderSuperman}
          />{" "}
        </div>
        <div className="bread-crumb-menu">
          <div>
            <Link to="/freelancer/page1">
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
            </Link>
            <Link to="/freelancer/page2">
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
                    <div className=" ms-1"> </div>
                  </div>

                  <div className="ms-3">
                    <div>
                      <span>Professional Information</span>
                    </div>
                  </div>
                </div>
              </div>
            </Link>
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

export default Page2Section1;
