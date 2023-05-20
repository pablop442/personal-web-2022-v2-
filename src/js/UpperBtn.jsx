import React from "react";
import "./upperBtn.css";
import myCV from "../img/Pablo Peña QA Engineer (2022-12).pdf";
import { FaFileDownload, FaHandsHelping } from "react-icons/fa";

const UpperBtn = () => {
  return (
    <>
      <div className="my-3 text-center">
        <a
          href="/#"
          className=""
          data-bs-toggle="modal"
          data-bs-target="#contact"
        >
          <button
            className="btn btn-outline-light p-3  rounded-2 upper-btn main-view fs-3 m-2"
            id="main-btn"
          >
            <p className="mb-1">
              Contact me{" "}
              <FaHandsHelping
                style={{
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                }}
              />
            </p>
          </button>
        </a>
        <a href={myCV} target="_blank" rel="noopener noreferrer">
          <button
            className="btn btn-outline-light p-3  rounded-2 upper-btn main-view fs-3 m-2"
            id="main-btn"
          >
            <p className="mb-1">
              My Resume{" "}
              <FaFileDownload
                style={{
                  color: "#fff",
                  width: "30px",
                  height: "30px",
                }}
              />
            </p>
          </button>
        </a>
      </div>
    </>
  );
};

export default UpperBtn;
