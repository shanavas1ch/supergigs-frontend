import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import FreelancerCard from "./FreelancerCard";

function Section2() {
  const [freelancerDetails, setFreelancerDetails] = useState([]);

  const fetchFreelancerDetails = () => {
    fetch("http://localhost:4000/freelancerProfile")
      .then((response) => response.json())
      .then((response) => {
        setFreelancerDetails(response);
      });
  };

  useEffect(() => {
    fetchFreelancerDetails();
  }, []);
  return (
    <>
      <div className="container section2">
        <div className="row mt-2">
          {/* <div className='col-sm-12 col-md-1 col-lg-1'> </div> */}
          <div className="col-sm-12 col-md-12 col-lg-12">
            <div className="header-div">
              <h3 className="">
                <div className="d-flex justify-content-center">
                  {" "}
                  <strong className="header-1">
                    {" "}
                    Looking For A Place{" "}
                  </strong>{" "}
                  &nbsp;{" "}
                  <strong className="header-2">
                    {" "}
                    Where You Can Stand Out{" "}
                  </strong>{" "}
                </div>
                <div className="d-flex justify-content-center">
                  {" "}
                  <strong className="align-center header-1">
                    {" "}
                    And Land High-Paying Gigs?
                  </strong>
                </div>
              </h3>
            </div>
            <div>
              <p className="text-center sub-header">
                {" "}
                Look No Further. Find awesome and high-paying gigs{" "}
              </p>
              <p className="text-center sub-header">
                {" "}
                effortlessly & grow your career exponentially.
              </p>
            </div>
            <div className="card-row-1">
              <div className="d-flex">
                {freelancerDetails.slice(0, 4).map((element) => {
                  return (
                    <>
                      <FreelancerCard element={element} />
                    </>
                  );
                })}
              </div>
            </div>
            <div className="">
              <div className="d-flex">
                {freelancerDetails.slice(4, 8).map((element) => {
                  return (
                    <>
                      <FreelancerCard element={element} />
                    </>
                  );
                })}
              </div>
            </div>
            <br />
            <div className="justify-content-center d-flex mb-1 mt-2">
              {" "}
              <button
                type="submit"
                className="btn btn-primary button-basic signin section2-btn"
              >
                REGISTER
              </button>
            </div>
            <br />
            <br />
          </div>
          {/* <div className='col-sm-12 col-md-1 col-lg-1'> </div> */}
        </div>
      </div>
    </>
  );
}

export default Section2;
