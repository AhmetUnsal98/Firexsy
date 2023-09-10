import React from "react";
import "./alertysdmaintanance.scss";
import { BiBell } from "react-icons/bi";

const AlertYsdMaintanance = (props) => {
  const handleClick = (text) => {
    props.func(text);
  };
  return (
    <div
      className={
        props.bg === "ysdmaintanance"
          ? "alert-ysd-maintanance-container-active"
          : "alert-ysd-maintanance-container"
      }
      onClick={() => {
        handleClick("ysdmaintanance");
      }}
    >
      <span className="ysd-maintanance-text">
        Yangın Söndürme Dolapları Bakım Uyarıları
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
        <span className="ysd-maintanance-number">42</span>
      </div>
    </div>
  );
};

export default AlertYsdMaintanance;
