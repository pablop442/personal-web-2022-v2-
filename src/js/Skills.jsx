import React from "react";
import "./skills.css";
import { FaLaptopCode, FaDatabase, FaGitAlt, FaChild } from "react-icons/fa";

const Skills = () => {
  return (
    <>
      <section className="p-5 skills" id="skills">
        <div className="container">
          <div className="row text-center g-4">
            <h1 className="text-white text-start mt-5 mb-3">My Skills</h1>
            <p className="lead text-white text-start">
              Over the years, I have dedicated myself to mastering the
              intricacies of QA and automation testing, continuously expanding
              my knowledge and staying up-to-date with the latest industry
              trends. Some of the key concepts I have embraced and find crucial
              in my work include:
            </p>
            <div className="col-md">
              <div className="card  text-light h-100 card-drk">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaLaptopCode />
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
                    <FaDatabase />
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
                    <FaGitAlt />
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
            <div className="col-md">
              <div className="card  text-light h-100 card-lgt">
                <div className="card-body text-center">
                  <div className="h1 mb-3">
                    <FaChild />
                  </div>
                  <h3 className="card-title mb-3">Soft Skills</h3>
                  <p className="card-text">
                    Common Sense<br></br>
                    Time Management<br></br>
                    Teamwork<br></br>
                    Confidence<br></br>
                    Friendliness and Manners<br></br>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Skills;
