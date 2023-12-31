import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const AddCard = () => {
  document.title = "Crud-Application:Registration";

  const navigate = useNavigate();

  const [addCardData, setAddCardData] = useState({
    author: "",
    width: "",
    height: "",
    url: "",
    url: "",
  });

  const setdata = (e) => {
    console.log(e.target.value);
    const { name, value } = e.target;
    setAddCardData((preval) => {
      return {
        ...preval,
        [name]: value,
      };
    });
  };

  const addinpdata = async (e) => {
    e.preventDefault();

    const { author, width, height, url, download_url } = addCardData;

    const res = await fetch("/createcard", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        author,
        width,
        height,
        url,
        download_url,
      }),
    });

    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      alert("error");
      console.log("error");
    } else {
      // alert("data added");
      navigate("/");
      setAddCardData(data);
      console.log("data added");
    }
  };

  return (
    <div className="container mt-5">
      <NavLink to="/">GO TO BACK</NavLink>
      <form className="mt-4 " method="POST">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              author
            </label>
            <input
              type="text"
              value={addCardData.author}
              onChange={setdata}
              name="author"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              width
            </label>
            <input
              type="number"
              value={addCardData.width}
              onChange={setdata}
              name="width"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              height
            </label>
            <input
              type="number"
              value={addCardData.height}
              onChange={setdata}
              name="height"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              url
            </label>
            <input
              type="text"
              value={addCardData.url}
              onChange={setdata}
              name="url"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              download_url
            </label>
            <input
              type="text"
              value={addCardData.download_url}
              onChange={setdata}
              name="download_url"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <button type="submit" onClick={addinpdata} className="btn btn-dark">
            AddCard
          </button>
        </div>
      </form>
    </div>
  );
};

export default AddCard;
