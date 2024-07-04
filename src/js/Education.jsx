import React from "react";
import "./myResume.css";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { VscLaw } from "react-icons/vsc";
import "./education.css";
import { RiCodeBoxFill, RiBilibiliFill, RiLightbulbFlashFill, RiSettingsFill } from "react-icons/ri";

const Education = () => {
  return (
    <>
      <section
        className="text-light p-5 p-lg-0 pt-lg-5 text-center text-sm-start education-section"
        id="resume"
      >
        <div className="container">
          <div className="row align-items-center">
            <h3 className="text-white fst-italic">Education</h3>
            <div className=" col-md-8">
              <VerticalTimeline>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1px solid white",
                    boxShadow: "6px 6px 2px 0px #034078",
                  }}
                  contentArrowStyle={{
                    border: "2px solid white",
                    width: "10px",
                  }}
                  date="2024"
                  dateClassName="date-text-right"
                  iconStyle={{
                    background: "#0A1128",
                    color: "#fff",
                    border: "3px solid white",
                    boxShadow: "none",
                  }}
                  icon={<RiLightbulbFlashFill />}
                >
                  <h4 className="vertical-timeline-element-title fw-bold mb-3">
                  Docker for Beginners 
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle fst-italic">
                  Udemy
                  </h5>
                </VerticalTimelineElement>
              <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1px solid white",
                    boxShadow: "6px 6px 2px 0px #034078",
                  }}
                  contentArrowStyle={{
                    border: "2px solid white",
                    width: "10px",
                  }}
                  date="2023"
                  dateClassName="date-text-right"
                  iconStyle={{
                    background: "#0A1128",
                    color: "#fff",
                    border: "3px solid white",
                    boxShadow: "none",
                  }}
                  icon={<RiBilibiliFill />}
                >
                  <h4 className="vertical-timeline-element-title fw-bold mb-3">
                  Robot Framework Test Automation
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle fst-italic">
                  Udemy
                  </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1px solid white",
                    boxShadow: "-6px 6px 2px 0px #034078",
                  }}
                  contentArrowStyle={{
                    border: "2px solid white",
                    width: "10px",
                  }}
                  date="2023"
                  dateClassName="date-text"
                  iconStyle={{
                    background: "#0A1128",
                    color: "#fff",
                    border: "3px solid white",
                    boxShadow: "none",
                  }}
                  icon={<RiSettingsFill />}
                >
                  <h4 className="vertical-timeline-element-title fw-bold mb-4">
                  Cypress Modern Automation Testing
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle fst-italic">
                  Udemy - Noble Work Foundation
                  </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1px solid white",
                    boxShadow: "6px 6px 2px 0px #034078",
                  }}
                  contentArrowStyle={{
                    border: "2px solid white",
                    width: "10px",
                  }}
                  date="2021 - 2022"
                  dateClassName="date-text-right"
                  iconStyle={{
                    background: "#0A1128",
                    color: "#fff",
                    border: "3px solid white",
                    boxShadow: "none",
                  }}
                  icon={<RiCodeBoxFill />}
                >
                  <h4 className="vertical-timeline-element-title fw-bold mb-3">
                  Full Stack Developer
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle fst-italic">
                  4Geeks Academy
                  </h5>
                </VerticalTimelineElement>
                <VerticalTimelineElement
                  className="vertical-timeline-element--work"
                  contentStyle={{
                    background: "none",
                    color: "#fff",
                    border: "1px solid white",
                    boxShadow: "6px 6px 2px 0px #034078",
                  }}
                  contentArrowStyle={{
                    border: "2px solid white",
                    width: "10px",
                  }}
                  date="2005 - 2010"
                  dateClassName="date-text-right"
                  iconStyle={{
                    background: "#0A1128",
                    color: "#fff",
                    border: "3px solid white",
                    boxShadow: "none",
                  }}
                  icon={<VscLaw />}
                >
                  <h4 className="vertical-timeline-element-title fw-bold mb-3">
                    Law Degree
                  </h4>
                  <h5 className="vertical-timeline-element-subtitle fst-italic">
                    Universidad Católica Andrés Bello
                  </h5>
                </VerticalTimelineElement>
              </VerticalTimeline>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Education;
