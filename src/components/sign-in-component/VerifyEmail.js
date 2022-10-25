import React from "react";
import { useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";

function VerifyEmail() {
  const [searchParams] = useSearchParams();
  console.log(searchParams.get("t")); // ▶ URLSearchParams {}
  let verificationToken = searchParams.get("t");
  const navigate = useNavigate();

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
        navigate("/freelancer/page1");
      })
      .then((res) => {
        console.log(res);
      });
  });
  return <div>VerifyEmail</div>;
}

export default VerifyEmail;
