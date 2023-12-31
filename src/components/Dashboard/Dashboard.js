import React from "react";
import Navbar from "../Navbar/Navbar";
import Sidebar from "../Sidebar/Sidebar";
import "./dashboard.css";
import { NavLink } from "react-router-dom";
import ViewAllCard from "../ViewAllCard/ViewAllCard";
// import { data } from "../data";
// import { NavLink } from "react-router-dom";

function Dashboard() {
  return (
    <div className="container-fluid custom-bg-color ">
      <div className="row">
        <div className="col-2  bg-white ">
          <Sidebar />
        </div>
        <div className="col-10   ms-0 ps-0 me-0 pe-0 ">
          <Navbar />
          <h1 className="fw-bold ms-4 mt-4  p-2">My Projects</h1>
          <NavLink to="addcard">
            <button className="fw-bold ms-5 mt-2   p-2 btn btn-dark">
              Create Card
            </button>
          </NavLink>
          <ViewAllCard />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
