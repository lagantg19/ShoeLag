import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios, { all } from "axios";
import { InventoryContext } from "../../../context/InventoryContext";

const ApprovalComponent = ({ image, name, price, gender, user_id,_id }) => {
  const { alluser,user} = useContext(AuthContext);
  const {getExplore } = useContext(InventoryContext);

  const handleApprove=()=>{
    axios
      .patch(
        `http://localhost:4000/api/shoeinventory/${_id}`,
        {
          approved:true
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
    
  }

  return (
    <div className="col-4 d-flex justify-content-center">
      <div className="card" style={{ width: "18rem" }}>
        <img src={image} className="card-img-top" alt="..." />
        <div className="card-body">
          <h5 className="card-title">{name}</h5>
          <h5 className="card-text">RS {price}</h5>
          <h5 className="card-text">SEX {gender}</h5>
          <br />
          <p>
            <strong>SELLER:</strong>
            {alluser.map((item) => {
              if (item._id == user_id) {
                return item.email;
              }
            })}
          </p>

          <button className="btn btn-primary" onClick={handleApprove}>Approve</button>
        </div>
      </div>
    </div>
  );
};

export default ApprovalComponent;
