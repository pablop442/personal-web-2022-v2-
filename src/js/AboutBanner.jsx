import React from "react";
import "./aboutBanner.css";
import ProfileImg from "../img/ProfileImg.png";

const AboutBanner = () => {
  return (
    <>
      <section
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start about-banner"
        id="about"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <h1 className="text-white my-3">Delivering Confidence in Software </h1>
            <div className="col-lg-4 ">
              <img
                className="img-fluid d-none d-sm-block"
                src={ProfileImg}
                alt="Pablo Peña"
              />
            </div>
            <div className="col-lg-8 col-12">
              <p className="lead">
                Quality Assurance Engineer with over 3 years of experience in manual and automated testing for web and mobile applications. Passionate about software testing and test automation. A natural problem solver, I build solutions that improve product quality and user experience. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
