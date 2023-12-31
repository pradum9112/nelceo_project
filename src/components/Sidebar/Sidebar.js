import React from "react";
import "./sidebar.css";

function Sidebar() {
  return (
    <div className="vh-100 mb-0 pb-0 se-2">
      <div className="row ">
        <div className="row custom-width">
          <div className="col-12 text-center mt-4">
            <img src="./Group 5.png" alt="" />
          </div>
        </div>
        <hr className="mt-4" />
        <div className="row mt-4 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./icon1.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <span>My Project</span>
          </div>
        </div>

        <div className="row mt-4 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON2.png" alt="" />
          </div>
          <div className="col-8 fw-bold  ">
            <code>Sample Projects</code>
          </div>
        </div>
        <hr className="mt-4" />

        <div className="row mt-2 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON3.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <code>Apps</code>
          </div>
        </div>

        <div className="row mt-4 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON4.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <code>Intro to Necleo</code>
          </div>
        </div>
      </div>

      {/* row2nd */}
      <div className="row  custom-margin">
        <div className="row mt-5 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON5.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <code>Help & Support</code>
          </div>
        </div>

        <div className="row mt-4 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON6.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <code>Feedback</code>
          </div>
        </div>
        <div className="row mt-4 custom-width">
          <div className="offset-2  col-2  ">
            <img src="./ICON7.png" alt="" />
          </div>
          <div className="col-8 fw-bold">
            <strong>Collapse</strong>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
