import React from "react";
import "./myPortafolio.css";
import ReactLogo from "../img/react.svg";
import HTMLLogo from "../img/html-5.svg";
import CSSLogo from "../img/css-3.svg";
import JSLogo from "../img/javascript.svg";
import PyLogo from "../img/python.svg";
import BSLogo from "../img/bootstrap.svg";
import FlaskLogo from "../img/flask.svg";
import SQLLogo from "../img/postgresql.svg";
import FluxLogo from "../img/flux.svg";
import CypressLogo from "../img/Cypress_Logotype_White-Color.svg";
import TypeScriptLogo from "../img/typescript-icon.svg";
import CucumberLogo from "../img/cucumber.svg";

const MyPortafolio = () => {
  return (
    <>
      <section className="p-5 portafolio" id="portafolio">
        <div className="container">
          <div className="row text-center g-4">
            <h1 className="text-white text-start mt-5">Projects</h1>
            <h4 className="text-white text-center mt-4">Test Automation</h4>
            <div className="col-lg-4">
              <div className="card bg-transparent text-light portafolio-card h-100">
                <div className="card-body text-center d-flex align-content-between flex-wrap d-flex justify-content-center">
                  <h5 class="card-title fw-bold">Web elements automation</h5>
                  <img
                    src={CypressLogo}
                    alt="cypress"
                    id="portafolio-img"
                    style={{ height: "100px", width: "100px", margin: "8px" }}
                  />
                  <img
                    src={JSLogo}
                    alt="javascript"
                    id="portafolio-img"
                    style={{ height: "65px", width: "65px", margin: "8px" }}
                  />
                  <p className="card-text">
                    Using Cypress and JavaScript this project automates some of
                    the most common web elements. A series of end to end tests
                    were prepared to test the correct functionality of the web.
                  </p>
                  <button className="btn btn-primary visit-btn px-3 ">
                    <a
                      href="https://github.com/pablop442/herokuapp-automation"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check it out
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-4">
              <div className="card bg-transparent text-light portafolio-card h-100">
                <div className="card-body text-center d-flex align-content-between flex-wrap d-flex justify-content-center">
                  <h5 class="card-title fw-bold">
                    ParaBank End to End test automation
                  </h5>
                  <img
                    src={CypressLogo}
                    alt="cypress"
                    id="portafolio-img"
                    style={{ height: "100px", width: "100px", margin: "8px" }}
                  />
                  <img
                    src={TypeScriptLogo}
                    alt="typescript"
                    id="portafolio-img"
                    style={{ height: "65px", width: "65px", margin: "8px" }}
                  />
                  <br></br>
                  <img
                    src={CucumberLogo}
                    alt="cucumber"
                    id="portafolio-img"
                    style={{ height: "65px", width: "65px", margin: "8px" }}
                  />
                  <p className="card-text">
                    End to end test suite for ParaBank website. Developed with
                    Cypress and Typescript. We use Behavior Driven Development
                    using Cucumber. (Work in Progress)
                  </p>
                  <button className="btn btn-primary visit-btn px-3">
                    <a
                      href="https://github.com/pablop442/"
                      target="_blank"
                      rel="noreferrer"
                    >
                      Check it out
                    </a>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="row text-center g-4 mt-3">
            <h4 className="text-white text-center mt-4">
              <a
                data-bs-toggle="collapse"
                href="#otherProjectList"
                aria-expanded="false"
                aria-controls="otherProjectList"
                style={{ color: "#fefcfb" }}
              >
                Other Projects
              </a>
            </h4>
            <div
              className="collapse row text-center g-4 mt-3"
              id="otherProjectList"
            >
              <div className="col-lg-4">
                <div className="card bg-transparent text-light portafolio-card">
                  <div className="card-body text-center ">
                    <h5 class="card-title fw-bold">City Hold App</h5>
                    <img
                      src={ReactLogo}
                      alt="react"
                      id="portafolio-img"
                      style={{ height: "75px", width: "75px", margin: "8px" }}
                    />
                    <img
                      src={FlaskLogo}
                      alt="flask"
                      id="portafolio-img"
                      style={{ height: "75px", width: "75px", margin: "8px" }}
                    />
                    <br></br>
                    <img
                      src={HTMLLogo}
                      alt="html"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={CSSLogo}
                      alt="css"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={JSLogo}
                      alt="js"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={BSLogo}
                      alt="bootstrap"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={FluxLogo}
                      alt="flux"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={PyLogo}
                      alt="python"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />

                    <img
                      src={SQLLogo}
                      alt="sql"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <p className="card-text">
                      City-Hold is a digital platform for smart cities. It is a
                      sustainable way of communication between citizens and
                      local authorities or municipalities.
                    </p>
                    <button className="btn btn-primary visit-btn px-3">
                      <a
                        href="https://cityhold.herokuapp.com/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check it out
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-transparent text-light portafolio-card h-100">
                  <div className="card-body text-center">
                    <h5 class="card-title fw-bold">React Task List</h5>
                    <img
                      src={ReactLogo}
                      alt="react"
                      id="portafolio-img"
                      style={{ height: "75px", width: "75px", margin: "8px" }}
                    />
                    <br></br>
                    <img
                      src={HTMLLogo}
                      alt="html"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={CSSLogo}
                      alt="css"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={JSLogo}
                      alt="js"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={BSLogo}
                      alt="bootstrap"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />

                    <p className="card-text">
                      A basic to-do list app with some cool functionalities.
                      Add/delete tasks, mark them as done or important and
                      filter them.
                    </p>
                    <button className="btn btn-primary visit-btn px-3">
                      <a
                        href="https://task-list-pablodev.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check it out
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-transparent text-light portafolio-card h-100">
                  <div className="card-body text-center">
                    <h5 class="card-title fw-bold">R.O.I. Calculator</h5>
                    <img
                      src={ReactLogo}
                      alt="react"
                      id="portafolio-img"
                      style={{ height: "75px", width: "75px", margin: "8px" }}
                    />
                    <br></br>
                    <img
                      src={HTMLLogo}
                      alt="html"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={CSSLogo}
                      alt="css"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={JSLogo}
                      alt="js"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={BSLogo}
                      alt="bootstrap"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />

                    <p className="card-text">
                      A Return Of Investment calculator made to run personal
                      calculations for{" "}
                      <a
                        href="https://cake.monster/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Cake-Monster
                      </a>{" "}
                      DeFi protocol.
                    </p>
                    <button className="btn btn-primary visit-btn px-3">
                      <a
                        href="https://cake-monster-roi-calculator.netlify.app/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check it out
                      </a>
                    </button>
                  </div>
                </div>
              </div>
              <div className="col-lg-4">
                <div className="card bg-transparent text-light portafolio-card h-100">
                  <div className="card-body text-center">
                    <h5 class="card-title fw-bold">
                      Vanilla JS Card Generator
                    </h5>
                    <img
                      src={JSLogo}
                      alt="js"
                      id="portafolio-img"
                      style={{ height: "75px", width: "75px", margin: "8px" }}
                    />
                    <br></br>
                    <img
                      src={HTMLLogo}
                      alt="html"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />
                    <img
                      src={CSSLogo}
                      alt="css"
                      id="portafolio-img"
                      style={{ height: "50px", width: "50px", margin: "8px" }}
                    />

                    <p className="card-text">
                      A poker card generator that allows the user to draw a card
                      following three different random patterns determined by
                      JavaScript functions.
                    </p>
                    <button className="btn btn-primary visit-btn px-3">
                      {" "}
                      <a
                        href="https://pablop442.github.io/showcase-randomcard/"
                        target="_blank"
                        rel="noreferrer"
                      >
                        Check it out
                      </a>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MyPortafolio;
