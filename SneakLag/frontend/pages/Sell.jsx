import React, { useContext, useState } from "react";
import logo from "../css/logo.png";
import axios from "axios";
import { AuthContext } from "../context/AuthContext";
const Sell = () => {
  const { user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");
  const [image, setImage] = useState("");
  const [gender, setGender] = useState("");
  const handleSubmit = () => {
    axios
      .post(
        "http://localhost:4000/api/shoeinventory/",
        {
          name,
          price,
          image,
          gender,
          like:0
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        console.log(response.data);
        alert("Item successfully posted in market Place!");
      })
      .catch((err) => console.log(err));

    setName("");
    setGender("");
    setImage("");
    setPrice("");
  };

  return (
    <div className="container-fluid">
      <div className="row mt-5">
        <div className="col-12 d-flex justify-content-center">
          <div
            className="card mb-3 border-0"
            style={{ width: "1300px", height: "70vh" }}
          >
            <div className="row g-0 ">
              <div className="col-md-5 ">
                <img
                  src="https://static.nike.com/a/images/f_auto,cs_srgb/w_1536,c_limit/6d7eb0f0-c721-477f-bf16-4b4f1d9d2d2f/the-best-nike-shoes-to-look-taller.jpg"
                  className="img-fluid rounded-start "
                  alt="..."
                  style={{ height: "70vh", width: "600px" }}
                />
              </div>
              <div className="col-md-7 bg-light-subtle ">
                <div className="row m-3 d-flex justify-content-center">
                  <img src={logo} className="w-25" alt="..." />
                </div>
                <div className="row">
                  <div className="card-body d-flex  align-content-center justify-content-center ">
                    <h1 className="card-title para">
                      <strong>SELL</strong>
                    </h1>
                  </div>
                </div>
                <form className="row d-flex justify-content-center">
                  <div className="form-floating mb-3 w-75">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInput" className="para1">
                      Name
                    </label>
                  </div>
                  <div className="form-floating w-75">
                    <input
                      type="number"
                      className="form-control"
                      id="floatingPassword"
                      placeholder="price"
                      value={price}
                      onChange={(e) => {
                        setPrice(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingPassword" className="para1">
                      Price
                    </label>
                  </div>
                  <div className="form-floating mb-3 mt-3 w-75">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="image url"
                      value={image}
                      onChange={(e) => {
                        setImage(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInput" className="para1">
                      Image URL
                    </label>
                  </div>

                  <div className="form-floating mb-3 w-75">
                    <input
                      type="text"
                      className="form-control"
                      id="floatingInput"
                      placeholder="gender"
                      value={gender}
                      onChange={(e) => {
                        setGender(e.target.value);
                      }}
                    />
                    <label htmlFor="floatingInput" className="para1">
                      Gender
                    </label>
                  </div>
                  <button
                    type="button"
                    className="btn btn-outline-success w-50 para1"
                    onClick={handleSubmit}
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sell;
