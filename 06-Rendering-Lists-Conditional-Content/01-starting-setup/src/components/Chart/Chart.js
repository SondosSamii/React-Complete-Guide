import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

const Chart = ({ dataPoints }) => {
  console.log(dataPoints);
  const dataPointsValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMax = Math.max(...dataPointsValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => {
        // console.log(dataPoint);
        return (
          <ChartBar
            key={dataPoint.label}
            value={dataPoint.value}
            maxValue={totalMax}
            label={dataPoint.label}
          />
        );
      })}
    </div>
  );
};

export default Chart;
