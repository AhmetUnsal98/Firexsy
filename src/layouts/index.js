import React from "react";
import { useLocation } from "react-router-dom";
import "./mainlayout.scss";
import { BiSolidDashboard } from "react-icons/bi";
import { BiCabinet } from "react-icons/bi";
import { BiSolidReport } from "react-icons/bi";
import { BiTag } from "react-icons/bi";
import { BiQuestionMark } from "react-icons/bi";
import { BiChevronDown } from "react-icons/bi";
import { BiLogOut } from "react-icons/bi";
import { IoPeopleSharp } from "react-icons/io5";
import { IoPersonOutline } from "react-icons/io5";
import { FaFireExtinguisher } from "react-icons/fa";
import logo from "../assets/logo.png";
const MainLayout = ({ children }) => {
  const location = useLocation();
  //Spiliting after slash and take category pathname to cat variable
  const url = location.pathname.split("/")[1];

  return (
    <div className="mainlayout">
      <div className="mainlayout-left-side">
        <div className="mainlayout-left-side-head">
          <h3>firexsy</h3>
          <div style={{ marginTop: "0.7rem" }}>
            <span>4 gün kaldı</span>
            <span className="demo-tag">demo</span>
          </div>
        </div>

        <div className="mainlayout-left-side-menu">
          <a href="/dashboard">
            <div
              className={
                url === "dashboard"
                  ? "mainlayout-menu-item-active"
                  : "mainlayout-menu-item"
              }
            >
              <BiSolidDashboard size={20} color="gray" />
              <span>Dashboard</span>
            </div>
          </a>
          <a href="/costumers">
            <div
              className={
                url === "costumers"
                  ? "mainlayout-menu-item-active"
                  : "mainlayout-menu-item"
              }
            >
              <IoPeopleSharp size={20} color="gray" />
              <span>Müşteriler</span>
            </div>
          </a>

          <a href="/ysc">
            <div
              className={
                url === "ysc"
                  ? "mainlayout-menu-item-active"
                  : "mainlayout-menu-item"
              }
            >
              <FaFireExtinguisher size={20} color="gray" />
              <span>Yangın Söndürme Cihazı İşlemleri</span>
            </div>
          </a>

          <div className="mainlayout-menu-item">
            <BiCabinet size={20} color="gray" />
            <span>Yangın Dolabı İşlemleri</span>
          </div>

          <div className="mainlayout-menu-item">
            <BiSolidReport size={20} color="gray" />
            <span>Raporlar</span>
          </div>
          <div className="mainlayout-menu-item">
            <BiTag size={20} color="gray" />
            <span>Tanımlamalar</span>
          </div>
        </div>
        <div className="mainlayout-left-side-bottom">
          <div
            style={{
              cursor: "pointer",
              width: "80%",
              display: "flex",
              alignItems: "center",
              margin: "0.4rem",
            }}
          >
            <BiQuestionMark size={20} color="white" />
            <span style={{ marginLeft: "0.4rem" }}>Soru ve görüşleriniz</span>
          </div>
          <div
            style={{ width: "80%", height: "1px", backgroundColor: "gray" }}
          ></div>
          <div
            style={{
              cursor: "pointer",
              width: "80%",
              display: "flex",
              alignItems: "center",
              margin: "0.4rem",
            }}
          >
            <BiLogOut size={20} color="#FF265A" />
            <span style={{ marginLeft: "0.4rem", color: "#FF265A" }}>
              Çıkış Yap
            </span>
          </div>
        </div>
      </div>
      <div className="mainlayout-right-side">
        <div className="mainlayout-upper-container">
          <div className="mainlayout-upper-container-logo">
            <img src={logo}></img>
          </div>
          <div className="mainlayout-upper-container-user">
            <div className="mainlayout-upper-container-user-title">
              <span>
                Jhon<b>Doe</b>
              </span>
              <BiChevronDown size={15} color="gray" />
            </div>
            <IoPersonOutline size={20} color="gray" />
          </div>
        </div>
        {children}
        <div className="mainlayout-bottom-container">
          <span style={{ marginLeft: "0.5rem" }}>
            © Copyright 2023 | Tüm Hakları Saklıdır.
          </span>
          <span style={{ marginRight: "0.5rem" }}>
            S.S.S | Görüş ve Önerileriniz | Gizlilik Politikaları
          </span>
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
