import React from "react";
import "./alertyscmaintanance.scss";
import { BiBell } from "react-icons/bi";
const AlertYscMaintanance = (props) => {
  const handleClick = (text) => {
    props.func(text);
  };
  return (
    <div
      className={
        props.bg === "yscmaintanance"
          ? "alert-ysc-maintanance-container-active"
          : "alert-ysc-maintanance-container"
      }
      onClick={() => {
        handleClick("yscmaintanance");
      }}
    >
      <span className="ysc-maintanance-text">
        Yangın Söndürme Cihazları Bakım Uyarıları
      </span>
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          border: "1px solid #0066f4 ",
          borderRadius: "12px",
          padding: "4px",
          backgroundColor: "white",
        }}
      >
        <BiBell size={20} color="#0066f4" />
        <span className="ysc-maintanance-number">126</span>
      </div>
    </div>
  );
};

export default AlertYscMaintanance;
