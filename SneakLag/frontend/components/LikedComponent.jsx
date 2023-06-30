/* eslint-disable jsx-a11y/anchor-is-valid */
import axios from "axios";
import React, { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import { InventoryContext } from "../context/InventoryContext";

const LikedComponent = ({ name, price, image, gender, _id }) => {
  const { user } = useContext(AuthContext);
  const { getExplore } = useContext(InventoryContext);

  const handleDelete = () => {
    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          save: false,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        getExplore();
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };

  const handleBuy = () => {
    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          buy: true,
          buyer: user.email,
        },
        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        getExplore();
        console.log(response.data);
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="col-3 m-3  ">
      <div className="card " style={{ width: "22rem" }}>
        <img
          src={image}
          className="card-img-top"
          alt="..."
          style={{ width: "350px", height: "350px" }}
        />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <div className="card-text">
            <h1>RS {price}</h1>
            <h5> SEX:{gender}</h5>
          </div>
          <div className="row">
            <div className="col">
              <button
                type="button"
                className="btn btn-outline-success"
                onClick={handleBuy}
              >
                Buy
              </button>
            </div>
          </div>
          <div className="row ">
            <div className="col d-flex justify-content-end">
              <button onClick={handleDelete}>🗑️</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LikedComponent;
