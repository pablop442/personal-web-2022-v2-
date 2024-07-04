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
            <h1 className="text-white my-3">From Lawyer to QA engineer?</h1>
            <div className="col-lg-4 ">
              <img
                className="img-fluid d-none d-sm-block"
                src={ProfileImg}
                alt="Pablo Peña"
              />
            </div>
            <div className="col-lg-8 col-12">
              <p className="lead">
                I'm a lawyer who decided to pursue his passion for technology by enrolling in a programming bootcamp. Down the road I discovered the amazing world of Quality Assurance and stayed there ever since.<br></br>
                Passionate about software testing and test automation. I consider myself a natural problem solver, creating solutions that help solve real-life problems through technology.
                Always eager to learn new thechnologies and people. 
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
