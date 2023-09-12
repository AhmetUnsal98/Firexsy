import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  PointElement,
} from "chart.js";
ChartJS.register(LineElement, CategoryScale, LinearScale, PointElement);
const GraphCount = () => {
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
        label: "Toplam Adet Sayisi",
        borderColor: "gray",
        backgroundColor: "blue",
        borderWidth: "1",
        data: [10, 30, 20, 40, 20, 60, 90, 20, 60, 80, 10, 30],
      },
    ],
  });

  return (
    <div style={{ width: "48%", height: "100%", marginTop: "1.2rem" }}>
      <Line data={data} />
    </div>
  );
};

export default GraphCount;
