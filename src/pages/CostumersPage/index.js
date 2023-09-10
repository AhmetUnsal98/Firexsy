import React from "react";
import "./costumers.scss";
import MainLayout from "../../layouts";
import { IoPersonOutline } from "react-icons/io5";
import CostumersTable from "./CostumersTable";
const Costumers = () => {
  return (
    <MainLayout>
      <div className="costumers-container">
        <div className="costumers-upper-container">
          <h3>Müşteriler</h3>
          <div className="costumers-upper-right">
            <span>Toplam Müşteri Sayısı</span>
            <div className="costumer-upper-right-tag">
              <IoPersonOutline size={15} color="#0066f4" />
              <span className="costumers-number">506</span>
            </div>
          </div>
        </div>
        <div className="costumers-table-container">
          <CostumersTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default Costumers;
