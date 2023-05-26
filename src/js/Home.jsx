import React from "react";
import "./home.css";
import Navbar from "./Navbar.jsx";
import ContactMe from "./ContactMe";
import UpperBanner from "./UpperBanner";
import AboutBanner from "./AboutBanner";
import Skills from "./Skills";
import MyResume from "./MyResume";
import MyPortafolio from "./MyPortafolio";
import Footer from "./Footer";


function Home() {
  return (
    <>
      <Navbar />
      <ContactMe />
      <UpperBanner />
      <AboutBanner />
      <Skills />
      <MyResume />
      <MyPortafolio />
      <Footer />


    </>
  );
}

export default Home;
