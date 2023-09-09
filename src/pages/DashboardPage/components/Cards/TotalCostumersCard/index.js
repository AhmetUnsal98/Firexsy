import React from "react";
import "../card.scss";
import { IoPeopleSharp } from "react-icons/io5";
const TotalCostumersCard = () => {
  return (
    <div className="dashboard-card-container">
      <div className="dashboard-card-upper-container">
        <span>Müşteriler</span>
        <div className="dashboard-card-icon-container">
          <IoPeopleSharp color="#4B7ED6" size={25} />
        </div>
      </div>
      <div className="dashboard-card-bottom-container">
        <span>506</span>
      </div>
    </div>
  );
};

export default TotalCostumersCard;
