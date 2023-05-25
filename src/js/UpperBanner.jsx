import React from "react";
import "./upperBanner.css";
import BgImgReducedSize from "../img/BgImgReducedSize.jpg";

import Typical from "react-typical";
import UpperBtn from "./UpperBtn.jsx";
let bgImg = {
  background: `linear-gradient(0deg, rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(${BgImgReducedSize})`,
  backgroundPosition: `bottom`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
  background: `linear-gradient(0deg, rgba(10, 17, 40, 0.7), rgba(10, 17, 40, 0.7)), url(${BgImgReducedSize})`,
  backgroundPosition: `bottom`,
  backgroundSize: "cover",
  backgroundRepeat: "no-repeat",
};

const UpperBanner = () => {
  return (
    <>
      <section
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start upper-banner bg-image"
        style={bgImg}
      >
        <div className="container">
          <div className="d-sm-flex flex-column d-flex justify-content-center align-items-center ">
            <h1 className="text-center">
              <span className="open-text">Hello!</span>
              <br /> I'm <b>Pablo Peña</b> <br />
            </h1>
            <p className="text-start">Quality Assurance Engineer</p>
            <UpperBtn />
            <div className="my-5 ps-3  border-start">
              <Typical
                steps={[
                  "TypeScript",
                  1000,
                  "SQL",
                  1000,
                  "Appium",
                  1000,
                  "Cypress",
                  1000,
                  "WebdriverIO",
                  1000,
                  "CI/CD",
                  1000,
                ]}
                loop={Infinity}
                wrapper="h2"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default UpperBanner;
