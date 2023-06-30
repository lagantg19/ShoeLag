import React, { useContext, useEffect, useState } from "react";
import { InventoryContext } from "../../context/InventoryContext";

import BarChart from "./components/BarChart";
import PieChart from "./components/PieChart";

const Dashboard = () => {
  const { getExplore, exploreItems } = useContext(InventoryContext);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let tot = 0;
    getExplore();
    exploreItems.map((item) => {
      if (item.buy) {
        tot += item.price;
      }
    });
    setTotal(tot);
  }, []);

  //pie chart

  return (
    <div className="container-fluid">
      <div className="row ">
        <div className="col d-flex justify-content-center">
          <h1 className="para">
            <strong>ADMIN DASHBOARD</strong>
          </h1>
        </div>
      </div>
      <div className="row  d-flex justify-content-center">
        <hr className="w-50 " />
      </div>

      <div className="row mt-5">
        <BarChart />
      </div>
      <div className="row mt-5">
        <PieChart />
      </div>
    </div>
  );
};

export default Dashboard;
