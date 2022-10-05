import React from "react";
import Footer from "../../components/footer-component/Footer";
import MainComponent from "../../components/main-component/MainComponent";
import NavBar from "../../components/navbar-component/NavBar";

function LandingPage() {
  return (
    <div>
      <NavBar />
      <MainComponent />
      <Footer />
    </div>
  );
}

export default LandingPage;
