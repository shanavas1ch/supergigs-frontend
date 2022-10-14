import React from "react";
import userIcon from "../../../assets/freelancer-user-icon.png";
import { IoLocationOutline } from "react-icons/io5";
import { Button } from "react-bootstrap";

function FreelancerCard({element}) {

  console.log(element)
  return (
    <>
      <div className="col freelancer-card">
        <div className="d-flex header-div">
          <div className="img-div">
            <img src={userIcon} className="user-card-icon" />
          </div>
          <div className="title-div">
            <strong className="org-name">{element.organization}</strong>{" "}
          </div>
        </div>
        <div> 

        <div className="freelancer-role">
          <strong> {element.role}</strong>
        </div>
        <div className="d-flex location">
          <div> <IoLocationOutline className="location-icon" /></div>
           &nbsp; <div>  <p className="location-text"> {element.location}</p></div>
        </div>
        <div className="d-flex">
          <Button className="freelancer-card-button" variant="primary">
            Full Time
          </Button>
          <Button className="freelancer-card-button" variant="primary">
            Design
          </Button>
        </div>
        </div>
        <div>
          <div className="d-flex justify-content-between rate-div">
            <strong className="rate"> {element.rate} </strong>
            <p className="days"> {element.daysLeft} Days Left</p>
          </div>
        </div>
      </div>
    </>
  );
}

export default FreelancerCard;
