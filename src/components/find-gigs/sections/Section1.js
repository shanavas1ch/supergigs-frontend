import { Button } from "react-bootstrap";
import React from "react";
import { FiSearch } from "react-icons/fi";
import bannerImage1 from "../../../assets/bannerImage1.png";
import "../findgigs.css";

function Section1() {
  return (
    <div className="main-container pt-3">
      <div className="d-flex">
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
        <div className="col-sm-12 col-md-2 col-lg-2">
          <img src={bannerImage1} alt="bannerImage1" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-6 col-lg-6">
          <h3 className="banner-heading text-center">
            <strong>
              The World's Agile Talent Platform that perfectly fits your
              business needs.
            </strong>
          </h3>
          <br />
          <div className="text text-center">
            <p>
              Discover and Unleash your freelancing Superpower and be the hero
              you are !
            </p>
          </div>
          <br />
          <div className="text-alsearch-bar pt-3">
            <div className="d-flex">
              <input
                type="text"
                className="form-control "
                placeholder="Keywords, Jobs, Categories ,Locations .."
              />
              <div className="search-bar-icon">
                <FiSearch />
              </div>
            </div>
          </div>
          <br />
          <div className="suggestion-keys">
            <div className="d-flex">
              <div className="d-flex align-items-center">
                <p className="margin-right smaller-text">Suggested Keywords </p>
              </div>

              <div className="suggested-buttons">
                <Button className="button-basic margin-right" variant="primary">
                  Find Gigs
                </Button>
                <Button className="button-basic margin-right" variant="primary">
                  Find Gigs
                </Button>
                <Button className="button-basic margin-right" variant="primary">
                  Find Gigs
                </Button>
                <Button className="button-basic margin-right" variant="primary">
                  Find Gigs
                </Button>
              </div>
            </div>
          </div>
        </div>

        <div className="col-sm-12 col-md-2 col-lg-2">
          <img src={bannerImage1} alt="bannerImage1" className="img-fluid" />
        </div>
        <div className="col-sm-12 col-md-1 col-lg-1"></div>
      </div>
    </div>
  );
}

export default Section1;
