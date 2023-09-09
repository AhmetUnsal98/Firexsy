import React from "react";
import MainLayout from "../../layouts";
import "./dashboard.scss";
import TotalCostumersCard from "./components/Cards/TotalCostumersCard";
import TotalYscCard from "./components/Cards/TotalYscCard";
import TotalYsdCard from "./components/Cards/TotalYsdCard";
import TableCount from "./components/TableCount";
import TableKilogram from "./components/TableKilogram";
const DashboardPage = () => {
  return (
    <MainLayout>
      <div className="dashboard-container">
        <div className="dashboard-upper-container">
          <div className="dashboard-upper-container-left-side">
            <TotalCostumersCard />
            <TotalYscCard />
            <TotalYsdCard />
          </div>
          <div className="dashboard-upper-container-right-side">
            <span>
              Aylara göre dolum yapılan toplam yangın söndürme cihazları ve
              dolum miktarı
            </span>
            <div className="dashboard-upper-container-right-side-tables-container">
              <TableCount /> <TableKilogram />
            </div>
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
