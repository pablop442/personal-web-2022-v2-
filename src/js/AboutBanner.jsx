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
                alt="Pablo Peña Image"
              />
            </div>
            <div className="col-lg-8 col-12">
              <p className="lead">
                You read right! I am a seasoned legal professional who embarked on an exciting
                journey that led me to the dynamic world of technology.<br></br>
                Eager to dive into this rapidly evolving field, I enrolled in a
                rigorous programming bootcamp, where I honed my skills in
                JavaScript, SQL, Python, and various other programming
                languages. As I delved deeper into the world of coding, I found
                my true calling in the realm of quality assurance (QA) and
                automation testing.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutBanner;
