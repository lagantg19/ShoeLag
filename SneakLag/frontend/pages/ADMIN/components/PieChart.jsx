import React, { useContext } from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Pie } from "react-chartjs-2";
import { InventoryContext } from "../../../context/InventoryContext";
import { Bar } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);

const PieChart = () => {
  const { exploreItems } = useContext(InventoryContext);
  const data = {
    labels: exploreItems
      .filter((item) => item.like > 0)
      .map((item) => {
        return item.name;
      }),
    datasets: [
      {
        label: "# of Likes",
        data: exploreItems
          .filter((item) => item.like > 0)
          .map((item) => {
            return item.like;
          }),
        backgroundColor: [
          "rgba(255, 99, 132, 0.2)",
          "rgba(54, 162, 235, 0.2)",
          "rgba(255, 206, 86, 0.2)",
          "rgba(75, 192, 192, 0.2)",
          "rgba(153, 102, 255, 0.2)",
          "rgba(255, 159, 64, 0.2)",
          "rgba(250, 150, 60, 0.2)",
          "rgba(10, 30, 300, 0.2)",
        ],
        borderColor: [
          "rgba(255, 99, 132, 1)",
          "rgba(54, 162, 235, 1)",
          "rgba(255, 206, 86, 1)",
          "rgba(75, 192, 192, 1)",
          "rgba(153, 102, 255, 1)",
          "rgba(255, 159, 64, 1)",
        ],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className="row mt-5">
      <h1 className="title-1">
        <strong>POPULARITY CHART</strong>
      </h1>
      <div className="col-6 mt-5">
        <Pie data={data} style={{ height: "500px" }} />
      </div>
      <div className="col-6 d-flex align-items-center">
        <Bar data={data} style={{ height: "500px" }} />
      </div>
    </div>
  );
};

export default PieChart;
