import React from "react";
import "./myResume.css";
import "react-vertical-timeline-component/style.min.css";
import Education from "./Education.jsx";
import Experience from "./Experience.jsx";

const MyResume = () => {
  return (
    <>
      <Experience />
      <Education />
    </>
  );
};

export default MyResume;
