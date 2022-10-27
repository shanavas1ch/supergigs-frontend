import axios from "axios";
import React, { useEffect, useState } from "react";
import { BiArrowBack, BiRightArrowAlt } from "react-icons/bi";
import { Link, useNavigate } from "react-router-dom";
import Page1Section1 from "../../pages/freelancer/Page1/Page1Section1";
import Page1Section2 from "../../pages/freelancer/Page1/Page1Section2";
import NavBar from "../navbar-component/NavBar";
import "./freelancer.css";

function FreeLancerComponentOne(props) {
  const navigate = useNavigate();

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
                  <Page1Section1 />
                </div>
                <div className="col-sm-12 col-md-1 col-lg-1 col-xl-1"></div>
                <div className="col-sm-12 col-md-7 col-lg-7 col-xl-7">
                  <Page1Section2 />
                  <br />
                  <br />

                  {/* <div className="save-and-continue d-flex ">
                    <p
                      onClick={handleClickSave}
                      className="smaller-text cursor-pointer font-weight-600 "
                    >
                      SAVssssE&nbsp;
                      <BiRightArrowAlt />
                    </p>
                  </div> */}
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

export default FreeLancerComponentOne;
