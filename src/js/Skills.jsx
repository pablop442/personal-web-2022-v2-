import React from "react";
import "./skills.css";
import { FaLaptopCode, FaCogs, FaPlug, FaRoute } from "react-icons/fa";
import JSLogo from "../img/javascript.svg";
import AppiumLogo from "../img/appium.svg";
import TypeScriptLogo from "../img/typescript-icon.svg";
import CucumberLogo from "../img/cucumber.svg";
import CypressLogo from "../img/Cypress_Logotype_White-Color.svg";
import PostmanLogo from "../img/postman.svg";
import XRayLogo from "../img/xray-for-jira.svg";
import WebDriverIo from "../img/webdriverio.svg";
import MySQLLogo from "../img/mysql.svg";
import BitbucketLogo from "../img/bitbucket.svg";
import GitLogo from "../img/git-icon.svg";

const Skills = () => {
  return (
    <>
      <section className="p-5 skills-background" id="skills">
        <div className="container">
          <div className="row text-center g-4">
            <h1 className="text-white text-start mt-5 mb-3">
              Some of my skills include
            </h1>
            <div className="col-md">
              <div className="card  text-light h-100 card-drk">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaRoute />
                  </div>
                  <h3 className="card-title mb-3">
                    Test Planning and Strategy
                  </h3>
                  <p className="card-text">
                    Crafting comprehensive testing plans and strategies to
                    ensure thorough coverage of software functionality and
                    features.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card  text-light h-100 card-lgt">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaLaptopCode />
                  </div>
                  <h3 className="card-title mb-3">Test Automation</h3>
                  <p className="card-text">
                    Utilizing automation tools and frameworks to streamline the
                    testing process, increase efficiency, and improve the
                    overall quality of software.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card  text-light h-100 card-drk">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaCogs />
                  </div>
                  <h3 className="card-title mb-3">Functional Testing</h3>
                  <p className="card-text">
                    Conducting tests to validate the functionality and behavior
                    of software applications, ensuring they meet the specified
                    requirements.
                  </p>
                </div>
              </div>
            </div>
            <div className="col-md">
              <div className="card  text-light h-100 card-lgt">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaPlug />
                  </div>
                  <h3 className="card-title mb-3">API Testing</h3>
                  <p className="card-text">
                    Verifying the functionality and reliability of application
                    programming interfaces (APIs) through systematic testing
                    approaches.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <img
              src={TypeScriptLogo}
              alt="typescript"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />{" "}
            <img
              src={JSLogo}
              alt="js"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />
            <img
              src={AppiumLogo}
              alt="appium"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />
            <br></br>
            <img
              src={CypressLogo}
              alt="cypress"
              id="portafolio-img"
              style={{ height: "120px", width: "120px", margin: "8px" }}
            />
            <img
              src={WebDriverIo}
              alt="wdio"
              id="portafolio-img"
              style={{ height: "120px", width: "120px", margin: "8px" }}
            />
            <img
              src={CucumberLogo}
              alt="cucumber"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />{" "}
            <img
              src={MySQLLogo}
              alt="mysql"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />
            <img
              src={PostmanLogo}
              alt="postman"
              id="portafolio-img"
              style={{ height: "120px", width: "120px", margin: "8px" }}
            />
            <img
              src={XRayLogo}
              alt="xray"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />
            <img
              src={BitbucketLogo}
              alt="xray"
              id="portafolio-img"
              style={{ height: "65px", width: "65px", margin: "8px" }}
            />
            <img
              src={GitLogo}
              alt="xray"
              id="portafolio-img"
              style={{ height: "75px", width: "75px", margin: "8px" }}
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
