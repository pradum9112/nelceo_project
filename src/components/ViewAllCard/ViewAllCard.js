import React, { useState, useEffect } from "react";
import { NavLink, useParams, useNavigate } from "react-router-dom";

function ViewAllCard() {
  const [userdata, setUserdata] = useState([]);

  console.log(userdata);
  const navigate = useNavigate();

  const deleteCard = async (id) => {
    console.log(id);
    const res = await fetch(`/deletecard/${id}`, {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const deletedata = await res.json();
    console.log(deletedata);

    if (res.status === 422 || !deletedata) {
      console.log("error");
    } else {
      navigate("/");
      console.log("card deleted");
      window.location.reload();
    }
  };

  const fetchData = async () => {
    try {
      const res = await fetch(`http://localhost:5001/readallcard`, {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      if (!res.ok) {
        throw new Error("Error fetching data");
      }

      const data = await res.json();
      setUserdata(data);
    } catch (error) {
      console.error("Error:", error);
      alert("Error fetching data");
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  //   useEffect(() => {
  //     getdata();
  //   }, []);

  return (
    <div>
      <div className="row ms-4 mt-2 mb-5">
        {userdata.map((item, index) => (
          <div className="col-lg-2 customimg-size" key={index}>
            <div className="card">
              <NavLink to={`/viewcard/${item._id}`}>
                <img
                  src={item.download_url}
                  className="card-img-top"
                  alt={`Image ${index}`}
                />
              </NavLink>
              <div className="card-body">
                <p className="card-text h3 text-center">Create New Project</p>
                <p className="card-text text-center">
                  Or try a <span>sample project</span>
                </p>
                <div className="row">
                  <div className="col-4">
                    <NavLink
                      to={`/editcard/${item._id}`}
                      className="btn btn-dark"
                    >
                      Edit
                    </NavLink>
                  </div>
                  <div
                    className="offset-4 col-4 btn btn-dark"
                    onClick={() => deleteCard(item._id)}
                  >
                    Delete
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ViewAllCard;
