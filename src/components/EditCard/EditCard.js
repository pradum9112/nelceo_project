import React, { useState, useEffect } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";

const EditCard = () => {
  document.title = "Crud-Application: Edit Card";

  const navigate = useNavigate();
  const { id } = useParams();
  console.log(id);
  const [editCardData, setEditCardData] = useState({
    author: "",
    width: "",
    height: "",
    url: "",
    download_url: "",
  });

  useEffect(() => {
    async function fetchCardData() {
      try {
        const res = await fetch(`/readcard/${id}`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
        });

        if (!res.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await res.json();
        setEditCardData(data);
      } catch (error) {
        console.error("Error:", error.message);
        alert("Error fetching card data");
      }
    }

    fetchCardData();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEditCardData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleEditCard = async (id) => {
    const { author, width, height, url, download_url } = editCardData;

    // try {
    const res = await fetch(`/editcard/${id}`, {
      method: "PUT",
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

    console.log(res);

    //   const data = await res.json();
    navigate("/"); // Navigate back to the main page after editing
    //   console.log("Card edited:", data);
    // } catch (error) {
    //   console.error("Error:", error.message);
    //   alert("Error editing card");
    // }
  };

  return (
    <div className="container mt-5">
      <NavLink to="/">Go Back</NavLink>
      <form className="mt-4" onSubmit={handleEditCard} method="POST">
        <div className="row">
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="authorInput" className="form-label">
              Author
            </label>
            <input
              type="text"
              value={editCardData.author}
              onChange={handleInputChange}
              name="author"
              className="form-control"
              id="authorInput"
            />
          </div>
          <div className="mb-3 col-lg-6 col-md-6 col-12">
            <label htmlFor="exampleInputPassword1" className="form-label">
              width
            </label>
            <input
              type="number"
              value={editCardData.width}
              onChange={handleInputChange}
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
              value={editCardData.height}
              onChange={handleInputChange}
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
              value={editCardData.url}
              onChange={handleInputChange}
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
              value={editCardData.download_url}
              onChange={handleInputChange}
              name="download_url"
              className="form-control"
              id="exampleInputPassword1"
            />
          </div>

          <div className="btn btn-dark" onClick={() => handleEditCard(id)}>
            Save Changes
          </div>
        </div>
      </form>
    </div>
  );
};

export default EditCard;
