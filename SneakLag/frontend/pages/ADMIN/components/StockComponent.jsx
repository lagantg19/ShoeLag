import React, { useContext} from "react";
import { AuthContext } from "../../../context/AuthContext";
import axios, { all } from "axios";
import { InventoryContext } from "../../../context/InventoryContext";
const StockComponent = ({ image, name, price, gender, user_id ,buy}) => {
  const { alluser } = useContext(AuthContext);


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
          {buy && <p className="bg-danger">SOLD</p>}
        </div>
      </div>
    </div>
  );
};

export default StockComponent;
