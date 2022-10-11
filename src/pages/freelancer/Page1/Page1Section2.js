import {React,useEffect, useState} from "react";
import { Button } from "react-bootstrap";
import { BsFillCheckCircleFill ,BsXCircleFill } from "react-icons/bs";
import { FiUser } from "react-icons/fi";
import { useLocation } from "react-router-dom";
function Page1Section2() {
  const { state } = useLocation();
  const [userSignUpData, setUserSignUpData] = useState();
  const [firstName, setFirstName] = useState();
  const [lastName, setLastName] = useState();
  const [bio, setBio] = useState();
  const [emailAddress,setEmailAddress] = useState();
  const [phoneNo, setPhoneNo] = useState();
  const [isEmailVerified, setIsEmailVerified] = useState();
  useEffect(() => {
      setUserSignUpData(state ? state : {});
      if(state){
        setFirstName(state && state.userData.attributes.profile.firstName );
        setLastName(state && state.userData.attributes.profile.lastName );
        setBio(state && state.userData.attributes.profile.bio);
        setEmailAddress(state && state.userData.attributes.email );
        setPhoneNo(state && state.userData.attributes.profile.protectedData.phoneNumber );
        setIsEmailVerified(state && state.userData.attributes.emailVerified);
      }
      
  }, []);
  
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
                  value={firstName}
                  onChange= {(e) => { 
                    setFirstName(e.target.value);
                  }}
                />
              </label>

              <label className="pb-1 signIn-font w-100">
                {" "}
                Last Name
                <input
                  type="text"
                  className="form-control "
                  placeholder="first name"
                  value={lastName}
                  onChange= {(e) => {
                    setLastName(e.target.value);
                  }}
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
                <textarea className=" form-control w-100" value={bio} onChange = {(e) => {
                  setBio(e.target.value);
                }}></textarea>
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
                  value={emailAddress}
                  onChange={(e) => {
                    setEmailAddress(e.target.value);
                  }}
                 />

                
              </label>
              {isEmailVerified ? (<> 
                <div className="pt-3 d-flex verified">
                <BsFillCheckCircleFill className="verified-success " /> &nbsp;{" "}
                <p className="smaller-text verified-success">verified</p>
              </div>
              </>) : (<> 
                <div className="pt-3 d-flex verified">
                <BsXCircleFill className="verified-failure " /> &nbsp;{" "}
                <p className="smaller-text verified-failure">yet to be verified</p>
              </div>
              </>)}
              

              
            </div>
            <div className=" phone-number pt-3 d-flex justify-content-between">
              <label className="pb-1 signIn-font w-50  margin-right ">
                {" "}
                Phone Number
                <input
                  type="text "
                  className="form-control "
                  placeholder="phone number"
                  value={phoneNo}
                  onChange={(e) => {
                    setPhoneNo(e.target.value);
                  }}

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
