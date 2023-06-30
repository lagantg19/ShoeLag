import React, { useContext, useEffect, useState } from "react";
import InventoryComponent from "../components/InventoryComponent";

import { InventoryContext } from "../context/InventoryContext";

const Inventory = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 2000);

    getInventory();
  }, []);

  const { getInventory, inventoryItems } = useContext(InventoryContext);


  return (
    <>
      {loading && (
        <div className=" container-fluid d-flex align-items-center  vh-100">
          <div className="row vw-100 d-flex justify-content-center">
            <div className="col-12 loader ">
              <div className="dot"></div>
              <div className="dot"></div>
              <div className="dot"></div>
            </div>
            <div className="col-12 para d-flex justify-content-center">
              <h1>
                <strong>GOING TO INVENTORY </strong>
              </h1>
            </div>
          </div>
        </div>
      )}
      {!loading && (
        <section className="explore w-100">
          <div className="container-fluid">
            <div className="row ">
              <div className="col-6 d-flex justify-content-end  ">
                <h1 className="para mt-2  ">YOUR GAME</h1>
              </div>
              <div className="col-6 d-flex justify-content-end">
                <button
                  type="button"
                  className="button"
                  data-bs-toggle="modal"
                  data-bs-target="#exampleModal"
                >
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
              </div>
            </div>
            {//this is modal for not approved
              <>
                <div
                  className="modal fade"
                  id="exampleModal"
                  tabIndex="-1"
                  aria-labelledby="exampleModalLabel"
                  aria-hidden="true"
                >
                  <div className="modal-dialog">
                    <div className="modal-content">
                      <div className="modal-header">
                        <h1 className="modal-title fs-5" id="exampleModalLabel">
                         NOT APPROVED INFO
                        </h1>
                        <button
                          type="button"
                          className="btn-close"
                          data-bs-dismiss="modal"
                          aria-label="Close"
                        ></button>
                      </div>
                      <div className="modal-body">Please wait for the admin to approve or else contact the admin using chat option </div>
                      <div className="modal-footer">
                        <button
                          type="button"
                          className="btn btn-secondary"
                          data-bs-dismiss="modal"
                        >
                          Close
                        </button>
                        
                      </div>
                    </div>
                  </div>
                </div>
              </>
            }
            <div className="row gy-5 d-flex justify-content-evenly mt-2 ">
              {inventoryItems.map((item) => {
                return <InventoryComponent key={item._id} {...item} />;
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Inventory;
