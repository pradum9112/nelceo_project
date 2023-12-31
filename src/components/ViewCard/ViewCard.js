import React, { useEffect, useState } from "react";

import { NavLink, useParams } from "react-router-dom";

const ViewCard = () => {
  document.title = "Crud-Application:ViewCard";

  const [userdata, setUserdata] = useState([]);
  console.log(userdata);

  const { id } = useParams();

  //   const { id } = useParams("");
  //   console.log(id);

  const getdata = async () => {
    const res = await fetch(`/readcard/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      setUserdata(data);
      console.log("Get data");
    }
  };

  useEffect(() => {
    getdata();
  }, []);

  return (
    <div className="container mt-5 justify-content-center flex-column flex-lg-column">
      <div className="h1">Detail of {userdata.author}</div>

      <div className="row ms-4 mt-3">
        <div className="col-2 customimg-size">
          <div class="card">
            <NavLink to="/addcard">
              <img src={userdata.download_url} class="card-img-top" />
            </NavLink>
            <div class="card-body">
              <p class="card-text h3 text-center">
                Author: <span>{userdata.author}</span>
              </p>
              <p class="card-text  text-center">
                <div>
                  width: <span>{userdata.width}</span>
                </div>
                <div>
                  height: <span>{userdata.height}</span>
                </div>
              </p>
              <div className="row">
                <div className="offset-4 col-4 offset-4">
                  <NavLink to="/" className="btn btn-dark">
                    Back
                  </NavLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ViewCard;
