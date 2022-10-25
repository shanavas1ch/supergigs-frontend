import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { BsFillCheckCircleFill } from "react-icons/bs";
import { useNavigate, useSearchParams } from "react-router-dom";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("t")); // ▶ URLSearchParams {}
  let verificationToken = searchParams.get("t");
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(true);
  useEffect(() => {
    let username = localStorage.getItem("username");
    let password = localStorage.getItem("password");

    fetch("http://localhost:3500/verify", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        token: verificationToken,
        username: username,
        password: password,
      }),
    })
      .then((res) => {
        console.log("verified email repsonse", res);
        setIsLoading(false);
      })
      .then((res) => {
        console.log(res);
      });
  });
  return (
    <>
      {isLoading ? (
        <>
          <div className="">
            <div class="main-container d-flex justify-content-center align-items-center">
              <div class="spinner-border" role="status"></div>
              &nbsp;&nbsp;<p>Loading . . </p>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="success-message ">
            <div className="">
              <div className="text-center ">
                {" "}
                <BsFillCheckCircleFill className="success-icon" />{" "}
              </div>
              <br />
              <p className="text-center signIn-font success-fontsize">
                <strong>Email Registered Succcessfully</strong>
              </p>
              <br />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default VerifyEmail;
