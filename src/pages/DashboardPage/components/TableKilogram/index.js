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
const TableKilogram = () => {
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
        data: [1000, 3000, 200, 400, 2000, 6000, 900, 2000],
      },
    ],
  });

  return (
    <div style={{ width: "45%", height: "85%", marginTop: "1rem" }}>
      <Bar data={data} />
    </div>
  );
};

export default TableKilogram;
