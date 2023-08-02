import React from "react";
import "./upperBtn.css";
import myCV from "../img/Pablo_Peña_Resume_2023_EN.pdf";
import { FaFileDownload } from "react-icons/fa";

const UpperBtn = () => {
  return (
    <>
      <div className="my-3 text-center">
        <button
          className="btn btn-outline-light p-3  rounded-2 upper-btn main-view fs-3 m-2"
          id="main-btn"
        >
          <a
            href={myCV}
            target="_blank"
            rel="noopener noreferrer"
            style={{ textDecoration: "none", color: "#fefcfb" }}
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
          </a>
        </button>
      </div>
    </>
  );
};

export default UpperBtn;
