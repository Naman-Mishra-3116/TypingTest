import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Title,
  Tooltip,
} from "chart.js";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip
);

const LineGraph = ({ data }) => {
  if (!data) {
    return null;
  }

  const wordPerMinuteData = data.map((item) => item.wpm);
  const accuracyData = data.map((item) =>
    item.accuracy === Number.isNaN(item.accuracy) ? 0 : item.accuracy
  );
  const wordNumber = data.map((item) => item.wordNumber);
  const incorrectWords = data.map((item) => item.iWords);

  const mapingData = {
    labels: wordNumber,
    datasets: [
      {
        labels: "Words Per Minute",
        data: wordPerMinuteData,
        borderColor: "rgb(66, 176, 255)",
        fill: true,
        pointStyle: "circle",
        tension: 0.8,
        yAxisID: "y1",
        pointRadius: 3,
      },
      {
        label: "Incorrect Words",
        data: incorrectWords,
        borderColor: "rgba(41,41,41)",
        fill: true,
        pointStyle: "circle",
        pointRadius: 3,
        tension: 0.8,
        yAxisID: "y2",
      },
    ],
  };

  const options = {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      x: {
        title: {
          display: true,
          text: "Word Number",
        },
        grid: {
          display: true,
          color: "#1f1f1f",
        },
      },
      y1: {
        id: "y1",
        position: "left",
        title: {
          display: true,
          text: "Words Per Minute",
        },
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 10,
        },
      },
      y2: {
        id: "y2",
        position: "right",
        title: {
          display: true,
          text: "Incorrect Words",
        },
        grid: {
          display: false,
        },
        ticks: {
          stepSize: 1,
        },
      },
    },
  };

  return (
    <div className="w-[100%]">
      <Line options={options} data={mapingData} />
    </div>
  );
};

export default LineGraph;
