import React from "react";
import "../card.scss";
import { FaFireExtinguisher } from "react-icons/fa";
const TotalYscCard = () => {
  return (
    <div className="dashboard-card-container">
      <div className="dashboard-card-upper-container">
        <span>Yangın Söndürme Cihazları</span>
        <div className="dashboard-card-icon-container">
          <FaFireExtinguisher color="#4B7ED6" size={25} />
        </div>
      </div>
      <div className="dashboard-card-bottom-container">
        <span>28.506</span>
      </div>
    </div>
  );
};

export default TotalYscCard;
