import React, { useEffect, useState } from "react";
import { Trans, useTranslation } from "react-i18next";
import "./App.css";
import NavBar from "./components/navbar-component/NavBar";

function App() {
  const [res, setResp] = useState([]);
  const [resOne, setRespOne] = useState([]);
  const { t } = useTranslation();

  useEffect(() => {
    // fetch("http://localhost:5000/comments")
    //   .then((response) => response.json())
    //   .then((response) => {
    //     console.log(response);
    //     setResp(response);
    //   });
    fetch("http://localhost:4000/api")
      .then((response) => {
        // console.log(response.text());
        return response.text();
      })
      .then((response) => {
        console.log(response);
        setRespOne(response);
      });
    fetch("http://localhost:4000/api/one")
      .then((response) => {
        // console.log(response.text());
        return response.json();
      })
      .then((response) => {
        console.log(response);
        setResp(response);
      });
  }, []);
  return (
    <div>
      {res.name}
      <br />
      {resOne}
      <NavBar />
      <div className="App">
        <header className="App-header">
          <p>
            <Trans i18nKey="description.part1">
              Edit <code>src/App.js</code> and save to reload.
            </Trans>
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            {t("description.part2")}
          </a>
        </header>
      </div>
    </div>
  );
}

export default App;
