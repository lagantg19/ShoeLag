import React, { useContext, useEffect, useState } from "react";
import { AuthContext } from "../context/AuthContext";
import { InventoryContext } from "../context/InventoryContext";
import ExploreComponent from "../components/ExploreComponent";


const Explore = () => {
  const { user } = useContext(AuthContext);
  const { getExplore, exploreItems } = useContext(InventoryContext);
  const [loading, setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    },1500);

    getExplore();
  }, []);

  

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
                <strong>GOING TO EXPLORE </strong>
              </h1>
            </div>
          </div>
        </div>
      )}

      {!loading && (
        <section className="explore w-100">
          <div className="container-fluid">
            <div className="row">
              
              <div className="col-12 d-flex justify-content-center  ">
                <h1 className="para mt-2  ">Explore</h1>
              </div>
            </div>
            <div className="row d-flex justify-content-evenly mt-2 ">
              {exploreItems.map((item) => {
                if (user.user_id !== item.user_id && !item.buy && item.approved) {
                  return <ExploreComponent key={item._id} {...item} />;
                }
              })}
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Explore;
