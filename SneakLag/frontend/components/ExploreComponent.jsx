/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useContext, useState } from "react";

import axios from "axios";
import { AuthContext } from "../context/AuthContext";
import { InventoryContext } from "../context/InventoryContext";

const ExploreComponent = ({
  name,
  price,
  image,
  gender,
  _id,
  save,
  buyer,
  like,
}) => {
  const { user } = useContext(AuthContext);

  const [click, setIsClicked] = useState(false);
  const { getExplore } = useContext(InventoryContext);
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

  const handleClick = () => {
    setIsClicked(true);

    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          save: true,
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
  const handleLikes = () => {
    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          like: like + 1,
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

  const handleRefresh = () => {
    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          like: 0,
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
        <div className="overlay">
          <div className="row">
            <div className="col">
              <button className="Btn" onClick={handleLikes}>
                <span className="leftContainer">
                  <svg
                    fill="white"
                    viewBox="0 0 512 512"
                    height="1em"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M47.6 300.4L228.3 469.1c7.5 7 17.4 10.9 27.7 10.9s20.2-3.9 27.7-10.9L464.4 300.4c30.4-28.3 47.6-68 47.6-109.5v-5.8c0-69.9-50.5-129.5-119.4-141C347 36.5 300.6 51.4 268 84L256 96 244 84c-32.6-32.6-79-47.5-124.6-39.9C50.5 55.6 0 115.2 0 185.1v5.8c0 41.5 17.2 81.2 47.6 109.5z"></path>
                  </svg>
                  <span className="like">Like</span>
                </span>
                <span className="likeCount">{like}</span>
              </button>
            </div>
            <div className="col d-flex justify-content-end">
              <button className="border-0 " onClick={handleRefresh}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  // eslint-disable-next-line react/no-unknown-property
                  className="bi bi-arrow-clockwise"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 3a5 5 0 1 0 4.546 2.914.5.5 0 0 1 .908-.417A6 6 0 1 1 8 2v1z"
                  />
                  <path d="M8 4.466V.534a.25.25 0 0 1 .41-.192l2.36 1.966c.12.1.12.284 0 .384L8.41 4.658A.25.25 0 0 1 8 4.466z" />
                </svg>
              </button>
            </div>
          </div>
        </div>

        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          {save && (
            <div className="row">
              <div className="col d-flex justify-content-center">
                <p className="text-bg-danger para1">Saved</p>
              </div>
            </div>
          )}
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
            <div className="col d-flex justify-content-end">
              <button className="border-0 bg-light" onClick={handleClick} disabled={save}>
                ❤️
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreComponent;
