import React, { useContext, useEffect } from "react";
import { InventoryContext } from "../../context/InventoryContext";
import ApprovalComponent from "./components/ApprovalComponent";
import axios from "axios";
import { AuthContext } from "../../context/AuthContext";

const Approval = () => {
  const { exploreItems, getExplore } = useContext(InventoryContext);
  const { getAllUser } = useContext(AuthContext);
  useEffect(() => {
    axios
      .get("http://localhost:4000/api/user/getall")
      .then((response) => {
        getAllUser(response.data);
        getExplore();
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col d-flex justify-content-center">
          <h1 className="para">
            <strong>Approval Required</strong>
          </h1>
        </div>
      </div>
      <div className="row mt-5 d-flex justify-content-evenly">
        {exploreItems.map((item) => {
          if (!item.approved) {
            return <ApprovalComponent key={item._id} {...item} />;
          }
        })}
      </div>
    </div>
  );
};

export default Approval;
