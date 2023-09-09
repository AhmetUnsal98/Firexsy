import React from "react";
import "../card.scss";
import { BiCabinet } from "react-icons/bi";
const TotalYsdCard = () => {
  return (
    <div className="dashboard-card-container">
      <div className="dashboard-card-upper-container">
        <span>Yangın Söndürme Dolapları</span>
        <div className="dashboard-card-icon-container">
          <BiCabinet color="#4B7ED6" size={25} />
        </div>
      </div>
      <div className="dashboard-card-bottom-container">
        <span>1.265</span>
      </div>
    </div>
  );
};

export default TotalYsdCard;
