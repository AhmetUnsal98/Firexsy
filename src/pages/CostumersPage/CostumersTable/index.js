import React, { useState } from "react";
import "./costumerstable.scss";
import { Table, Input } from "antd";
import { dataSourceCostumers } from "../../../dummyData";
import { PiEyeFill } from "react-icons/pi";
import { AiFillEdit } from "react-icons/ai";
import { BsFillPersonPlusFill } from "react-icons/bs";

import { motion } from "framer-motion";
const CostumersTable = () => {
  const [searchedText, setSearchedText] = useState("");
  const columns = [
    {
      key: "1",
      title: "Müşteri",
      dataIndex: "costumer",
    },
    {
      key: "2",
      title: "Ana Yetkili",
      dataIndex: "anayetkili",
      filteredValue: [searchedText],
      onFilter: (value, record) => {
        return (
          String(record.costumer).toLowerCase().includes(value.toLowerCase()) ||
          String(record.anayetkili)
            .toLowerCase()
            .includes(value.toLowerCase()) ||
          String(record.telefon).toLowerCase().includes(value.toLowerCase())
        );
      },
    },
    {
      key: "3",
      title: "Telefon",
      dataIndex: "telefon",
    },
    {
      key: "4",
      title: "Durum",
      dataIndex: "durum",
      render: (durum) => {
        return (
          <>
            <div
              style={{
                width: "42px",
                height: "18px",
                backgroundColor: durum === "aktif" ? "#57B78F" : "#F3BB4D",
                borderRadius: "12px",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  textAlign: "center",
                  fontSize: "10px",
                  color: "white",
                  fontWeight: "600",
                }}
              >
                {durum === "aktif" ? "Aktif" : "Pasif"}
              </span>
            </div>
          </>
        );
      },
    },

    {
      key: "4",
      title: "",
      render: () => {
        return (
          <>
            <PiEyeFill
              color="#0066f4"
              size={20}
              style={{ cursor: "pointer" }}
            />
            <a href="/costumeredit">
              <AiFillEdit
                color="gray"
                size={20}
                style={{ cursor: "pointer", marginLeft: "0.4rem" }}
              />
            </a>
          </>
        );
      },
    },
  ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="education"
      style={{ width: "100%", height: "100%" }}
    >
      <div className="costumer-table-upper">
        <Input.Search
          style={{ width: "20%", marginBottom: "0.5rem" }}
          placeholder="Search here..."
          onChange={(e) => {
            setSearchedText(e.target.value);
          }}
        />
        <button className="costumer-table-add-new-costumer-button">
          {" "}
          <BsFillPersonPlusFill
            color="white"
            size={20}
            style={{ cursor: "pointer", marginLeft: "0.4rem" }}
          />
          <span>Yeni Müşteri Ekle</span>
        </button>
      </div>

      <Table
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
        className="education"
        columns={columns}
        dataSource={dataSourceCostumers}
        pagination={{
          pageSize: 6,
        }}
      />
    </motion.div>
  );
};

export default CostumersTable;
