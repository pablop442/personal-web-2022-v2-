import React from "react";
import "./tools.css";

import JSLogo from "../img/javascript.svg";

import SQLLogo from "../img/postgresql.svg";

import AppiumLogo from "../img/appium.svg";
import TypeScriptLogo from "../img/typescript-icon.svg";
import CucumberLogo from "../img/cucumber.svg";
import CypressLogo from "../img/cypress.svg";
import PostmanLogo from "../img/postman.svg";
import XRayLogo from "../img/xray-for-jira.svg";
import WebDriverIo from "../img/webdriverio.svg";
import MySQLLogo from "../img/mysql.svg";
import BitbucketLogo from "../img/bitbucket.svg"


const Tools = () => {
  return (
    <>
      <section
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start tools-background "
        id="about"
      >
        <div className="container">
          <div className="row align-items-center justify-content-between">
            <h5 className="text-white my-3">My tool set includes </h5>
            
                
                  
                  <img
                    src={TypeScriptLogo}
                    alt="typescript"
                    id="portafolio-img"
                    style={{ height: "75px", width: "75px", margin: "8px" }}
                  /> <img
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
                    style={{ height: "100px", width: "100px", margin: "8px" }}
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
                  />
                  <img
                    src={PostmanLogo}
                    alt="postman"
                    id="portafolio-img"
                    style={{ height: "100px", width: "100px", margin: "8px" }}
                  />
                   <img
                    src={SQLLogo}
                    alt="sql"
                    id="portafolio-img"
                    style={{ height: "75px", width: "75px", margin: "8px" }}
                  />
                   <img
                    src={MySQLLogo}
                    alt="mysql"
                    id="portafolio-img"
                    style={{ height: "75px", width: "75px", margin: "8px" }}
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
                    style={{ height: "75px", width: "75px", margin: "8px" }}
                  />

                
                
                
              </div>
          
        </div>
      </section>
    </>
  );
};

export default Tools;
