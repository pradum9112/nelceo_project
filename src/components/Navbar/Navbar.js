import React from "react";
import "./navbar.css";
import { NavLink } from "react-router-dom";

function Navbar() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-white custon-nav-body-size ">
        <div className="container-fluid">
          <div className="container mb-4  p-2 me-2 custom-nav-size position-relative  ">
            <div className="row">
              <div className="col-3 ">
                <div className="fw-bold h6 fs-20 custext-size">
                  Free Trail |
                  <NavLink className="navbar-brand" to="#">
                    <div className="  fw-bold custext-size">
                      <span> Extend free trail</span>
                    </div>
                  </NavLink>
                </div>
              </div>
              <div className="col-3 mt-2 ms-0 ps-0 h6 fw-light d-inline custext-size">
                2days left
              </div>
              <div className="col-2 me-3 ">
                <img
                  className="rounded-circle custom-img-size mt-1 "
                  src="img-profile.jpg"
                  alt="img"
                />
              </div>
              <div className="col-2 fw-light  mt-2">
                <NavLink className="navbar-brand" to="#">
                  ▼
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
