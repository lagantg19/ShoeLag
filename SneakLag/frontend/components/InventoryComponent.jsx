/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-static-element-interactions */
import axios from "axios";
import React, { useContext, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { InventoryContext } from "../context/InventoryContext";

const InventoryComponent = ({
  name,
  price,
  image,
  gender,
  buy,
  _id,
  like,
  buyer,
  approved
}) => {
  const { user } = useContext(AuthContext);
  const { getInventory } = useContext(InventoryContext);
  const [card, setCard] = useState(false);


  const handleDelete = () => {
    axios
      .delete(
        `http://localhost:4000/api/shoeinventory/${_id}`,

        {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        }
      )
      .then((response) => {
        getInventory();

        console.log(response.data);
      });
  };

  const handleClickCard = () => {
    setCard(!card);
  };

  return (
    <>
      {/* /* eslint-disable-next-line jsx-a11y/click-events-have-key-events */}
      <div
        className={`myCard  ${card ? "clicked" : ""} `}
        onClick={handleClickCard}
      >
        <div className="innerCard">
          <div className="frontSide">
            <div className="card text-center " style={{ width: "22rem" }}>
              <img
                src={image}
                className="card-img-top"
                alt="..."
                style={{ width: "350px", height: "350px" }}
              />
              {!approved && <div className="overlay">
                <button className="button">
                  <span>Not Approved!</span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      strokeMiterlimit="2"
                      // eslint-disable-next-line react/no-unknown-property
                      stroke-linejoin="round"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    >
                      <path
                        fillRule="nonzero"
                        d="m12.002 2.005c5.518 0 9.998 4.48 9.998 9.997 0 5.518-4.48 9.998-9.998 9.998-5.517 0-9.997-4.48-9.997-9.998 0-5.517 4.48-9.997 9.997-9.997zm0 1.5c-4.69 0-8.497 3.807-8.497 8.497s3.807 8.498 8.497 8.498 8.498-3.808 8.498-8.498-3.808-8.497-8.498-8.497zm0 7.425 2.717-2.718c.146-.146.339-.219.531-.219.404 0 .75.325.75.75 0 .193-.073.384-.219.531l-2.717 2.717 2.727 2.728c.147.147.22.339.22.531 0 .427-.349.75-.75.75-.192 0-.384-.073-.53-.219l-2.729-2.728-2.728 2.728c-.146.146-.338.219-.53.219-.401 0-.751-.323-.751-.75 0-.192.073-.384.22-.531l2.728-2.728-2.722-2.722c-.146-.147-.219-.338-.219-.531 0-.425.346-.749.75-.749.192 0 .385.073.531.219z"
                      ></path>
                    </svg>
                  </span>
                </button>
              </div>}

              


              <div className="card-body">
                <h5 className="card-title">{name}</h5>

                <div className="card-text">
                  <h1>RS {price}</h1>
                  <h5> SEX:{gender}</h5>
                </div>
                {!buy && (
                  <div className="row">
                    <div className="col">
                      <button
                        type="button"
                        className="btn btn-outline-danger border-0"
                        onClick={handleDelete}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="30"
                          height="30"
                          fill="currentColor"
                          className="bi bi-trash3"
                          viewBox="0 0 16 16"
                        >
                          <path d="M6.5 1h3a.5.5 0 0 1 .5.5v1H6v-1a.5.5 0 0 1 .5-.5ZM11 2.5v-1A1.5 1.5 0 0 0 9.5 0h-3A1.5 1.5 0 0 0 5 1.5v1H2.506a.58.58 0 0 0-.01 0H1.5a.5.5 0 0 0 0 1h.538l.853 10.66A2 2 0 0 0 4.885 16h6.23a2 2 0 0 0 1.994-1.84l.853-10.66h.538a.5.5 0 0 0 0-1h-.995a.59.59 0 0 0-.01 0H11Zm1.958 1-.846 10.58a1 1 0 0 1-.997.92h-6.23a1 1 0 0 1-.997-.92L3.042 3.5h9.916Zm-7.487 1a.5.5 0 0 1 .528.47l.5 8.5a.5.5 0 0 1-.998.06L5 5.03a.5.5 0 0 1 .47-.53Zm5.058 0a.5.5 0 0 1 .47.53l-.5 8.5a.5.5 0 1 1-.998-.06l.5-8.5a.5.5 0 0 1 .528-.47ZM8 4.5a.5.5 0 0 1 .5.5v8.5a.5.5 0 0 1-1 0V5a.5.5 0 0 1 .5-.5Z" />
                        </svg>
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>
          <div className="backSide">
            {buy && (
              <p className="title">
                <strong>SOLD</strong>
              </p>
            )}

            <div>
              <p>LIKES</p>
              <p>{like}</p>
            </div>
            {buy && (
              <div>
                <p>Purchased by</p>
                <p>{buyer}</p>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default InventoryComponent;
