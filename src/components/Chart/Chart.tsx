import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props: any) {
  const dataPointValues = props.items.map((d: any) => d.value);
  const totalMax = Math.max(...dataPointValues);
  return (
    <div className="chart">
      {props.items.map((item: any) => (
        <ChartBar
          key={item.label}
          value={item.value}
          maxValue={totalMax}
          label={item.label}
        />
      ))}
    </div>
  );
}
