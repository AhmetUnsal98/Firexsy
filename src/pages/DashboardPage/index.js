import React, { useState } from "react";
import MainLayout from "../../layouts";
import "./dashboard.scss";
import TotalCostumersCard from "./components/Cards/TotalCostumersCard";
import TotalYscCard from "./components/Cards/TotalYscCard";
import TotalYsdCard from "./components/Cards/TotalYsdCard";
import GraphCount from "./components/GraphCount";
import GraphKilogram from "./components/GraphKilogram";
import AlertYscFilling from "./components/Alerts/AlertYscFilling";
import AlertYscMaintanance from "./components/Alerts/AlertYscMaintanance";
import AlertYsdMaintanance from "./components/Alerts/AlertYsdMaintanance";
import YscMaintananceTable from "./components/DashboardTables/YscMaintananceTable";
import YscFillingTable from "./components/DashboardTables/YscFillingTable";
import YsdMaintananceTable from "./components/DashboardTables/YsdMaintananceTable";
import TotalStorageYSC from "./components/DashboardTables/TotalStorageYSC";
import BillingYSC from "./components/DashboardTables/BillingYSC";
const DashboardPage = () => {
  const [table, setTable] = useState("yscmaintanance");
  const pull_data = (data) => {
    setTable(data);
  };

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
              <GraphCount /> <GraphKilogram />
            </div>
          </div>
        </div>
        <div className="dashboard-middle-container">
          <AlertYscMaintanance func={pull_data} bg={table} />
          <AlertYscFilling func={pull_data} bg={table} />
          <AlertYsdMaintanance func={pull_data} bg={table} />
        </div>
        <div className="dashboard-bottom-container">
          {table === "yscmaintanance" && <YscMaintananceTable />}
          {table === "yscfilling" && <YscFillingTable />}
          {table === "ysdmaintanance" && <YsdMaintananceTable />}
        </div>
        <div className="dashboard-storage-bill-container-wrapper">
          <div className="dashboard-storage-table-container">
            <h5>Depoda Bekleyen Yangın Söndürme Cihazları</h5>
            <TotalStorageYSC />
          </div>
          <div className="dashboard-bill-table-container">
            <h5>Faturalandırma Bekleyen Yangın Söndürme Cihazları</h5>
            <BillingYSC />
          </div>
        </div>
      </div>
    </MainLayout>
  );
};

export default DashboardPage;
