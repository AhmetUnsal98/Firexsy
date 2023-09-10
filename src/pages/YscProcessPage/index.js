import React, { useState } from "react";
import MainLayout from "../../layouts";
import "./yscpage.scss";
import YscTable from "./YscTable";
const YscProcessPage = () => {
  const [hareket, setHareket] = useState("hareket-fill");
  const handleHareket = (e) => {
    setHareket(e);
  };
  return (
    <MainLayout>
      <div className="ysc-page-container">
        <div className="ysc-page-inner-container">
          <h3>YANGIN SÖNDÜRME CİHAZI İŞLEMLERİ</h3>
          <div className="ysc-page-upper-container">
            <div className="ysc-page-input-row">
              <div className="ysc-page-input-row-left">
                <span>MÜŞTERİ</span>
              </div>
              <div className="ysc-page-input-row-right">
                <select value="Aktif">
                  <option>15 ŞEHİTLER FEN LİSESİ</option>
                </select>
              </div>
            </div>
            <div className="ysc-page-input-row">
              <div className="ysc-page-input-row-left">
                <span>ŞUBE</span>
              </div>
              <div
                style={{ marginRight: "2.5rem" }}
                className="ysc-page-input-row-right"
              >
                <select value="Aktif">
                  <option>ŞERDİVAN ŞUBE</option>
                </select>
              </div>
            </div>
            <button>Uygula</button>
          </div>
          <div className="ysc-page-process-container">
            <div className="ysc-page-process-upper-container"></div>
            <YscTable />
          </div>

          <div className="ysc-page-hareketler-upper">
            <div
              style={{ borderTopLeftRadius: "10px" }}
              className={
                hareket === "hareket-fill"
                  ? "ysc-page-hareketler-upper-bar-active"
                  : "ysc-page-hareketler-upper-bar"
              }
              onClick={() => {
                handleHareket("hareket-fill");
              }}
            >
              <span>Bakım-Dolum Hareketleri</span>
            </div>
            <div
              style={{ borderTopRightRadius: "10px" }}
              className={
                hareket === "hareket-depo"
                  ? "ysc-page-hareketler-upper-bar-active"
                  : "ysc-page-hareketler-upper-bar"
              }
              onClick={() => {
                handleHareket("hareket-depo");
              }}
            >
              <span>Depo Hareketleri</span>
            </div>
          </div>
          <YscTable />
        </div>
      </div>
    </MainLayout>
  );
};

export default YscProcessPage;
