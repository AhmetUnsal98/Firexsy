import React from "react";
import "./alertyscfilling.scss";
import { BiBell } from "react-icons/bi";
const AlertYscFilling = (props) => {
  const handleClick = (text) => {
    props.func(text);
  };
  return (
    <div
      className={
        props.bg === "yscfilling"
          ? "alert-ysc-filling-container-active"
          : "alert-ysc-filling-container"
      }
      onClick={() => {
        handleClick("yscfilling");
      }}
    >
      <span className="ysc-filling-text">
        Yangın Söndürme Cihazları Dolum Uyarıları
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
        <span className="ysc-filling-number">1226</span>
      </div>
    </div>
  );
};

export default AlertYscFilling;
