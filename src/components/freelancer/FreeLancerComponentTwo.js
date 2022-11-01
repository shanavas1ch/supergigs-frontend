import React from "react";
import NavBar from "../navbar-component/NavBar";
import "./freelancer.css";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Page2Section1 from "../../pages/freelancer/Page2/Page2Section1";
import Page2Section2 from "../../pages/freelancer/Page2/Page2Section2";

function FreeLancerComponentTwo() {
  return (
    <div>
      <NavBar />
      <div className="free-lancer-content">
        <div className="container-fluid">
          <div className="row">
            <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
            <div className="col-sm-12 col-md-9 col-lg-9 col-xl-9">
              <div className="row">
                <div className="col-sm-12 col-md-4 col-lg-4 col-xl-4">
                  <Page2Section1 />
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                  <Page2Section2 />
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FreeLancerComponentTwo;
