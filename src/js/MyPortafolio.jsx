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

const MyPortafolio = () => {
  return (
    <>
      <section className="p-5 portafolio" id="portafolio">
        <div className="container">
          <div className="row text-center g-4">
            <h1 className="text-white text-start mt-5">Portafolio</h1>
            <div className="col-lg-4">
              <div className="card bg-transparent text-light portafolio-card">
                <div className="card-body text-center">
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
                    sustainable way of communication between citizens and local
                    authorities or municipalities.
                  </p>
				  <button className="btn btn-primary visit-btn px-3"><a
                    href="https://cityhold.herokuapp.com/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check it out
                  </a></button>
                  
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
                    Add/delete tasks, mark them as done or important and filter
                    them. 
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
                  <h5 class="card-title fw-bold">Vanilla JS Card Generator</h5>
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
				  <button className="btn btn-primary visit-btn px-3">  <a
                    href="https://pablop442.github.io/showcase-randomcard/"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Check it out
                  </a></button>
                
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
