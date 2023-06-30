import React, { useContext, useEffect } from "react";
import { InventoryContext } from "../context/InventoryContext";
import { AuthContext } from "../context/AuthContext";
import LikedComponent from "../components/LikedComponent";
import axios from "axios";


const Liked = () => {
  const { exploreItems, getExplore } = useContext(InventoryContext);
  const { user } = useContext(AuthContext);
 

  useEffect(() => {
    axios
      .get("http://localhost:4000/api/shoeinventory/explore", {
        headers: {
          Authorization: `Bearer ${user.token}`,
        },
      })
      .then((response) => {
        getExplore(response.data);
      });
  }, []);
  return (
    <section className="explore w-100">
      <div className="container-fluid">
        <div className="row">
          <div className="col-12 d-flex justify-content-center  ">
            <h1 className="para mt-2  ">This is what you Love!</h1>
          </div>
        </div>
        <div className="row d-flex justify-content-evenly mt-2 ">
          {exploreItems.map((item) => {
            if (user.user_id !== item.user_id && !item.buy && item.save) {
              return <LikedComponent key={item._id} {...item} />;
            } 
          })}
        </div>
      </div>
    </section>
  );
};

export default Liked;
