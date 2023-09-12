import React, { useState } from "react";
import {
  Chart as ChartJS,
  BarElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
} from "chart.js";
import { Bar } from "react-chartjs-2";
ChartJS.register(BarElement, CategoryScale, LinearScale, Tooltip, Legend);
const GraphKilogram = () => {
  const [data, setData] = useState({
    labels: [
      "Ocak",
      "Şubat",
      "Mart",
      "Nisan",
      "Mayıs",
      "Haziran",
      "Temmuz",
      "Ağustos",
      "Eylül",
      "Ekim",
      "Kasım",
      "Aralık",
    ],
    datasets: [
      {
        label: "Toplam Kilogram",
        backgroundColor: "#FC5835",
        data: [
          1000, 3000, 200, 400, 2000, 6000, 900, 2000, 500, 1500, 1000, 2000,
        ],
      },
    ],
  });

  return (
    <div style={{ width: "48%", height: "95%", marginTop: "1.5rem" }}>
      <Bar data={data} />
    </div>
  );
};

export default GraphKilogram;
